<p align="center">
  <img src="https://www.universidades.com.ec/logos/original/logo-universidad-catolica-de-santiago-de-guayaquil.webp" width="300">
</p>

# Sobre la Aplicación y su Objetivo

Esta aplicación tiene como objetivo desarrollar un modelo predictivo basado en una lista de información para ayudar a los estudiantes que están a punto de ingresar a la universidad a elegir la carrera adecuada. El propósito principal es evitar que los estudiantes abandonen sus estudios a mitad de camino debido a decisiones equivocadas o falta de afinidad con la carrera seleccionada.

## Instalación de PHP y MongoDB para el Correcto Funcionamiento de la Base de Datos

Es importante tener en cuenta que existen diferentes formas de configurar un entorno de PHP. En este caso, se recomienda utilizar XAMPP para desplegar PHP en su versión 8.1.

### Recursos/Archivos Necesarios

- [Descargar XAMPP 8.1](https://sourceforge.net/projects/xampp/files/XAMPP%20Windows/8.1.17/xampp-windows-x64-8.1.17-0-VS16-installer.exe)

Además, se requiere la descarga de MongoDB Community y el controlador MongoDB para PHP 8.1.

- [Descargar MongoDB Community](https://www.mongodb.com/try/download/community)
- [Descargar Controlador MongoDB para PHP 8.1](https://windows.php.net/downloads/pecl/releases/mongodb/1.13.0/php_mongodb-1.13.0-8.1-ts-vs16-x64.zip)

Es importante tener en cuenta que solo se necesita el archivo `php_mongodb.dll`. Debes colocar este archivo dentro de la carpeta de PHP ubicada en `C:xampp/php/ext`. Luego, copia el nombre del archivo y pégalo en el archivo `php.ini`, que se encuentra en una carpeta anterior a la mencionada anteriormente.

¡Listo! Con esta configuración, estarás preparado para ejecutar la aplicación y utilizar PHP y MongoDB en tu proyecto.
