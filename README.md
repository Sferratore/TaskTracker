# TaskTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.6 and Node.js.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

To execute correctly the application, it is also needed to set properly the API to the database. Run `node server.js` to launch the API to the DB (hosted on localhost:3000).
You can configure the API in the server.js file.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## DB used

Following there is the MySQL DB used to run this project:

`CREATE DATABASE TaskDatabase;

USE TaskDatabase;

CREATE TABLE Task (
    id INT NOT NULL AUTO_INCREMENT,
    text VARCHAR(255) NOT NULL,
    day DATE NOT NULL,
    PRIMARY KEY (id)
);`

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
