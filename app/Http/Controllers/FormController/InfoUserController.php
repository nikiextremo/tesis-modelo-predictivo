<?php

namespace App\Http\Controllers\FormController;

use App\Http\Controllers\CustomController;
use App\Models\FormModel\InfoUserModel;

class InfoUserController extends CustomController
{

    /**
     * @inheritdoc
     */
    protected mixed $model = InfoUserModel::class;

    protected string $index = 'form/infoUser';
}
