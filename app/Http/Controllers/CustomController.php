<?php

namespace App\Http\Controllers;

use App\Facilities\SqlServerQuery;
use App\Models\FormModel\InfoUserModel;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Exception;

class CustomController extends Controller
{
    protected mixed $model;

    protected string $index;


    public function index(Request $request)
    {
        $cookie = $request->cookie()['cookie'] ?? "";
        return Inertia::render(
            $this->index,
            [
                'cookie' => $cookie,
            ]
        );
    }

    public function save(Request $request)
    {
        try {
            $model = new $this->model();
            $request = $request->input('data') ?? [];
            if (isset($request) && !empty($request)) {
                $cookie = $request['cookie'] ?? "";
                if (!empty($cookie)) {
                    $data = [];
                    $record = $this->model::findRecordByCookie($cookie);
                    if (isset($record) && !empty($record)) {
                        //
                        foreach ($model->getFillable() as $key) {
                            if (isset($request[$key])) {
                                $data[$key] = $request[$key];
                            }
                        }
                        $this->model::findRecordByCookieAndUpdate($cookie, $data);
                    } else {
                        $model->fill($request);
                        $model->save();
                    }
                }
            }
            // Consultar antes de enviar al front la data para evitar data desactualizada
            $data = $this->model::findRecordByCookie($cookie);
            //
            if (isset($data) && !empty($data)) {
                return response()->json($data);
            } else {
                return [
                    'Error' => 'El guardado no fue exitoso, volver a enviar la peticion',
                ];
            }
        } catch (Exception $e) {
            return throw new Exception("Se ha producido un error: " . $e->getMessage());
        }
    }

    public function questionIndex(Request $request)
    {
        try {
            $characteristic_by_area = [];
            $resultado = [];
            $user = [];
            $cookie = $request->cookie()['cookie'] ?? "";
            if (isset($cookie) && !empty($cookie)) {
                $user = (array) InfoUserModel::findUserByCookie($cookie);
            }
            // Inner join para filtrar por facultad
            $questions_filtered = SqlServerQuery::connection_query(
                "SELECT A.IdCCharacteristic, A.C_description, B.Area_Name FROM [dbo].[Career_characteristic] AS A
                INNER JOIN [dbo].[Area] AS B ON A.IdArea = B.IdArea
                ORDER BY B.Area_Name;"
            ) ?? [];
            foreach ($questions_filtered as $index => $item) {
                $C_description = $item['C_description'];
                $Area_Name = $item['Area_Name'];
                $IdCCharacteristic = $item['IdCCharacteristic'];

                if (isset($characteristic_by_area[$Area_Name])) {
                    $characteristic_by_area[$Area_Name][] = [
                        'C_description' => $C_description,
                        'IdCCharacteristic' => $IdCCharacteristic,
                    ];
                } else {
                    $characteristic_by_area[$Area_Name][] = [
                        'C_description' => $C_description,
                        'IdCCharacteristic' => $IdCCharacteristic,
                    ];
                }
            }
            foreach ($characteristic_by_area as $index => $value) {
                $resultado[] = [
                    'Area' => $index,
                    'Questions' => $value,
                ];
            }
            $dataSaved = SqlServerQuery::connection_query("SELECT 
                Form.IdQuest, 
                Form.IdCCharacteristic, 
                Form.ValueQuestion 
            FROM [dbo].[Form] AS Form 
            WHERE Token_Question = '$cookie'; 
            ") ?? [];
            return Inertia::render(
                $this->index,
                [
                    'user' => $user,
                    'data' => $resultado,
                    'dataSaved' => $dataSaved,
                ]
            );
        } catch (Exception $e) {
            return [
                'Error' => $e->getMessage(),
            ];
        }
    }
}
