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
        Schema::create('team_event', function (Blueprint $table) {

            $table->bigIncrements('timDogadjajID')->nullable(false);       
            $table->bigInteger('IDDogadjaj')->unsigned();
            $table->foreign('IDDogadjaj')->references('dogadjajID')->on('events');
            $table->bigInteger('IDTim')->unsigned();
            $table->foreign('IDTim')->references('timID')->on('teams');
            $table->integer('brojPoena')->nullable(false);           
            $table->unique('timDogadjajID');
            $table->timestamps(false);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('team_event');
    }
};
