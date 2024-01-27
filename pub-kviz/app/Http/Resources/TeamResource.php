<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TeamResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    public static $wrap = 'Tim';

    public function toArray(Request $request): array
    {
        //return parent::toArray($request);
        return [
            'TimID' => $this->resource->TimID,
            'NazivTima' => $this->resource->NazivTima,
            'BrojClanova' => $this->resource->BrojClanova,
        ];
    }
}
