<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomController extends Controller
{
    protected mixed $model;

    protected string $index;

    /**
     * @return mixed
     */
    public function getModel()
    {
        return $this->model;
    }

    public function index(Request $request) {
        return Inertia::render(
            $this->index,
            [
                'data' => [],
            ]
        );
    }

    public function save(Request $request) {
        try {
            $fomrData = $request['data'] ?? [];
            $customUrlToReturn = $request->query();
            if(isset($fomrData) && !empty($fomrData)) {
                // Insertar en la base de datos / crear
                $dataSaved = $this->getModel()::insertRecords($fomrData);
                //
                return response()->json($dataSaved);
            }
        } catch (\Exception $e) {
            dd($e);
            return [
                'Error' => $e->getMessage(),
            ];
        }
 
    }

}
