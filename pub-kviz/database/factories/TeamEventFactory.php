<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Team;
use App\Models\Event;
use App\Models\TeamEvent;

class TeamEventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = TeamEvent::class;
    public function definition(): array
    {
        return [
            'IDDogadjaj' => Event::factory(),
            'IDTim' => Team::factory(),
            'brojPoena' => $this->faker->numberBetween(1, 20),
        ];
    }
}
