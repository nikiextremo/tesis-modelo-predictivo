<?php 

namespace App\Models\GetTableFromDB;

use App\Models\CustomModel;

class CharacteristicRelationModel extends CustomModel
{
    /**
     * @inheritdoc
     */

     protected $table = 'Career_characteristic_relation';

     /**
      * @inheritdoc
      */
     protected static $tableName  = 'Career_characteristic_relation';
 
     protected $fillable = [
         'IdCCharacteristicRelation',
         'C_characteristic_Id',
         'C_Id',
         'C_Relation_status',
         'updated_at',
         'created_at',
     ];
}