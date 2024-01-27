<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    
    public static $wrap = 'Dogadjaj';
    
     public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        return [
            'DogadjajID' => $this->resource->DogadjajID,
            'Naziv' => $this->resource->Naziv,
            'DatumOdrzavanja' => $this->resource->DatumOdrzavanja,
            'VremeOdrzavanja' => $this->resource->VremeOdrzavanja,
            'Mesto' => $this->resource->Mesto,
            'Opis' => $this->resource->Opis,
        ];
    }
}
