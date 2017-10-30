# Codehub-repo for Ada
## Acando Academy

## Description
This is a repo demonstrating modern web development (2017) for Jenteprosjektet Ada at NTNU (http://www.ntnu.no/jenter)
The codebase is developed by Acando Academy for this spesific purpose and wil not be maintained outside this scope.
For questions about Acando and Acando Academy use https://www.acando.no

The repo wil demonstrate the use of:
* Serving and packaging with Node and npm
* Bundling with Webpack
* Coding with JavaScript (ES2015) and React
* Assuring code quality with ESLint 
* Testing code with Mocha, Chai, Enzyme and Jest

## Cloning
* git clone git@github.com:ibjohansen/acando-academy-codehub-ada.git

## Full source, simple-task, advanced task
* the master branch is the full source - code
* the simple-nolist-no-person branch has some JSX in the list and item component removed
* the advanced-no-react-list-and-person branch has most JSX and logic removed from the list and item component

## Node
* This repo is created with Node version 8.6.0 and npm 5.3.0

## Setup
* npm install

## Testing
* npm test (run jest & mocha)
* npm test:watch (run tests on file change)

## Linting with Airbnb's ESLint settings
* npm lint
 ()npm install --save-dev eslint-config-airbnb eslint@^4.8.0 eslint-plugin-jsx-a11y@^6.0.2 eslint-plugin-import@^2.7.0 eslint-plugin-react@^7.4.0)

## Development
* npm start:dev
* navigate to http://localhost:3000
* for local development you either need to 

## Production
* NODE_ENV=production npm run build:prod [edit?]
* npm run start-server

## Building
* npm run build
* npm run build:prod
