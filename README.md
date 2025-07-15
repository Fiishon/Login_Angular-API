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

- **Propósito**: Se usa como ejemplo complementario para cargar información extra (por ejemplo, al iniciar sesión, mostrar un Pokémon aleatorio en la página de bienvenida).
- **Justificación**: Esta API es gratuita, abierta, y popular entre desarrolladores. Se utiliza para practicar el consumo de una API externa y mostrar datos como nombre, tipo o imagen del Pokémon.









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
