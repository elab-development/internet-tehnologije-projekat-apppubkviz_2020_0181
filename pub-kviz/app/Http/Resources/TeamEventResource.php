<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;


class TeamEventResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    
    public static $wrap = 'TimDogadjaj';

    public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        
        return [
            'TimDogadjajID' => $this->resource->TimDogadjajID,
            'NazivDogadjaj'=> $this->event->Naziv,
            'NazivTima' => $this->team->NazivTima,
            'BrojPoena' => $this->resource->BrojPoena,
        ];
    }
}
