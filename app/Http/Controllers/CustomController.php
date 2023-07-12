<?php

namespace App\Http\Controllers;

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
        return Inertia::render(
            $this->index,
            [
                'data' => $data,
            ]
        );
    }

    public function save(Request $request)
    {
        try {
            $dataSaved = [];
            $request = $request['data'] ?? [];
            if (isset($request) && !empty($request)) {
                $cookie = $request['cookie'] ?? "";
                if (!empty($cookie)) {
                    $dataSaved = $this->model::findRecordByCookieAndUpdate($cookie, $request);
                    if (!isset($dataSaved)) {
                        $dataSaved = $this->model::insertRecords($request);
                    }
                }
            }
            if (isset($dataSaved)) {
                // Consultar antes de enviar al front la data para evitar data desactualizada
                $data = $this->model::findRecordByCookie($cookie);
                //
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
