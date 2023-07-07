<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserTest extends CustomModel
{
    use HasFactory;
    /**
     * @inheritdoc
     */
    protected static $collectionName = 'test';
}
