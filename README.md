# evaluaciones_mongo_crud

API CRUD para la gestion de formatos de evaluación para las entidades de la universidad.

## Especificaciones Técnicas

### Tecnologías Implementadas y Versiones
* [NestJS](https://github.com/nestjs/nest)
* [Docker](https://docs.docker.com/engine/install/ubuntu/)
* [Docker Compose](https://docs.docker.com/compose/)

### Variables de Entorno
```shell
EVALUACIONES_MONGO_CRUD__USER=[usuario]
EVALUACIONES_MONGO_CRUD__PASS=[password del usuario]
EVALUACIONES_MONGO_CRUD__URLS=[url de bd]
EVALUACIONES_MONGO_CRUD__RUNMODE=[modo de ejecución]
EVALUACIONES_MONGO_CRUD__BDNAME=[nombre de bd]
EVALUACIONES_MONGO_CRUD__HTTPPORT=[puerto]
```
**NOTA:** Las variables se pueden ver en el fichero conf/app.conf y están identificadas con EVALUACIONES_MONGO_CRUD__...

### Ejecución del Proyecto
```shell
#1. Obtener el repositorio con Go
git clone https://github.com/udistrital/evaluaciones_mongo_crud

#2. Moverse a la carpeta del repositorio
cd evaluaciones_mongo_crud

# 3. Moverse a la rama **develop**
git pull origin develop && git checkout develop

4. Instalar dependencias
npm install

# 5. Alimentar todas las variables de entorno que utiliza el proyecto.
EVALUACIONES_MONGO_CRUD=8080 EVALUACIONES_MONGO_CRUD=127.0.0.1:27017 EVALUACIONES_MONGO_CRUD_SOME_VARIABLE=some_value nest run
```
### Ejecución Dockerfile
```shell
# docker build --tag=evaluaciones_mongo_crud . --no-cache
# docker run -p 80:80 evaluaciones_mongo_crud
```

### Ejecución docker-compose
```shell
#1. Clonar el repositorio
git clone -b develop https://github.com/udistrital/core_api

#2. Moverse a la carpeta del repositorio
cd core_api

#3. Crear un fichero con el nombre **custom.env**
touch custom.env

#4. Crear la network **back_end** para los contenedores
docker network create back_end

#5. Ejecutar el compose del contenedor
docker-compose up --build

#6. Comprobar que los contenedores estén en ejecución
docker ps
```

### Ejecución Pruebas

Pruebas unitarias
```shell
# En Proceso
```

## Modelo de Datos
[Modelo de Datos Parametros](/sql/modelo_evaluacion_mongo_crud.png)


## Licencia

This file is part of parametros_crud.

evaluaciones_mongo_crud is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

evaluaciones_mongo_crud is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with parametros_crud. If not, see https://www.gnu.org/licenses/.
