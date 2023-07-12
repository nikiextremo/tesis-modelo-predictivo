<?php

namespace App\Http\Controllers\FormController;

use App\Http\Controllers\CustomController;
use App\Models\FormModel\SectionThreeModel;

class SectionThreeController extends CustomController
{

    /**
     * @inheritdoc
     */
    protected mixed $model = SectionThreeModel::class;

    protected string $index = 'form/sectionThree';
}
