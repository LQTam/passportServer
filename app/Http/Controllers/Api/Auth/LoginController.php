<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\BadResponseException;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function login(Request $request){
        $http = new Client();
        try{
            $response = $http->post(config('services.passport.login_endpoint'), [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => config('services.passport.password_client_id'),
                    'client_secret' => config('services.passport.password_client_secret'),
                    'username' => $request->username,
                    'password' => $request->password
                ],
            ]);
            return $response->getBody();
        }catch(BadResponseException $e){
            if($e->getCode() === 400){
                return response()->json('Invalid request. Please enter a username or password.',$e->getCode());
            }else if($e->getCode() === 401){
                return response()->json('Your credentials are incorrect. Please try again.',$e->getCode());
            }

            return response()->json('Something went wrong on the server.',$e->getCode());
        }
    }

    public function logout(){
        
        // auth()->user()->tokens->each(function($token,$key){
        //     // $token->delete();
        //     // $token->revoke();
        // });

        return response()->json('Logged out successfully.',200);
    }
}
