<?php

namespace App\Facilities;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * Esta clase sirve para asignar funciones genericas y hacer querys a mongodb
 */
class SqlServerQuery
{
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
}
