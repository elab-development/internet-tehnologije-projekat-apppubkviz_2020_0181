<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Event;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = Event::class;

    public function definition(): array
    {
        

        return [
            'Naziv' => $this->faker->word,
            'DatumOdrzavanja' => $this->faker->date,
            'VremeOdrzavanja' => $this->faker->time,
            'Mesto' => $this->faker->city,
            'Opis' => $this->faker->text,
        ];
    }
}
