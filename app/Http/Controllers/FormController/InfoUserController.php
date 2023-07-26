<?php

namespace App\Http\Controllers\FormController;

use App\Http\Controllers\CustomController;
use App\Models\FormModel\InfoUserModel;
use App\Models\FormModel\ProvinceModel;
use Inertia\Inertia;
use Illuminate\Http\Request;

class InfoUserController extends CustomController
{

    /**
     * @inheritdoc
     */
    protected mixed $model = InfoUserModel::class;

    protected string $index = 'form/infoUser';

    public function index(Request $request)
    {
        $data = [];
        $cookie = $request->cookie()['cookie'] ?? "";
        if (isset($cookie) && !empty($cookie)) {
            $data = $this->model::findRecordByCookie($cookie);
        }
        $provinces = ProvinceModel::findAllProvinces();
        return Inertia::render(
            $this->index,
            [
                'data' => $data,
                'provinces' => $provinces,
            ]
        );
    }

}
