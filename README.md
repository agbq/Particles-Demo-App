# Particles App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Live demo

[Demo](https://agbq.github.io/Particles-Demo-App/)

## Installation and running app locally

1. `git clone https://github.com/agbq/Particles-Demo-App.git`
2. `cd Particles-Demo-App`
3. `npm i`
4. `npm i -g @angular/cli`
5. `ng serve`
6. Open browser to http://localhost:4200/

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Particles.js usage and implementation

This app was built using the [particles.js](https://github.com/VincentGarreau/particles.js) library.

As of 4/6/20, no typings exist for particles.js library and no fully functional Angular directives could be identified. 
Instead, the particles.js library was added to the angular.json 'scripts' property and the following lines were added in  app.component.ts:

    declare let particlesJS: any; 
This is the start function for particles.js. The parameters are the div ID for particles.js and a configuration object.

    declare let pJSDom: any;
This is an array in particles.js that contains pJS objects.
For optimal performance, the component destroys the existing pJS object before loading a new one. Because the destroypJS() function sets pJSDom to null, the component also resets pJSDom to an empty array, ready for a new pJS object.

## Extensibility - adding new particle configurations

A [demo](https://vincentgarreau.com/particles.js/#default) of particles.js can be used to quickly create and download new configurations.

Configuration [example](https://github.com/VincentGarreau/particles.js/blob/master/demo/particles.json)

Configuration [options](https://github.com/VincentGarreau/particles.js#options)

1. Create a new configuration using the demo above or by duplicating and modifying an existing configuration.
2. Add it to the particles-config.ts file, exporting it as a constant.
3. Import it in the app.component.ts file and add it as a property of the component.
4. Add it to the mat-button-toggle-group in the app.component.html file following the pattern of the existing configurations.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
