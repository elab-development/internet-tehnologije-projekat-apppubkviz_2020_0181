<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TeamEventController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/users', [UserController::class, 'index']);
Route::get('/teams', [TeamController::class, 'index']);
Route::get('/events', [EventController::class, 'index']);
Route::get('team-event', [TeamEventController::class, 'index']);

Route::get('/users/{id}', [UserController::class, 'show']);
Route::get('/teams/{id}', [TeamController::class, 'show']);
Route::get('/events/{id}', [EventController::class, 'show']);
Route::get('team-event/{id}', [TeamEventController::class, 'show']);