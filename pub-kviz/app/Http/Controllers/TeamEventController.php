<?php

namespace App\Http\Controllers;

use App\Models\TeamEvent;
use App\Models\Team;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\TeamEventResource;
use App\Http\Resources\TeamEventCollection;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
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
        
        $existingTeamEvent = TeamEvent::where('IDDogadjaj', $request->IDDogadjaj)
                                        ->where('IDtim', $request->IDTim)
                                        ->exists();
        
        if ($existingTeamEvent) {
            return response()->json(['error' => 'Tim je već prijavljen na ovaj događaj.'],400);
        }
           
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
    public function update(Request $request, $id)
    {
        
        $teamEvent = TeamEvent::find($id);

        if (!$teamEvent) {
            return response()->json(['message' => 'Team event not found.'], 404);     
        }

        $validator = Validator::make($request->all(), [         
            'brojPoena' => 'required|integer'  
        ]);

        if ($validator->fails()) {         
            return response()->json($validator->errors(), 400);
        }

        $teamEvent->brojPoena = $request->brojPoena;
        $teamEvent->save();  

        return response()->json(['message' => 'Results have been updated successfully.', 'teamEvent' => $teamEvent]);
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


    public function prikaziPrijavljeneTimove($eventID)
    {
        
        $teams = TeamEvent::with(['team', 'event'])
            ->where('IDDogadjaj', $eventID)
            ->get();

        
        $pdf = PDF::loadHTML($this->formatirajPDFAdmin($teams));
    
        return $pdf->stream('results.pdf');
    }


    private function formatirajPDFAdmin($teams)
    {
        $html = '<h1>Prijavljeni timovi</h1>';
        $html .= '<table style="border-collapse: collapse; width: 20%;">';
        $html .= '<thead><tr><th>Tim</th><th>ID</th></tr></thead>';
        $html .= '<tbody>';
        foreach ($teams as $team) {
            $html .= '<tr>';
            $html .= '<td style="padding-right: 10px;">' . $team->team->nazivTima . '</td>';
            $html .= '<td>' . $team->timDogadjajID . '</td>';
            $html .= '</tr>';
        }
        $html .= '</tbody></table>';
        
        return $html;
    }

    public function vratiDogadjajeKorisnika()
    {

        $userTeams = Auth::user()->team()->pluck('timID');
        $userTeamEvents = TeamEvent::whereIn('IDTim', $userTeams)->get();
        return new TeamEventCollection($userTeamEvents);
    }
}
