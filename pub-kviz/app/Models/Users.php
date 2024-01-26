<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    use HasFactory;

    protected $table = 'users'; 

    protected $primaryKey = 'KorisnikID'; 

    public $incrementing = true;

    public $timestamps=false;

    protected $fillable = [
        'Ime',
        'Prezime',
        'BrojTelefona',
        'Username',
        'Password',
    ];

    public function team()
    {
        return $this->hasOne(Teams::class, 'IDKorisnik', 'KorisnikID');
    }
}
