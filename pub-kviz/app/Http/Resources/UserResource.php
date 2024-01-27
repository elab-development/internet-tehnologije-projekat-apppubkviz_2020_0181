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
            'KorisnikID' => $this->resource->KorisnikID,
            'Ime' => $this->resource->Ime,
            'Prezime' => $this->resource->Prezime,
            'BrojTelefona' => $this->resource->BrojTelefona,
        ];
    }
}
