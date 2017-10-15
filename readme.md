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
* Testing code with Mocha and Expect.js

## Cloning
* git clone git@github.com:ibjohansen/acando-academy-codehub-ada.git

## Setup
* npm install

## Testing
* npm test (run jest & mocha) [edit?]
* npm test:watch (run tests on file change)
* npm test:coverage (generate test-coverage)

## Linting with Airbnb's ESLint settings
npm install --save-dev eslint-config-airbnb eslint@^4.8.0 eslint-plugin-jsx-a11y@^6.0.2 eslint-plugin-import@^2.7.0 eslint-plugin-react@^7.4.0

## Development
* npm start
* navigate to http://localhost:3000

## Production
* NODE_ENV=production npm run build:prod [edit?]
* npm run start-server

## Building
* npm run build
* npm run build:prod
