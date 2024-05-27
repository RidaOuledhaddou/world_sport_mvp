<?php

namespace App\Http\Controllers;

use App\Models\client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class ClientController extends Controller
{


    public function login_user(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        $client = Client::where('email', $request->email)->first();
    
        if ($client && Hash::check($request->password, $client->password)) {
            return response([
                'message' => 'Login Success',
                'status' => 'success',
            ], 200);
        }
    
        return response([
            'message' => 'The provided credentials are incorrect',
            'status' => 'failed',
        ], 401);
    }
    



    public function Signin_user(Request $request)
    {
        $request->validate([
            'username' => 'required|unique:clients,username', // Ensure unique username
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:clients,email', // Add unique validation for email
            'password' => 'required|min:8', // Add validation for password
            'conf_password' => 'required|same:password', // Add validation for confirming password
            'address' => 'nullable|string',
            'phone_number' => 'nullable|string',
        ]);
    
        $client = new client();
        $client->username = $request->username;
        $client->first_name = $request->first_name;
        $client->last_name = $request->last_name;
        $client->email = $request->email;
        $client->password = Hash::make($request->password); // Hash the password before storing
        $client->address = $request->address;
        $client->phone_number = $request->phone_number;
        $client->save();
    
        return response()->json(['message' => 'User created successfully'], 201);
    }
}
