<?php

namespace App\Models\User;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use App\Models\CustomModel;

class EmailModel extends CustomModel
{
    use HasFactory;

    /**
     * @inheritdoc
     */

    protected $table = 'Email';
    /**
     * @inheritdoc
     */
    protected static $tableName  = 'Email';

    protected $fillable = [
        'IdEmail',
        'Email',
        'UserId',
        'updated_at',
        'created_at',
    ];
}
