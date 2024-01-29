<?php

namespace App\Http\Controllers;

use App\Models\Team_Event;
use Illuminate\Http\Request;
use App\Http\Resources\TeamEventResource;

class TeamEventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teamEvents = Team_Event::all();
        return $teamEvents;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
    public function show($teamEventID)
    {
        $team_event = Team_Event::find($teamEventID);
        if(is_null($team_event))
            return response()->json('Data not found', 404);
        return response()->json($team_event);    
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Team_Event $team_Event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Team_Event $team_Event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team_Event $team_Event)
    {
        //
    }
}
