<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{
    function register(Request $request) {
        $validator=Validator::make($request->all(),[
            'email'=>'required|string|max:255|email|unique:users',
            'password'=>'required|string|min:8',
            'telefon'=>'required|string|regex:/^[0-9]+$/',
            'ime'=>'required|string|max:20',
            'prezime'=>'required|string|max:20',
            'uloga'=>'required|string|max:20'
        ]);


        if($validator->fails())
            return response()->json($validator->errors());

        $user=User::create([
            'ime'=>$request->ime,
            'prezime'=>$request->prezime,
            'telefon'=>$request->telefon,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
            'uloga'=>$request->uloga

        ]);

        $token=$user->createToken('auth_token')->plainTextToken;
        return response()->json(['data'=>$user,'access_token'=>$token,'token_type'=>'Bearer']);
    }

    public function login(Request $request)
    {
        if(!Auth::attempt($request->only('email','password')))
        return response()->json(['message' => 'unauthorized'], 401);

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['message' => $user->name.', welcome!', 'access_token' => $token, 'token_type' => 'Bearer']);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'You have successfully logged out and the token has been successfully deleted.'
        ];

        
    }
    

    
}
