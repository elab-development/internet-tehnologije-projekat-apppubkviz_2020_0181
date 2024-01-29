<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Users;
use App\Models\Teams;
use App\Models\Event;
use App\Models\Team_Event;
class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {


        Users::factory()->times(10)->create();       
        Teams::factory()->times(10)->create();
        Event::factory()->times(10)->create();
        Team_Event::factory()->times(10)->create();      
    }
}
