<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\FormController\SectionOneController;
use App\Http\Controllers\FormController\SectionThreeController;
use App\Http\Controllers\FormController\SectionTwoController;

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

    Route::get('/section/one', [SectionOneController::class, 'index'])->name('section.one.index');
    Route::post('/section/one/save', [SectionOneController::class, 'save'])->name('section.one.save');
    Route::get('/section/two', [SectionTwoController::class, 'index'])->name('section.two.index');
    Route::post('/section/two/save', [SectionTwoController::class, 'save'])->name('section.two.save');
    Route::get('/section/three', [SectionThreeController::class, 'index'])->name('section.three.index');
    Route::get('/section/three/save', [SectionThreeController::class, 'save'])->name('section.three.save');
});
Route::get('/', function () {
    return Inertia::render('welcome');
})->name('/');