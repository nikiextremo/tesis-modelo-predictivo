<?php

namespace App\Models\GetTableFromDB;

use App\Models\CustomModel;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class ResultsModel extends CustomModel
{
    use HasFactory;

    /**
     * @inheritdoc
     */

     protected $table = 'Results';

     /**
      * @inheritdoc
      */
     protected static $tableName  = 'Results';
 
     protected $fillable = [
         'ResultsId',
         'UserId',
         'Token_Question',
         'Percentaje',
         'CareerResultId',
         'CareerResultName',
         'updated_at',
         'created_at',
     ];
}
