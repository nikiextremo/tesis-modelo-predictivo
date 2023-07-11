<?php

namespace App\Http\Controllers\FormController;

use App\Http\Controllers\CustomController;
use App\Models\FormModel\SectionOneModel;

class SectionOneController extends CustomController
{

    /**
     * @inheritdoc
     */
    protected mixed $model = SectionOneModel::class;

    protected string $index = 'form/sectionOne';
}
