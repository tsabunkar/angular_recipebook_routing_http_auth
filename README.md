# Ecommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

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

====================================================================================

Debugging For angular application can be done by ->
Q) As wkt in the browser (.ts) code is converted to (.js) code so question arises 
how to debug Typescript code in Angular ?
Ans)
f12 > Source > webpack > . (dot folder) > src (folder)
Now this src folder has Complete angular project as in the development envrio, where 
we can start putting break points for debugging.

To analyze Angular application we can use -> Chrome Extension called => Augry


-----------------------------------------------------------------------------------
 <a (click)="OnClickOfTab('recipe')">Recipes</a> 
for OnClickOfTab() func we r passing argum VALUE as recipe
Thus in (.ts) file we can use this value -
 OnClickOfTab(argumVara) {
    clg(argumVara)
 }

 Similarly, 
 <app-header (recipeClickedEvent)="onClickOfRecipeEvent('recipe', $event )" > </app-header>
This onClickOfRecipeEvent() func has two argum. First argum has value as recipe and second argum is event
Object :)
 OnClickOfTab(argumVara, eventVara) {
    clg(argumVara)
    clg(eventVara)
 }


-----------------------------------------------------------------------------------