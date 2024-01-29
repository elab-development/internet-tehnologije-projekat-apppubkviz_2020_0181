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
            $table->bigIncrements('dogadjajID')->nullable(false);
            $table->string('naziv')->nullable(false);
            $table->date('datumOdrzavanja')->nullable(false);
            $table->time('vremeOdrzavanja')->nullable(false);
            $table->string('mesto')->nullable(false);
            $table->text('opis')->nullable(false);
            $table->unique('dogadjajID');
            $table->timestamps(false);
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
