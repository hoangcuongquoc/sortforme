# AppSort

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.6.

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

{
  "name": "app-sort",
  "version": "0.0.0",
  "main":"main.js",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "serve:ssr:appSort": "node dist/app-sort/server/server.mjs",
    "electron": "ng build --configuration production && electron .",
  "electron-dev": "ng serve & electron .",
   "dist": "ng build --configuration production && electron-builder"
  },
  "private": true,
  "dependencies": {
    "@angular/cdk": "^19.2.8",
    "@angular/common": "^19.2.0",
    "@angular/compiler": "^19.2.0",
    "@angular/core": "^19.2.0",
    "@angular/forms": "^19.2.0",
    "@angular/material": "^19.2.8",
    "@angular/platform-browser": "^19.2.0",
    "@angular/platform-browser-dynamic": "^19.2.0",
    "@angular/platform-server": "^19.2.0",
    "@angular/router": "^19.2.0",
    "@angular/ssr": "^19.2.6",
    "animejs": "^4.0.0",
    "express": "^4.18.2",
    "rxjs": "~7.8.0",
    "tslib": "^2.3.0",
    "zone.js": "~0.15.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "^19.2.6",
    "@angular/cli": "^19.2.6",
    "@angular/compiler-cli": "^19.2.0",
    "@types/animejs": "^3.1.13",
    "@types/express": "^4.17.17",
    "@types/jasmine": "~5.1.0",
    "@types/node": "^18.18.0",
    "electron": "^35.1.4",
    "jasmine-core": "~5.6.0",
    "karma": "~6.4.0",
    "karma-chrome-launcher": "~3.2.0",
    "karma-coverage": "~2.2.0",
    "karma-jasmine": "~5.1.0",
    "karma-jasmine-html-reporter": "~2.1.0",
    "typescript": "~5.7.2"
  },
  "build": {
  "appId": "com.example.angularapp",
  "productName": "Sort Lab",
  "files": [
    "dist/",
    "main.js"
  ],
  "win": {
    "target": "nsis"  
  },
  "directories": {
    "output": "release"
  }
}

}


Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
