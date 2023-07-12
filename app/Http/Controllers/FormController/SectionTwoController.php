<?php

namespace App\Http\Controllers\FormController;

use App\Http\Controllers\CustomController;
use App\Models\FormModel\SectionTwoModel;

class SectionTwoController extends CustomController
{

    /**
     * @inheritdoc
     */
    protected mixed $model = SectionTwoModel::class;

    protected string $index = 'form/sectionTwo';
}
