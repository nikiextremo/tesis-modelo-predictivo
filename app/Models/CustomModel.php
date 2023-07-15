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

    public static function findAllRecords($fields = [])
    {
        // return MongoQuery::findAllRecords(static::$collectionName, $fields);
    }

    // public static function insertRecords($data)
    // {
    //     // dd($data->input('fullName'));
    //     // dd(new static());
    //     $model = new static();
    //     $model->save();
    //     // return MongoQuery::insertRecords(static::$collectionName, $data);
    // }

    public static function findRecordByCookie($cookie)
    {
        return SqlServerQuery::findRecordByCookie(static::$tableName, $cookie);
        // return MongoQuery::findRecordByCookie(static::$collectionName, $cookie);
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
}
