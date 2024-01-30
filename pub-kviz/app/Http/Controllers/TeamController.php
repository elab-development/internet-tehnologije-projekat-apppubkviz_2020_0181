<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Http\Request;
use App\Http\Resources\TeamResource;
use App\Http\Resources\TeamCollection;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

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
        $validator = Validator::make($request->all(),[
            'nazivTima' => 'required|string|max:50',
            'brojClanova' => 'required|integer|between:2,5'
            
        ]);
 
        if($validator -> fails())
            return response()->json($validator->errors());
           
        $team = Team::create([
            'nazivTima' => $request->nazivTima,
            'brojClanova' => $request->brojClanova,
            'IDKorisnik' => Auth::user()->korisnikID
        ]);
 
        return response()->json(['The team has been added successfully.', new TeamResource($team)]);
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
    public function edit(Team $team)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Team $team)
    {
        $validator = Validator::make($request->all(),[
            'nazivTima' => 'required|string|max:50',
            'brojClanova' => 'required|integer|between:2,5'
        ]);
 
        if($validator -> fails())
            return response()->json($validator->errors());
           
        $team->nazivTima = $request->nazivTima;
        $team->brojClanova = $request->brojClanova;
        $team->IDKorisnik=Auth::user()->korisnikID;
 
        $team->save();
 
        return response()->json(['The team has been updated successfully.', new TeamResource($team)]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Team $team)
    {
        $team->delete();
 
        return response()->json(['The team has been deleted successfully.']);
    }
}
