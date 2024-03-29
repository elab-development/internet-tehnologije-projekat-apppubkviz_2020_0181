<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Event;
use Illuminate\Support\Str;


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
            'naziv' => $this->faker->word,
            'kratakOpis'=>$this->faker->text(10),
            'datumOdrzavanja' => $this->faker->date,
            'vremeOdrzavanja' => $this->faker->time,
            'mesto' => $this->faker->city,
            'opis' => $this->faker->text,
        ];
    }
}
