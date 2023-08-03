<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\CustomModel;

class IdentificationModel extends CustomModel
{
    use HasFactory;
        
    /**
     * @inheritdoc
     */

     protected $table = 'Identification';
     /**
      * @inheritdoc
      */
     protected static $tableName  = 'Identification';
 
     protected $fillable = [
         'IdIdentification',
         'Identification',
         'UserId',
         'updated_at',
         'created_at',
     ];
}
