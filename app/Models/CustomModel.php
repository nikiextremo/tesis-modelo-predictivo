<?php

namespace App\Models;

use App\Facilities\MongoQuery;
use Jenssegers\Mongodb\Eloquent\Model;

/**
 * This model will be used as a generic model for all models
 */
class CustomModel extends Model
{
    /**
     * @var string
     */
    protected static $collectionName;

    public static function findAllRecords($fields = [])
    {
        return MongoQuery::findAllRecords(static::$collectionName, $fields);
    }

    public static function insertRecords($data)
    {
        return MongoQuery::insertRecords(static::$collectionName, $data);
    }

    public static function findRecordByCookie($cookie)
    {
        return MongoQuery::findRecordByCookie(static::$collectionName, $cookie);
    }

    public static function findRecordByCookieAndUpdate($cookie, $data)
    {
        return MongoQuery::findRecordByCookieAndUpdate(static::$collectionName, $cookie, $data);
    }
}
