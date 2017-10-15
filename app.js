const express = require('express'); //https://www.npmjs.com/package/express - web server framework
const path = require('path'); //NodeJS path module wich provides utilities for working with file and directory paths
const webpack = require('webpack'); //use webpack and webpackHotMiddleware/webpackDevMiddleware in order to have dec-server capabilities and more control over server in same file as production setup
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const request = require('request-promise-native');
const bodyParser = require('body-parser');

const app = express(); //create the web app
app.use(bodyParser.json());
const isProduction = process.env.NODE_ENV === 'production';
const webpackConfig = require(path.resolve(__dirname, 'webpack.config')); //import the webpack config

app.set('port', process.env.PORT || 3000); //set port. defaulting to 3000 for development

if (!isProduction) {
  const bundler = webpack(webpackConfig);
  app.use(
    webpackDevMiddleware(bundler, {
      publicPath: webpackConfig.output.publicPath,
      hot: true
    })
  );
  app.use(
    webpackHotMiddleware(bundler, {
      log: console.log // eslint-disable-line no-console
    })
  );
}

//catch GET requests to the root route and serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

//catch GET requests to /api/people then call the api and load people resource
app.get('/api/people', (req, res) => {
  return request({
    uri: 'http://localhost:3333/people',
    json: true
  }).then((response) => {
    res.send(response);
  }).catch((err) => log.err);
});

//catch PUT requests to /api/people/id then call the api and save the person
app.put('/api/people/:id', (req, res) => {
  const id = req.params.id;
  return request({
    uri: `http://localhost:3333/people/${id}`,
    method: 'PUT',
    body: req.body,
    json: true
  }).then((response) => {
    res.send(response);
  }).catch((err) => console.log(err));
});

//start the server
app.listen(app.get('port'), () => {
  console.log('Server listening on ', app.get('port')); //eslint-disable-line no-console
});
