<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class campaign extends Model
{
    use HasFactory;

    protected $fillable =[
        'title',
        'recipient',
        'from',
        'subject',
        'content',
    ];
}