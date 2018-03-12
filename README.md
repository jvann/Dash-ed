# Dash-ed

Proyecto en desarollo por alumnos de ITESM campus Monterrey

Integrantes:

Instructor:
* Alfredo Salazar

Desarolladores:
* Fernando López Martínez A01172527
* Juan Pestana A00817057
* Edgardo Acosta Leal A00813103
* Jorge Ivan Diaz Sanchez A01191342

Coordinador de proyecto:
* Jorge Ivan Diaz Sanchez

Coordinador de BackEnd:
* Fernando Lopez Martinez

Coordinador FrontEnd:
* Jorge Ivan Diaz Sanchez

Cliente:
* Jorge Ivan Diaz Sanchez
* Ivan Mena

Descripcion:

El proyecto consiste en una aplicación web dirigida hacia los usuarios (maestros)
que utilizan los contenidos de La Empresa de tal manera que puedan generar
prácticas y exámenes para sus alumnos. Así también se trata de generar una
comunidad para que los maestros aporten con información, creación y revisión de
reactivos (preguntas). También se desarrollará un portal para los administradores
para que puedan dar de alta nuevos contenidos, reactivos, relación de OEA’s
(Objetivo Específico de Aprendizaje), y revisión de reactivos.

El proyecto cumplirá los siguientes propósitos:


* Proporcionar una herramienta administrativa para La Empresa:
* Dar de alta contenidos (Reactivos en masa, links, relación de OEAs,
aceptación y revisión de reactivos).
* Modificación de contenidos.

* Proporcionar una herramienta para los usuarios de La Empresa:
* Una comunidad (Estilo red social)

* Aportar contenidos y reactivos.
* Generador de prácticas y exámenes.
* Ver noticias e información relevante proporcionado por la Empresa.

## Backend

### Prerequisites

You need to have Dockers installed on your local machine.

### Installing
Download the entire folder to your computer and then open your terminal and navigate to its location.

Then run

```
docker-compose up
```
This will run `yarn run start` and start `app.js` in `localhost:3000`.

For shutting down use
```
docker-compose down
```

For shutting down and removing the created images run
```
docker-compose down --rmi local
```

### Tests
For running the tests run

```
docker-compose run api /bin/bash -c 'yarn run test'
```

This will create a new container and run the `*.tests.js` files using `jest`.

If you ran the above command without running `docker-compose up` previously, make sure to run `docker-compose down` after testing in order to remove the `postgres` image created.

### Bash
For entering to bash open a new terminal and run 

```
docker-compose exec api bash
```
