<?php

use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// ProductController
Route::get('/product/{id}', [ProductController::class, 'getProductByIdUpdate']);
Route::post('/add_product', [ProductController::class, 'add_product']);
Route::post('/update_products/{id}', [ProductController::class, 'update']);
Route::get('/show_product', [ProductController::class, 'show_product']);
Route::delete('/delete_product/{id}', [ProductController::class, 'delete']);

Route::post('/add_categories', [ProductController::class, 'add_categories']);
Route::get('/info_categories', [ProductController::class, 'info_categories']);
Route::delete('/delete_categorie/{id}', [ProductController::class, 'delete_categorie']);

Route::post('/add_flavors', [ProductController::class, 'add_flavors']);
Route::get('/info_flavors', [ProductController::class, 'info_flavors']);
Route::delete('/delete_flavor/{id}', [ProductController::class, 'delete_flavor']);

// Category

// Route::get('/all_category', [ProductController::class, 'all_category']);


// AdminController
use App\Http\Controllers\AdminController;

Route::post('/login', [AdminController::class, 'login']);
Route::get('/info_admin', [AdminController::class, 'show']);


use App\Http\Controllers\ClientController;

Route::post('/login_user', [ClientController::class, 'login_user']);
Route::post('/Signin_user', [ClientController::class, 'Signin_user']);


// Created By Salah
Route::get('/products/featured-products', [ProductController::class, 'getHomeProduct']);
Route::get('/products/{category}', [ProductController::class, 'getProductsByCategory']);
Route::get('/product/{id}', [ProductController::class, 'getProductById']);







