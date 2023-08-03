<?php

namespace App\Models\User;

use App\Models\CustomModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PhoneModel extends CustomModel
{
    use HasFactory;

    /**
     * @inheritdoc
     */

     protected $table = 'Phone';
     /**
      * @inheritdoc
      */
     protected static $tableName  = 'Phone';

     protected $fillable = [
         'IdPhone',
         'NumberPhone',
         'UserId',
         'updated_at',
         'created_at',
     ];
}
