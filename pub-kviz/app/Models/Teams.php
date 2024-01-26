<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Teams extends Model
{
    use HasFactory;

    protected $table = 'teams'; 

    protected $primaryKey = 'TimID'; 

    public $incrementing = true; 

    public $timestamps=false;

    protected $fillable = [
        'IDKorisnik',
        'NazivTima',
        'BrojClanova',
    ];

    public function user()
    {
        return $this->hasOne(Users::class, 'KorisnikID', 'IDKorisnik');
    }

    public function events()
    {
        return $this->belongsToMany(Event::class, 'team_event', 'IDTim', 'IDDogadjaj')
            ->withPivot('BrojPoena');
            
    }


}
