<?php

namespace App\Models;

use App\Facilities\SqlServerQuery;
use Illuminate\Database\Eloquent\Model;

/**
 * This model will be used as a generic model for all models
 */
class CustomModel extends Model
{
    /**
     * @var string
     */
    protected static $collectionName;

    /**
     * @var string
     */
    protected static $tableName;



    public static function findRecordByCookie($cookie)
    {
        return SqlServerQuery::findRecordByCookie(static::$tableName, $cookie);
    }

    public static function findRecordByCookieAndUpdate($cookie, $data)
    {
        return SqlServerQuery::findRecordByCookieAndUpdate(static::$tableName, $cookie, $data);
    }

    public static function findProvinceByCode($code)
    {
        return SqlServerQuery::findProvinceByCode(static::$tableName, $code);
    }

    public static function findAllProvinces()
    {
        return SqlServerQuery::findAllProvinces(static::$tableName);
    }

    public static function findAllCareers()
    {
        return SqlServerQuery::findAllCareers(static::$tableName);
    }

    public static function findUserByCookie($cookie)
    {
        return SqlServerQuery::findUserByCookie(static::$tableName, $cookie);
    }
}
