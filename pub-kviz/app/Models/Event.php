<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $table = 'events';

    protected $primaryKey = 'DogadjajID';

    public $incrementing = true;

    public $timestamps = false;

    protected $fillable = [
        'Naziv',
        'DatumOdrzavanja',
        'VremeOdrzavanja',
        'Mesto',
        'Opis',
    ];

    public function teams()
    {
        return $this->belongsToMany(Teams::class, 'team_event', 'IDDogadjaj', 'IDTim')
            ->withPivot('BrojPoena');
    }
}
