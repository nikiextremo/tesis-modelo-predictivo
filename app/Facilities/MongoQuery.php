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

    /**
     * Guardar en la base de datos
     * @param collectionName es el atributo que se necesita para consultar la coleccion
     * @return array
     */
    public static function insertRecords(
        $collectionName, 
        $data
        )
    {
        try {
            return DB::connection('mongodb')
                ->collection($collectionName)
                ->raw(function ($collection) use ($data) {
                    $result = $collection->insertOne([
                        ...$data
                    ]);
                    $_id = (string)$result->getInsertedId();
                    if (isset($_id) && !empty($_id)) {
                        return [
                            '_id' => $_id,
                            ...$data
                        ];
                    } else {
                        return [
                            'Error' => 'Error insertando en la base de datos'
                        ];
                    }
                });
        } catch (\Exception $e) {
            dd($e);
            return [
                'error' => $e->getMessage(),
            ];
        }
    }
}

