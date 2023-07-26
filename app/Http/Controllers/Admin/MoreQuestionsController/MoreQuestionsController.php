<?php

namespace App\Http\Controllers\Admin\MoreQuestionsController;

use App\Http\Controllers\CustomController;
use App\Models\Admin\MoreQuestions\MoreQuestionsModel;
use App\Models\GetTableFromDB\CareerModel;
use App\Models\GetTableFromDB\CharacteristicRelationModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use PDO;

class MoreQuestionsController extends CustomController
{
    /**
     * @inheritdoc
     */
    protected mixed $model = MoreQuestionsModel::class;

    protected string $index = 'admin/addQuestions';

    public function index(Request $request)
    {
        $questionsList = [];
        $questions = new (MoreQuestionsModel::class)();
        $questionsList = $questions->pluck('C_description', 'IdCCharacteristic')
            ->map(function ($description, $id) {
                return ['id' => $id, 'C_description' => $description];
            })
            ->values()
            ->toArray();
        $career = [];
        $careerData = CareerModel::findAllCareers();
        if ($careerData) {
            $career = array_map(function ($value) {
                return [
                    'IdCareer' => $value->IdCareer,
                    'F_Id' => $value->F_Id,
                    'C_Name' => $value->C_Name,
                    'C_Status' => $value->C_Status,
                ];
            }, $careerData);
        }
        return Inertia::render(
            $this->index,
            [
                'careerList' => $career,
                'questionsList' => $questionsList
            ]
        );
    }

    public function save(Request $request)
    {
        try {
            $statusSaved = false;
            $request = $request->data;
            // Caracteristica a guardar
            $Career_Characteristic = $request['Career_Characteristic'];
            // Modelo de la tabla de las caracteristicas
            $model_characteristic = new $this->model();
            $model_characteristic->C_Characteristic_Status = 1;
            $model_characteristic->C_description = $Career_Characteristic;
            // Guardar la informacion y obtener el resultado para linkearlo
            $model_characteristic->save();
            // dd($model_characteristic->getAttributes());
            // Retornar la data guardada

            return  response()->json($model_characteristic->getAttributes());
        } catch (\Exception $e) {
            dd($e);
            return [
                'Error' => $e->getMessage(),
            ];
        }
    }

    public function careerQuestionSave(Request $request)
    {
        try {
            $conn = new PDO("sqlsrv:Server=localhost;Database=projecto_tesis", 'sa', 'root');
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $request = $request->data;
            // Lista de ids de las carreras
            $IdCareer = $request['IdCareer'];
            // Id de la caracteristica a linkear
            $Id_Career_Characteristic = $request['IdCharacteristic'];
            $sql = "INSERT INTO [dbo].[Career_characteristic_relation] ([C_characteristic_Id], [C_Id], [C_Relation_status])
                SELECT $Id_Career_Characteristic, A.IdCareer, 1 FROM [dbo].[Career] AS A
                WHERE A.IdCareer IN (" . implode(',', $IdCareer) . ")";
            // Ejecutar la consulta
            $conn->exec($sql);
            // Cerrar la conexión
            $conn = null;
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
        // }

        // Devolver un inner join 


    }
}
