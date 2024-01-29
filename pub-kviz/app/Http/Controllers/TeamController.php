<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use App\Http\Resources\TeamResource;
use App\Http\Resources\TeamCollection;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teams = Team::all();
        return new TeamCollection($teams);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
       // $validator = Validator::make($request->all(). )
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Team $team)
    {
        return new TeamResource($team);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Team $teams)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Team $teams)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $teams)
    {
        //
    }
}
