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
            
            $table->bigIncrements('korisnikID')->nullable(false);
            $table->unique('korisnikID');
            $table->string('ime')->nullable(false);
            $table->string('prezime')->nullable(false);
            $table->string('brojTelefona')->nullable(false);
            $table->string('email')->nullable(false);
            $table->string('password')->nullable(false);
            $table->string('uloga')->nullable(false);

            $table->rememberToken();          
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
