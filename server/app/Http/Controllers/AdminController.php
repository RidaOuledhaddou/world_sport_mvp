<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\admin;

class AdminController extends Controller
{
    // Login Admin 
    public function login(Request $request){
        $admin = admin::where('email','=',$request->email)->first();
        if($admin){
            if($request->password==$admin->password){
                return response([
                    'message' => 'Login Success',
                    'status'=>'success'
                ], 200);
            }
        }
        return response([
            'message' => 'The Provided Credentials are incorrect',
            'status'=>'failed'
        ], 401);
    }

    // show information (admin)
    public function show()
    {
        $admin = admin::get();
        return response()->json($admin);
    }
}
