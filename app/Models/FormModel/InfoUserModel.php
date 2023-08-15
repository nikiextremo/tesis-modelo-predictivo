<?php

namespace App\Models\FormModel;

use App\Models\CustomModel;

class InfoUserModel extends CustomModel
{

    /**
     * @inheritdoc
     */

    protected $table = 'User';
    /**
     * @inheritdoc
     */
    protected static $tableName  = 'User';

    // Indica que la clave primaria es la columna UserId en lugar de id para poder actualizar el documento por el id del usuario
    protected $primaryKey = 'IdUser';

    // Indica que la clave primaria no es autoincremental
    public $incrementing = true;

    protected $fillable = [
        // 'IdUser',
        'Fullname',
        'cookie',
        'EducationalUnit',
        'StudyPreference',
        'ProvinceId',
        'SchoolTypeId',
        'phone',
        'identification',
        'email',
        'updated_at',
        'created_at',
    ];
}
