<?php

namespace App\Http\Controllers\FormController;

use App\Http\Controllers\CustomController;
use App\Models\FormModel\SectionOneModel;
use Illuminate\Http\Request;
use PDO;

class SectionOneController extends CustomController
{

    /**
     * @inheritdoc
     */
    protected mixed $model = SectionOneModel::class;

    protected string $index = 'form/sectionOne';

    public function saveQuestions(Request $request)
    {
        try {
            $conn = new PDO("sqlsrv:Server=localhost;Database=projecto_tesis", 'sa', 'root');
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $request = $request->data;
            //insertar en la base de datos
            $result = [];
            $Id_User = $request['userId'];
            $Token_Question = (string)$request['tokenQuestion'];
            $Date_Question = (string)$request['dateOfResponse'];
            // $result['date_question'] = $Date_Question;
            foreach ($request['data'] as $question) {
                $IdCCharacteristic = $question['IdCCharacteristic'];
                $ValueQuestion = $question['ValueQuestion'];
                $sql = "INSERT INTO [dbo].[Form] (
                [Id_User], 
                [IdCCharacteristic], 
                [ValueQuestion], 
                [Token_Question],
                [Date_Question]
                ) VALUES (
                    $Id_User, 
                    $IdCCharacteristic, 
                    $ValueQuestion, 
                    '$Token_Question',
                    '$Date_Question'
                    )";
                // Ejecutar la consulta
                $conn->exec($sql);
            }
            // Ejecutar la consulta
            $conn = null;
            return response()->json($result);
        } catch (\Exception $e) {
            return ['error' => $e->getMessage()];
        }
    }
}
