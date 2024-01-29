<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\Users;

class AuthController extends Controller
{
    function register(Request $request) {
        $validator=Validator::make($request->all(),[
            'Username'=>'required|string|max:15|unique:users',
            'Password'=>'required|string|min:8',
            'Telefon'=>'required|string|regex:/^[0-9]+$/',
            'Ime'=>'required|string|max:20',
            'Prezime'=>'required|string|max:20'
        ]);


        if($validator->fails())
            return response()->json($validator->errors());

        $user=Users::create([
            'Ime'=>$request->Ime,
            'Prezime'=>$request->Prezime,
            'Telefon'=>$request->Telefon,
            'Username'=>$request->Username,
            'Password'=>Hash::make($request->Password)

        ]);

        $token=$user->createToken('auth_token')->plainTextToken;
        return response()->json(['data'=>$user,'access_token'=>$token,'token_type'=>'Bearer']);
    }

    function login(Request $request) {

        if(!Auth::attempt($request->only('Username','Password')))
            return response()->json(['message' => 'Invalid credentials'],401);

        $user= Users::where('Username',$request['Username'])->firstOrFail();

        $token=$user->createToken('auth_token')->plainTextToken;
        return response()->json(['message'=>'Hi.'.$user->Ime.'welcome to home','access_token'=>$token,'token_type'=>'Bearer']);

    }
}
