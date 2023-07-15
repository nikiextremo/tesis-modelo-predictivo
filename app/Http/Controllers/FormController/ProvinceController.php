<?php

namespace App\Http\Controllers\FormController;

use App\Http\Controllers\CustomController;
use App\Models\FormModel\ProvinceModel;
use Illuminate\Http\Request;
class ProvinceController extends CustomController
{

    /**
     * @inheritdoc
     */
    protected mixed $model = ProvinceModel::class;

    
}
