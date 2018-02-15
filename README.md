# GithubSearch

Simple Angular 2 app that connects to the Github API and retrieves public user data.

This app is done with the only purpose of learning and as a portfolio.

If you want to clone it you will have to place your GitHub client_id & client_secret at: ```/src/app/services/github.service.ts```

``` 
@Injectable()
export class GithubService {
    private username:string;
    private client_id = 'YOUR_CLIENT_ID_HERE';
    private client_secret = 'YOUR_CLIENT_SECRET_HERE';
    
    ...
```

You can get them following [this](https://developer.github.com/v3/guides/basics-of-authentication/#registering-your-app).

You can see a **live example** of this app [here](https://ng-github-search.herokuapp.com/).

## Setup Details

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
