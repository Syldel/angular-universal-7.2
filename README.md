# AngularWebApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## To install Universal :

Run `ng add @nguniversal/express-engine --clientProject angular-web-app`

More informations here:
https://angular.io/guide/universal


## Angular compilation

Remember :

Angular offers two ways to compile your application:

- Just-in-Time (JIT), which compiles your app in the browser at runtime.
- Ahead-of-Time (AOT), which compiles your app at build time.

JIT compilation is the default when you run the ng build (build only) or ng serve (build and serve locally) CLI commands:
`ng build`
`ng serve`

For AOT compilation, include the --aot option with the ng build or ng serve command:
`ng build --aot`
`ng serve --aot`

The `ng build` command with the --prod meta-flag (`ng build --prod`) compiles with AOT by default.
