<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public static $wrap = 'Korisnik';
     
    public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        return [
            'korisnikID' => $this->resource->korisnikID,
            'ime' => $this->resource->ime,
            'prezime' => $this->resource->prezime,
            'telefon' => $this->resource->telefon,
        ];
    }
}
