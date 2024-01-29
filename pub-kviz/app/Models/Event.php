<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $table = 'events';

    protected $primaryKey = 'dogadjajID';

    public $incrementing = true;

    public $timestamps = false;

    protected $fillable = [
        'naziv',
        'datumOdrzavanja',
        'vremeOdrzavanja',
        'mesto',
        'opis',
    ];

    public function teams()
    {
        return $this->belongsToMany(Team::class, 'team_event', 'IDDogadjaj', 'IDTim')
            ->withPivot('brojPoena');
    }
}
