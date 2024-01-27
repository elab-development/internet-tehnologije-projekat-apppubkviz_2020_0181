<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Users;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Users>
 */
class UsersFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    protected $model = Users::class;

    public function definition(): array
    {
        return [
            'Ime' => $this->faker->firstName,
            'Prezime' => $this->faker->lastName,
            'BrojTelefona' => $this->faker->phoneNumber,
            'Username' => $this->faker->userName,
            'Password' => bcrypt('password') 
        ];
    }
}
