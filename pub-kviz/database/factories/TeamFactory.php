<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Team;
use App\Models\User;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Team>
 */
class TeamFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Team::class;

    public function definition(): array
    {
        return [
            'IDKorisnik' => User::factory(),
            'nazivTima' => $this->faker->word,
            'brojClanova' => $this->faker->numberBetween(2, 5), 
        ];
    }
    
}
