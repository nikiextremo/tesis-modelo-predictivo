<?php 

namespace App\Facilities;

use Illuminate\Support\Facades\DB;

/**
 * Esta clase será usada para realizar querys a mongoDB pasando por el modelo
 * Puede usarse para insertar, crear o modificar data
 */
class MongoQuery
{
    public static function bsonToArray($bson)
    {
        return json_decode(json_encode($bson), true);
    }

    /**
     * Encuentra todas los datos de una collection
     * @param collectionName es el atributo que se necesita para consultar la coleccion
     * @return array
     */
    public static function findAllRecords($collectionName, $fields = [])
    {
        try {
            return DB::connection('mongodb')
                ->collection($collectionName)
                ->raw(function ($collection) use ($fields) {
                    $result = $collection->find(
                        [
                            '_id' => ['$exists' => true]
                        ],
                        [
                            'projection' => $fields,
                        ]
                    );
                    $result = iterator_to_array($result);
                    return self::bsonToArray($result);
                });
        } catch (\Exception $e) {
            return [
                'error' => $e->getMessage(),
            ];
        }
    }
}

