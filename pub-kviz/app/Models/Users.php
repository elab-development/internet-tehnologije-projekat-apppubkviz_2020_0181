<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
 

class Users extends Authenticatable
{


    use  HasApiTokens, HasFactory, Notifiable;

    protected $table = 'users'; 

    protected $primaryKey = 'KorisnikID'; 

    public $incrementing = true;

    public $timestamps=false;

    protected $fillable = [
        'Ime',
        'Prezime',
        'Telefon',
        'Username',
        'Password',
    ];

    protected $hidden = [
        'Password',
        'remeber_token',
    ];

    public function team()
    {
        return $this->hasOne(Teams::class, 'IDKorisnik', 'KorisnikID');
    }
}