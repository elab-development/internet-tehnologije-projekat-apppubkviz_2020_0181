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
            'timDogadjajID' => $this->resource->timDogadjajID,
            'nazivDogadjaja'=> $this->event->naziv,
            'nazivTima' => $this->team->nazivTima,
            'brojPoena' => $this->resource->brojPoena,
            'datum'=>$this->event->datumOdrzavanja,
            'vreme'=>$this->event->vremeOdrzavanja,
        ];
    }
}
