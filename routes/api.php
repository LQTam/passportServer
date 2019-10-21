<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
$api_version=config('api.api_version');

Route::prefix("{$api_version}")->namespace('Api\Auth')->group(function(){
        Route::middleware('auth:api')->group(function(){
            Route::get('/user', function (Request $request) {
                return $request->user();
            });
            Route::post('/logout','LoginController@logout');
        });
        Route::post('login','LoginController@login');
        Route::post('register','RegisterController@register');
});
