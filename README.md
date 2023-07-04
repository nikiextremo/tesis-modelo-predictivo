<p align="center"><a href="https://www.ucsg.edu.ec/" target="_blank"><img src="https://www.universidades.com.ec/logos/original/logo-universidad-catolica-de-santiago-de-guayaquil.webp" width="400"></a></p>

## Sobre la aplicacion y su objetivo

Esta aplicacion busca realizar un modelo predictivo en base a una lista de informacion para los estudiantes que estan por entrar a la universidad y no saben con certeza que carrera estudiar. 
La idea es evitar que los estudiantes dejen de retirarse de la universidad a media carrera por que resulta que no les gustó o no se sienten comodos con esta debido a una mala decision.

## Instalacion de php y Mongodb para el correcto funcionamiento de la base de datos
Es importante tener en cuenta que existen diferentes maneras de desplegar un entorno de php. 
En este caso, se ha utilizado "xampp" para desplegar php en la version 8.1
[xampp 8.1](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.1.17/xampp-windows-x64-8.1.17-0-VS16-installer.exe).
Asi mismo, se procedio con la descarga de MongoDB driver, y mongodb Compass
[MongoDB Comunnity](https://www.mongodb.com/try/download/community)
[Driver MongoDB con PHP 8.1](https://windows.php.net/downloads/pecl/releases/mongodb/1.13.0/php_mongodb-1.13.0-8.1-ts-vs16-x64.zip). => Es importante tener en cuenta que solo se ocupa el archivo php_mongodb.dll file.
Este archivo necesitamos colocarlo dentro de la carpeta de php el cual se encuentra en C:xampp/php/etc
Posterior a eso, necesitamos copiar el nombre del archivo y pegarlo dentro de php.init el cual está una carpeta anterior a la previa mencionada
