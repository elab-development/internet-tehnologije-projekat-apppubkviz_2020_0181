<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\TeamEventController;
use App\Http\Controllers\API\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/users', [UserController::class, 'index']);
Route::get('/users/{id}', [UserController::class, 'show']);

Route::resource('teams', TeamController::class)->only(['index', 'show']);
Route::resource('events', EventController::class)->only(['index', 'show']);

Route::get('teams_events', [TeamEventController::class, 'index']);
Route::get('teams_events/{id}', [TeamEventController::class, 'show']);

Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);
