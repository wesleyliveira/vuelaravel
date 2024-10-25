<?php

use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;


// Rota principal que retorna uma visualização
Route::get('/', function () {
    return view('welcome');
});

// // Rota que retorna JSON com status
// Route::get('/api', function () {
//     return response()->json(['status' => true]);
// });

// Middleware de autenticação para /user
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Grupo de rotas com middleware personalizado
Route::middleware(['api', 'seuMiddlewarePersonalizado'])->group(function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
});

Route::get('/api', [HomeController::class, 'index']);



