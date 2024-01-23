<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('teams', function (Blueprint $table) {
            $table->bigIncrements('TimID')->nullable(false);

        
            $table->bigInteger('IDKorisnik')->unsigned();
            $table->foreign('IDKorisnik')->references('KorisnikID')->on('users');

            $table->string('NazivTima')->nullable(false);
            $table->string('BrojClanova')->nullable(false);
            $table->unique('TimID');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('teams');
    }
};
