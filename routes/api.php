<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\UserTest;
use App\Http\Controllers\TestController;
use App\Http\Controllers\FormularioController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/test', [TestController::class, 'index']);
// Route::get('/test', function (Request $request) {
//     $users = UserTest::all();
//     dd($users);
//     return response()->json($users);
// });
// Route::get('/greeting', function () {
//     return 'Hello World';
// });
Route::get('/', function () {
    return view('welcome');
});
Route::post('/formulario', [FormularioController::class, 'save']);