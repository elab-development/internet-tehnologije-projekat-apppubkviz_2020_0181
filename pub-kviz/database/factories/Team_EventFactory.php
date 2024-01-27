<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Team_Event;

class Team_EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Team_Event::class;
    public function definition(): array
    {
        return [
            'IDDogadjaj' => function () {
                return \App\Models\Event::factory()->create()->DogadjajID;
            },
            'IDTim' => function () {
                return \App\Models\Teams::factory()->create()->TimID;
            },
            'BrojPoena' => $this->faker->numberBetween(1, 10),
        ];
    }
}
