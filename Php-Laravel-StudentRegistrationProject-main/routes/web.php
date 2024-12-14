<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/edit-student',function () {
    echo "Route created for Student Information Editing";
});

Route::get('/create-student',[StudentController::class,'formIndex']);
Route::post('/create-post',[StudentController::class,'formPost'])->name('create_post');