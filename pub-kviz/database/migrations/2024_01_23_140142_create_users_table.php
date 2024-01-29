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
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('KorisnikID')->nullable(false);
            $table->string('Ime')->nullable(false);
            $table->string('Prezime')->nullable(false);
            $table->string('BrojTelefona')->nullable(false);
            $table->string('Username')->nullable(false);
            $table->string('Password')->nullable(false);
            $table->unique('KorisnikID');
            $table->timestamps(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
