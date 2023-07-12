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
    ) {
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

/**
 * The function `findRecordByCookie` searches for a record in a MongoDB collection based on a given
 * cookie value.
 * 
 * @param collectionName The name of the collection in the MongoDB database where the records are
 * stored.
 * @param cookie The cookie parameter is a unique identifier that is used to search for a record in the
 * specified collection.
 * 
 * @return the result of the MongoDB query as an array. If the query is successful, it will return the
 * record found in the collection with the given cookie. If the query fails, it will return an error
 * message.
 */
    public static function findRecordByCookie(
        $collectionName, 
        $cookie
    ) {
        try {
            return DB::connection('mongodb')
                ->collection($collectionName)
                ->raw(function ($collection) use ($cookie) {
                    $result = $collection->findOne([
                        'cookie' => $cookie
                    ]);
                    if (isset($result['_id'])) {
                        $result['_id'] = (string) $result['_id'];
                    }
                    //convert the result to an array
                    return self::bsonToArray($result);
                });
        } catch (\Exception $e) {
            dd($e);
            return [
                'error' => $e->getMessage(),
            ];
        }
    }

    /**
     * The function `findRecordByCookieAndUpdate` updates a record in a MongoDB collection based on a
     * given cookie value.
     * 
     * @param collectionName The name of the collection in the MongoDB database where the record will
     * be searched and updated.
     * @param cookie The cookie parameter is a unique identifier that is used to find the record in the
     * database. It is used as a filter condition in the findOneAndUpdate method to locate the specific
     * record that needs to be updated.
     * @param data The `` parameter is an array that contains the fields and values to be updated
     * in the record. Each element in the array represents a field-value pair.
     * 
     * @return the result of the findOneAndUpdate operation in the MongoDB collection. If a record with
     * the specified cookie is found and updated successfully, the function will return the updated
     * record as an array. If an error occurs during the operation, the function will return an array
     * with an 'error' key containing the error message.
     */
    public static function findRecordByCookieAndUpdate(
        $collectionName, 
        $cookie,
        $data
    ) {
        try {
            return DB::connection('mongodb')
                ->collection($collectionName)
                ->raw(function ($collection) use ($cookie, $data) {
                    $result = $collection->findOneAndUpdate(
                        [
                            'cookie' => $cookie
                        ],
                        [
                            '$set' => [
                                ...$data
                                ]
                        ]
                    );
                    if (isset($result['_id'])) {
                        $result['_id'] = (string) $result['_id'];
                    }
                    //convert the result to an array
                    return self::bsonToArray($result);
                });
        } catch (\Exception $e) {
            dd($e);
            return [
                'error' => $e->getMessage(),
            ];
        }
    }
}

