<?php

namespace App\Models\FormModel;

use App\Models\CustomModel;

class SectionOneModel extends CustomModel {

    /**
     * @inheritdoc
     */
    protected $table = 'Form';
    
    /**
     * @inheritdoc
     */
    protected static $tableName = 'Form';

    protected $fillable = [
        'IdQuest',
        'Id_User',
        'IdCCharacteristic',
        'ValueQuestion',
        'updated_at',
        'created_at',
    ];
}

