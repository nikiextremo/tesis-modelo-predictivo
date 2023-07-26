<?php

namespace App\Models\FormModel;

use App\Models\CustomModel;

class InfoUserModel extends CustomModel {

    /**
     * @inheritdoc
     */

    protected $table = 'user_info';
    /**
     * @inheritdoc
     */
    protected static $tableName  = 'user_info';

    protected $fillable = [
        'id',
        'fullname',
        'phone',
        'email',
        'educationalUnit',
        'studyPreference',
        'cookie',
        'identification',
        'school_type',
        'province_id',
        'updated_at',
        'created_at',
    ];

}

