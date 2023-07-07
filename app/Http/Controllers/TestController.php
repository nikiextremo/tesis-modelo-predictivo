<?php 
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserTest;

class TestController extends Controller
{
    //TODO: delete this file
    public function index()
    {
        // dd("HOLA DESDE INDEX");
        $users = UserTest::findAllRecords();
        return response()->json($users);
    }
}
