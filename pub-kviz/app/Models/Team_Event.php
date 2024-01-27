<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team_Event extends Model
{
    use HasFactory;

    protected $table = 'team_event';

    protected $primaryKey = 'TimDogadjajID';

    public $incrementing = true;

    public $timestamps = false;

    protected $fillable = [
        'IDDogadjaj',
        'IDTim',
        'BrojPoena',
    ];

    
}
