<?php 
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FormularioModel;

class FormularioController extends Controller
{
    //TODO: implement this in a generic controller
    public function save(Request $request)
    {
        dd($request);
        // dd("HOLA DESDE INDEX");
        // $users = UserTest::findAllRecords();
        // return response()->json($users);
    }
}
