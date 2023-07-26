<?php

namespace App\Models\Admin\MoreQuestions;

use App\Models\CustomModel;

class MoreQuestionsModel extends CustomModel 
{
    /**
     * @inheritdoc
     */

     protected $table = 'Career_characteristic';

     /**
      * @inheritdoc
      */
     protected static $tableName  = 'Career_characteristic';
 
     protected $fillable = [
         'IdCCharacteristic',
         'C_description',
         'C_Characteristic_Status',
         'updated_at',
         'created_at',
     ];
}