<?php

namespace App\Http\Controllers;

use App\Models\TeamEvent;
use Illuminate\Http\Request;
use App\Http\Resources\TeamEventResource;
use App\Http\Resources\TeamEventCollection;

class TeamEventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teamEvents = TeamEvent::all();
        return new TeamEventCollection($teamEvents);
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
        $teamEvent = TeamEvent::find($teamEventID);
        if(is_null($teamEvent)){
            return response()->json('Data not found');
        }

        return new TeamEventResource($teamEvent);  
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TeamEvent $team_Event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TeamEvent $team_Event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TeamEvent $team_Event)
    {
        //
    }
}
