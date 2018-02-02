# Learnia Interactive

> LearniaInteractive es una web para la creación y visualización de cursos, y actividades educativas gamificadas.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Descripción más detallada

LearniaInteractive es un set de herramientas para la educación. Las cuales son:

1. Crear actividades educativas interactivas gamificadas.
2. Explorar las actividades.
3. Crear cursos.
4. Explorar cursos.

*A futuro puede que se añadan más herramientas para la educación, pero de momento estas son las principales.*

Además de otras características:

* Medallas
* Puntaje

### 1) Crear actividades educativas interactivas gamificadas

Por medio de LearniaInteractive y la herramienta de creación de actividades (En la zona creador) se podra crear actividad para uso en la aula de clases o simplemente para el uso de los estudiantes.

El creador puede elegir varias opciones para crear sus actividades y campos a rellenar, algunos de ellos son:

* Nombre de la actividad
* Descripción de la actividad
* Es imprimible o no: Puede ser impresa en papel o no.
* Es gamificada o no: Contiene algún tipo de elementos de juego como por ejemplo: puntaje, juegos, medallas, etc. Las actividades gamificada no pueden ser imprimibles.
* Es monetizable: El educador puede decidir vender la actividad y ofrecer la actividad a los usuarios premium. O también puede decidir ofrecer la actividad de forma gratuita y que otros puedan copiar, y editar.
* Filtros como: País, Nivel de estudio, Grado, edad, etc.

### 2) Explorar las actividades

Se podrá explorar actividades en el apartado de exploración. Esta pueden estar filtradas por:

* Categoría
* Sub-Categoría
* Es imprimible
* Es gamificada
* País del creador: También depende del país se aplican diferentes filtros, como por ejemplo chile: Nivel de estudio: Ninguno, Enseñanza Básica, Enseñanza Media, Enseñanza Superior. En el caso de Enseñanza básica podría ser: 1 Grado hasta 8 Grado.
* Edad del estudiante: Diferentes rangos de edades del estudiante.

### 3) Crear cursos

Por medio de LearniaInteractive y la herramienta de creación de cursos (En la zona creador) se podra crear cursos. Estos cursos son cursos en formato video y/o texto los cuales puede poseer o no actividades como contenido adicional al curso.

El creador del curso puede elegir varias opciones y campos a rellenar, algunos de estos son:

* Nombre del curso
* Descripción del curso
* Categoría
* Sub-Categoría
* Título del capítulo
* Descripción de capítulo
* Video: Título, descripción, tags, etc.
* Texto: Titulo, descripción, texto, tags, etc.
* Actividad: Titulo, descripcion, es imprimible, es gamificada, etc.

### 4) Explorar cursos

Se podrá explorar los cursos existentes en la plataforma. Estos pueen estar filtrados por:

* Categoría
* Sub-Categoría
* Es gamificado

## Aclaración

** Este archivo no indica como será exactamente el proyecto, solo es una introducción a este. **