<?php

namespace App\Http\Controllers;
use Inertia\Inertia;
// use Illuminate\Http\Request;

class CubeController extends CustomController
{
    //
    protected string $index = 'cube/cube';

    public function cubeIndex () 
    {
        $data = [];
        return Inertia::render(
            $this->index,
            [
                'data ' => $data ,
            ]
        );
    }
}
