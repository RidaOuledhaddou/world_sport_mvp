<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name', 'subtitle', 'information', 'old_price', 'price',
        'status', 'description', 'review', 'brand', 'stock_quantity'
    ];
    

    // Define the relationship with categories
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'product_categories');
    }

    // Define the relationship with images
    public function images()
    {
        return $this->hasMany(Image::class, 'product_id');
    }

    // Define the relationship with flavors
    public function flavors()
    {
        return $this->belongsToMany(Flavor::class, 'product_flavors');
    }
}
