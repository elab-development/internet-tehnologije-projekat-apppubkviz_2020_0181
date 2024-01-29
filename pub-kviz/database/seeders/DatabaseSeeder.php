<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Team;
use App\Models\Event;
use App\Models\TeamEvent;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory()->times(5)->create();       
        Team::factory()->times(5)->create();
        Event::factory()->times(5)->create();
        TeamEvent::factory()->times(5)->create();      
    }
}
