# Week4tut
**Commands used for the project**
* npm install –g @angular/cli
>globally installs angular framework so it can be used anywhere on the machine  
* ng new week4tut  
> Creates a new Angular based project with base files 
* cd week4tut
> Change into the created project directory
* ng build
> Builds my angular project 
* ng serve --open 
> Locally serves the angular project then opens it
* npm install bootstrap --save
> Installs bootstrap and saves it into the dependency file, to be automatically installed when npm install is run
* ng generate component login
* ng generate component account
> 2 angular components are generated  

### Git Commands Used
* git init
> Initializes a new git repo in my local project directory (.git)
* git add -A
> It stages all files for the coming commit
* git commit -m "Week 4 Tutorial Setup"
>commits the previously staged files to local repo with a message.
* git remote add origin https://github.com/kisangkay/week4 
> provides the remote repo address where commited files will be pushed
* git branch
>Names the current branch
* git branch -m master main
> Renames current local branch to match the remote branch main, as I was getting an error.
* git push -f -u origin main
> pushes the local branch main forcefully into the remote repository, and -u sets the upstream branch for tracking changes with local repo which is main branch.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.3.
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.
