<?php

namespace App\Http\Controllers;

use App\Models\FormModel\ProvinceModel;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomController extends Controller
{
    protected mixed $model;

    protected string $index;


    public function index(Request $request)
    {
        $data = [];
        $cookie = $request->cookie()['cookie'] ?? "";
        if (isset($cookie) && !empty($cookie)) {
            $data = $this->model::findRecordByCookie($cookie);
        }
        $provinces = ProvinceModel::findAllProvinces();
        return Inertia::render(
            $this->index,
            [
                'data' => $data,
                'provinces' => $provinces,
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
        } catch (\Exception $e) {
            dd($e);
            return [
                'Error' => $e->getMessage(),
            ];
        }
    }
}
