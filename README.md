# LoginAngular

Este proyecto de login construido con **Angular** que consume una **API** de usuarios. Permite a los usuarios autenticarse mediante sus credenciales y navegar dentro si las credenciales son válidas.


## 🧰 Tecnologías utilizadas

- Angular 20
- TypeScript
- Bootstrap 5
- API USUARIOS
- API POKEMON
- Angular Material

Ejemplo de uso
Accede al formulario en /login.

Ingresa credenciales válidas (ej: admin@gmail.com / admin123).

Si la autenticación es correcta, redirige al dashboard o página principal.

El botón de cerrar sesión elimina el token/usuario y regresa al login.


## 🌐 APIs utilizadas

### 1. [Fake Store API - Escuelajs](https://api.escuelajs.co/api/v1/users)

Propósito en el proyecto:
Se utilizó esta API para simular un sistema real de usuarios registrados. Permite obtener una lista de usuarios con campos como nombre, correo electrónico, contraseña. Esta información es fundamental para realizar una verificación de credenciales en el proceso de login.

Justificación:

Es una API pública y gratuita que no requiere autenticación para su uso básico, lo cual facilita el desarrollo y pruebas.

Entrega datos en un formato estructurado y limpio (JSON), ideal para consumir desde Angular con HttpClient.

Permite trabajar con un modelo de usuario completo, lo cual ayuda a simular la lógica de validación como si se tratara de un backend real.

Ejemplo de uso en el proyecto:
Al ingresar al formulario de login, el sistema hace una petición HTTP (GET) a la ruta /users de la API para obtener todos los usuarios y luego compara los datos ingresados por el usuario con los registros obtenidos. Si hay coincidencia en correo y contraseña, se permite el acceso.

### 2. [PokéAPI](https://pokeapi.co)

Propósito en el proyecto:
Se utiliza para mostrar un catálogo de Pokémon en la página principal una vez que el usuario ha iniciado sesión correctamente. Cada tarjeta del catálogo muestra el nombre, imagen y tipo(s) del Pokémon.

Justificación:

Permite practicar el consumo de datos dinámicos, múltiples peticiones y paginación.

Brinda una experiencia más rica y visual al usuario.

La estructura de sus endpoints (por ejemplo, https://pokeapi.co/api/v2/pokemon?limit=20) permite obtener listas y detalles fácilmente.

Refuerza el manejo de peticiones asincrónicas y suscripciones en Angular.

Implementación en la app:
Después del login, la página principal carga un catálogo visual con múltiples Pokémon. Se realiza una primera petición para obtener una lista de Pokémon (GET /pokemon?limit=20) y, por cada uno, se realiza una segunda petición para obtener sus detalles (GET /pokemon/{name}), incluyendo imagen, tipos y habilidades. Esto permite construir tarjetas completas y llamativas para cada Pokémon, similares a una Pokédex visual.


Conclusión del uso de APIs
El uso conjunto de estas dos APIs demuestra cómo una aplicación Angular puede integrarse con múltiples servicios REST externos para cumplir distintos objetivos: autenticación y visualización de contenido. Además, mejora la comprensión del flujo de datos, uso de servicios, modelos, componentes y promueve buenas prácticas en el consumo de APIs desde el frontend.


#Capturas de pantalla

<img width="2880" height="1824" alt="Captura de pantalla 2025-07-15 091439" src="https://github.com/user-attachments/assets/f09ff508-db86-436d-989d-0d1a9e5c8a68" />

De primero, al iniciar sesión, si queremos entrar con credenciales incorrectas, no nos lo permite.


<img width="2880" height="1824" alt="Captura de pantalla 2025-07-15 091531" src="https://github.com/user-attachments/assets/d6713fba-14da-4ab0-b2db-fefe5c052e72" />

Al iniciar sesión correctamente, nos manda a nuestro componente que tienen nuestra pokeAPI, donde tendremos mas cosas.

<img width="2880" height="1824" alt="Captura de pantalla 2025-07-15 091541" src="https://github.com/user-attachments/assets/0752804d-0a7d-4e08-9490-0f8a0f8b965a" />

Tenemos la informacion del usuario que se logueo y su foto de perfil.

<img width="2880" height="1824" alt="Captura de pantalla 2025-07-15 091552" src="https://github.com/user-attachments/assets/5c557560-5aa7-4d63-b2fd-6338fd084e5f" />

Tambien, tenemos un filtro de busqueda por nombre del pokemon.

<img width="2880" height="1824" alt="Captura de pantalla 2025-07-15 091619" src="https://github.com/user-attachments/assets/4427b057-d47d-4c85-b8e8-e1f1278208d8" />

<img width="2880" height="1824" alt="Captura de pantalla 2025-07-15 091630" src="https://github.com/user-attachments/assets/991be7da-e34b-45f7-a9e8-4b736b7d1fad" />

Contamos con paginacion para hacer mas agil el proceso de cargar los pokemon de la API.

<img width="2880" height="1824" alt="Captura de pantalla 2025-07-15 091636" src="https://github.com/user-attachments/assets/20ca60e7-4687-4389-b104-8dc777ae11b1" />

Al dar click en un pokemon, nos soltara un modal con su información.

<img width="2880" height="1824" alt="Captura de pantalla 2025-07-15 091653" src="https://github.com/user-attachments/assets/6abfbf83-51e9-4d9f-aa96-cc12e952a8d5" />

Al dar click en el boton de agregar, se mostrara un formulario donde podremos agregar informacion de un nuevo pokemon, estos datos son de prueba y es experimental la función.

<img width="2880" height="1824" alt="Captura de pantalla 2025-07-15 091702" src="https://github.com/user-attachments/assets/f9b74fec-902b-4fe7-a75c-1d036cdf27da" />

Y si lo buscamos, nos aparecerá.

<img width="2880" height="1824" alt="Captura de pantalla 2025-07-15 091713" src="https://github.com/user-attachments/assets/c9432391-4f2f-4dcc-9a0b-fd29676a2ace" />

Y por ultimo, para eliminarlo presionamos el boton y tendremos que eliminarlo por nombre.


This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
