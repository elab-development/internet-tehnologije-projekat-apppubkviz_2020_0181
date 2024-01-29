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
            'dogadjajID' => $this->resource->dogadjajID,
            'naziv' => $this->resource->naziv,
            'datumOdrzavanja' => $this->resource->datumOdrzavanja,
            'vremeOdrzavanja' => $this->resource->vremeOdrzavanja,
            'mesto' => $this->resource->mesto,
            'opis' => $this->resource->opis,
        ];
    }
}
