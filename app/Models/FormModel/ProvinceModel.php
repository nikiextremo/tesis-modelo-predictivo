<?php

namespace App\Models\FormModel;

use App\Models\CustomModel;

class ProvinceModel extends CustomModel {

    /**
     * @inheritdoc
     */
    protected $table  = 'province';

    /**
     * @inheritdoc
     */
    protected static $tableName  = 'province';

    protected $fillable = [
        'province_name',
        'province_code',
        'id'
    ];

}

