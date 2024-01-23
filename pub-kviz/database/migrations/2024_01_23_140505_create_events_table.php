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
        Schema::create('events', function (Blueprint $table) {
            $table->bigIncrements('DogadjajID')->nullable(false);
            $table->string('Naziv')->nullable(false);
            $table->date('DatumOdrzavanja')->nullable(false);
            $table->time('VremeOdrzavanja')->nullable(false);
            $table->string('Mesto')->nullable(false);
            $table->text('Opis')->nullable(false);
            $table->unique('DogadjajID');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('events');
    }
};
