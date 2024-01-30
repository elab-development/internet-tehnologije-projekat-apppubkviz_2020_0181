<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use App\Http\Resources\EventResource;
use App\Http\Resources\EventCollection;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $events = Event::all();
        return new EventCollection($events);
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
    public function show(Event $event)
    {
        return new EventResource($event);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Event $event)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Event $event)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event)
    {
        //
    }

    public function vratiDogadjajePoMesecuIGodini(Request $request, $year, $month)
    {
        // Validacija godine i meseca može biti korisna
        // Ako želite, možete dodati validaciju ovdje

        // Formiranje prvog i poslednjeg dana određenog meseca i godine
        $startDate = \Carbon\Carbon::createFromDate($year, $month, 1)->startOfMonth();
        $endDate = $startDate->copy()->endOfMonth();

        // Dohvatanje događaja za određeni mesec i godinu
        $events = Event::whereBetween('datumOdrzavanja', [$startDate, $endDate])->get();

        // Vraćanje rezultata kao JSON
        return response()->json(['events' => $events]);
    }

    public function vratiDogadjajePoNazivu(Request $request)
    {
        $searchTerm = $request->input('searchTerm');

        

        // Pretraga događaja po nazivu
        $events = Event::where('naziv', 'like', "%{$searchTerm}%")->get();

        // Vraćanje rezultata kao JSON
        return response()->json(['events' => $events]);
    }
}
