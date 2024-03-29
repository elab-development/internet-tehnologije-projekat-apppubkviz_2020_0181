<?php
namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;

    protected $table = 'teams'; 

    protected $primaryKey = 'timID'; 

    public $incrementing = true; 

    public $timestamps= false;

    protected $fillable = [
        'IDKorisnik',
        'nazivTima',
        'brojClanova',
    ];

    public function events()
    {
        return $this->belongsToMany(Event::class, 'team_event', 'IDTim', 'IDDogadjaj')
            ->withPivot('brojPoena');            
    }

    public function user()
    {
    return $this->belongsTo(User::class, 'IDKorisnik', 'korisnikID');
    }

}