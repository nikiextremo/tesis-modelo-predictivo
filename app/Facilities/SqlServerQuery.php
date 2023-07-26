<?php

namespace App\Facilities;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PDO;

/**
 * Esta clase sirve para asignar funciones genericas y hacer querys a mongodb
 */
class SqlServerQuery
{
    protected static string $conexionDB = "sqlsrv:Server=localhost;Database=projecto_tesis";
    protected static string $conexionUser = "sa";
    protected static string $conexionPass = "root";

    public static function connection_execute($query)
    {
        try {
            $conn = new PDO(self::$conexionDB, self::$conexionUser, self::$conexionPass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // Ejecutar la consulta
            $conn->exec($query);
            // Cerrar la conexión
            $conn = null;
        } catch (\Exception $e) {
            dd($e->getMessage());
            return [
                'error' => $e->getMessage(),
            ];
        }
    }
    public static function connection_query($query)
    {
        try {
            $conn = new PDO(self::$conexionDB, self::$conexionUser, self::$conexionPass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // Ejecutar la consulta
            $result = $conn->query($query);
            // Obtener los resultados en un arreglo asociativo
            $data = $result->fetchAll(PDO::FETCH_ASSOC);
            // Cerrar la conexión
            $conn = null;
            return $data;
        } catch (\Exception $e) {
            dd($e->getMessage());
            return [
                'error' => $e->getMessage(),
            ];
        }
    }
    public static function findRecordByCookie(
        $table,
        $cookieName
    ) {
        try {
            $query = DB::table($table)
                ->where('cookie', $cookieName)
                ->first();

            return $query;
        } catch (\Exception $e) {
            dd($e->getMessage());
            return [
                'error' => $e->getMessage(),
            ];
        }
    }

    public static function findRecordByCookieAndUpdate(
        $table,
        $cookieName,
        $data
    ) {
        try {
            $query = DB::table($table)
                ->where('cookie', $cookieName)
                ->update($data);

            return $query;
        } catch (\Exception $e) {
            dd($e->getMessage());
            return [
                'error' => $e->getMessage(),
            ];
        }
    }

    public static function findProvinceByCode(
        $table,
        $code,
    ) {
        try {
            $query = DB::table($table)
                ->where('province_code', $code)
                ->first();

            return $query;
        } catch (\Exception $e) {
            dd($e->getMessage());
            return [
                'error' => $e->getMessage(),
            ];
        }
    }

    public static function findAllProvinces(
        $table,
    ) {
        try {
            $query = DB::table($table)
                ->get()
                ->toArray();

            return $query;
        } catch (\Exception $e) {
            dd($e->getMessage());
            return [
                'error' => $e->getMessage(),
            ];
        }
    }

    public static function findAllCareers(
        $table,
    ) {
        try {
            $query = DB::table($table)
                ->orderBy('C_Name')
                ->get()
                ->toArray();

            return $query;
        } catch (\Exception $e) {
            dd($e->getMessage());
            return [
                'error' => $e->getMessage(),
            ];
        }
    }

    public static function saveCareer($table, $data)
    {
        try {
            $query = DB::table($table)->insert($data);

            // Verificar si el guardado fue exitoso
            if ($query) {
                // El guardado fue exitoso, obtener el ID generado
                $id = DB::getPdo()->lastInsertId();
                return $id;
            } else {
                // Ocurrió un error durante el guardado
                return false;
            }
        } catch (\Exception $e) {
            // Manejar la excepción en caso de error
            dd($e->getMessage());
            return false;
        }
    }
    public static function findUserByCookie(
        $table,
        $cookieName
    ) {
        try {
            $query = DB::table($table)
                ->where('cookie', $cookieName)
                ->first();

            return $query;
        } catch (\Exception $e) {
            dd($e->getMessage());
            return [
                'error' => $e->getMessage(),
            ];
        }
    }
}
