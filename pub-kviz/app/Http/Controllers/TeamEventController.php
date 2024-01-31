<?php

namespace App\Http\Controllers;

use App\Models\TeamEvent;
use Illuminate\Http\Request;
use App\Http\Resources\TeamEventResource;
use App\Http\Resources\TeamEventCollection;
use Illuminate\Support\Facades\Validator;
use PDF;
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
        $validator = Validator::make($request->all(),[
            'IDDogadjaj' => 'required',
            'IDTim' => 'required'
            
        ]);
 
        if($validator -> fails())
            return response()->json($validator->errors());
           
        $teamevent = TeamEvent::create([
            'IDDogadjaj' => $request->IDDogadjaj,
            'IDTim' => $request->IDTim,
            'brojPoena'=>$request->brojPoena
            
        ]);
 
        return response()->json(['Successful registration to the event.', new TeamEventResource($teamevent)]);
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
        $team_Event->delete();
 
        return response()->json(['The team_event has been deleted successfully.']);
    }

    public function prikaziRezultateDogadjaja($eventID)
    {
        
        $teams = TeamEvent::with(['team', 'event'])
            ->where('IDDogadjaj', $eventID)
            ->get();

        
        $pdf = PDF::loadHTML($this->formatirajPDF($teams));

        
        return $pdf->stream('results.pdf');
    }

    private function formatirajPDF($teams)
    {
        $html = '<h1>Rezultati timova</h1>';
        $html .= '<table style="border-collapse: collapse; width: 20%;">';
        $html .= '<thead><tr><th>Tim</th><th>Broj poena</th></tr></thead>';
        $html .= '<tbody>';
        foreach ($teams as $team) {
            $html .= '<tr>';
            $html .= '<td style="padding-right: 10px;">' . $team->team->nazivTima . '</td>';
            $html .= '<td>' . $team->brojPoena . '</td>';
            $html .= '</tr>';
        }
        $html .= '</tbody></table>';
        
        return $html;
    }
}
