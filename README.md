![Logo de la Universidad Católica de Santiago de Guayaquil](https://www.universidades.com.ec/logos/original/logo-universidad-catolica-de-santiago-de-guayaquil.webp)
<br>

## Sobre la aplicación y su objetivo

Esta aplicación busca realizar un modelo predictivo en base a una lista de información para los estudiantes que están por entrar a la universidad y no saben con certeza qué carrera estudiar. La idea es evitar que los estudiantes se retiren de la universidad a mitad de carrera debido a una mala decisión o falta de comodidad con la misma.

## Instalación de PHP y MongoDB para el correcto funcionamiento de la base de datos

Es importante tener en cuenta que existen diferentes maneras de desplegar un entorno de PHP. En este caso, se ha utilizado XAMPP para desplegar PHP en la versión 8.1.

- [XAMPP 8.1](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.1.17/xampp-windows-x64-8.1.17-0-VS16-installer.exe)

Además, se requiere la descarga de MongoDB Community y el controlador MongoDB para PHP 8.1.

- [MongoDB Community](https://www.mongodb.com/try/download/community)
- [Controlador MongoDB para PHP 8.1](https://windows.php.net/downloads/pecl/releases/mongodb/1.13.0/php_mongodb-1.13.0-8.1-ts-vs16-x64.zip)

Es importante tener en cuenta que solo se necesita el archivo `php_mongodb.dll`. Este archivo debe colocarse dentro de la carpeta de PHP ubicada en `C:xampp/php/ext`. Luego, debes copiar el nombre del archivo y pegarlo en el archivo `php.ini`, que se encuentra en una carpeta anterior a la mencionada anteriormente.
