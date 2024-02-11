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


Route::resource('events', EventController::class)->only(['index', 'show']);

Route::get('teams_events', [TeamEventController::class, 'index']);
Route::get('teams_events/{id}', [TeamEventController::class, 'show']);

Route::post('register',[AuthController::class,'register']);
Route::post('login',[AuthController::class,'login']);
Route::get('/events/{year}/{month}', [EventController::class,'vratiDogadjajePoMesecuIGodini']);
Route::get('/team_event/results/{eventID}', [TeamEventController::class, 'prikaziRezultateDogadjaja']);

Route::get('/chart', function () {
    return view('charts.chart');
});

Route::group(['middleware' => ['auth:sanctum']], function() {
    Route::get('/profile', function(Request $request) {
        return auth()->user();
    });
 
    Route::post('logout',[AuthController::class, 'logout']);
    Route::resource('teams', TeamController::class)->only(['store','update','destroy']);
    Route::get('vratiTimoveKorisnika', [TeamController::class,'vratiTimoveKorisnika']); 
    Route::get('vratiDogadjajeKorisnika', [TeamEventController::class,'vratiDogadjajeKorisnika']);
    Route::resource('add_team_event', TeamEventController::class)->only(['store']);
    Route::delete('delete_team_event/{team_Event}', [TeamEventController::class, 'destroy']);
    Route::get('/team_event_admin/{eventID}', [TeamEventController::class, 'prikaziPrijavljeneTimove']);
    Route::put('update_results/{id}', [TeamEventController::class, 'update']);
    
});
