<?php 

namespace App\Helpers;
// La funcion de esta clase es para realizar procesos extras a la data

class Utils 
{
    public static function timestampFormat($date) {
        $timestamp = strtotime($date['dateBorn']);
        $timestampInSeconds = date('U', $timestamp);
        $date['dateBorn'] = $timestampInSeconds;
        return $date;
    }
}

