<?php

use App\Http\Controllers\FormController\InfoUserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FormController\SectionOneController;
use App\Http\Controllers\Admin\MoreQuestionsController\MoreQuestionsController;
use App\Http\Controllers\ResultQuestionController;
use App\Http\Controllers\CubeController;

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

Route::group(['prefix' => 'form'], function() {

    Route::get('/info', [InfoUserController::class, 'index'])->name('info.index');
    Route::post('/info/save', [InfoUserController::class, 'save'])->name('info.save');
    Route::get('/section/one', [SectionOneController::class, 'questionIndex'])->name('section.one.index');
    Route::post('/section/one/save', [SectionOneController::class, 'saveQuestions'])->name('section.one.save');
});
// PROTEGER CON LOGIN
Route::get('/add/questions/index', [MoreQuestionsController::class, 'index'])->name('questions.index');
Route::post('/questions/save', [MoreQuestionsController::class, 'save'])->name('questions.save');
Route::post('/career/questions/save', [MoreQuestionsController::class, 'careerQuestionSave'])->name('career.questions.save');

Route::get('/result/index', [ResultQuestionController::class, 'index'])->name('result.index');
Route::post('/update/cookie', [InfoUserController::class, 'updateCookie'])->name('update.cookie');

Route::get('/data/cubo', [CubeController::class, 'index'])->name('cube.index');

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('/');