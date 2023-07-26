<?php 

namespace App\Models\GetTableFromDB;

use App\Models\CustomModel;

class CareerModel extends CustomModel
{
    /**
     * @inheritdoc
     */

     protected $table = 'Career';

     /**
      * @inheritdoc
      */
     protected static $tableName  = 'Career';
 
     protected $fillable = [
         'IdCareer',
         'F_Id',
         'C_Name',
         'C_Status',
         'updated_at',
         'created_at',
     ];
}