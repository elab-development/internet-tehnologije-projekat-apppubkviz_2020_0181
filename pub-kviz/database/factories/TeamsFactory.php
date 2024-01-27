<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Teams;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Teams>
 */
class TeamsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Teams::class;

    public function definition(): array
    {
        return [
            'IDKorisnik' => function () {
                return \App\Models\Users::factory()->create()->KorisnikID;
            },
            'NazivTima' => $this->faker->word,
            'BrojClanova' => $this->faker->numberBetween(1, 10), 
        ];
    }
}
