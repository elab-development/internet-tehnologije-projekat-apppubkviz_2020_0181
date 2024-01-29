<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamEvent extends Model
{
    use HasFactory;

    protected $table = 'team_event';

    protected $primaryKey = 'timDogadjajID';

    public $incrementing = true;

    public $timestamps = false;

    protected $fillable = [
        'IDDogadjaj',
        'IDTim',
        'brojPoena',
    ];

    public function team()
    {
        return $this->belongsTo(Team::class, 'IDTim', 'timID');
    }

    public function event()
    {
        return $this->belongsTo(Event::class, 'IDDogadjaj', 'dogadjajID');
    }
    
}
