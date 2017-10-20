const express = require('express'); // https:// www.npmjs.com/package/express - web server framework
const path = require('path'); // NodeJS path module wich provides utilities for working with file and directory paths
const webpack = require('webpack'); // use webpack and webpackHotMiddleware/webpackDevMiddleware in order to have dec-server capabilities and more control over server in same file as production setup
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevMiddleware = require('webpack-dev-middleware');
const request = require('request-promise-native');
const bodyParser = require('body-parser');
const config = require('./config.json');

const app = express(); // create the web app
app.use(bodyParser.json());
const isProduction = process.env.NODE_ENV === 'production';
const webpackConfig = require(path.resolve(__dirname, 'webpack.config')); // import the webpack config

app.set('port', process.env.PORT || 3000); // set port. defaulting to 3000 for development

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
      log: console.log //  eslint-disable-line no-console
    })
  );
}

// catch GET requests to the root route and serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// catch GET requests to /api/people then call the api and load people resource
app.get('/api/people', (req, res) => { // eslint-disable-line arrow-body-style
  return request({
    uri: `${config.backend}/${config.appId}/people`,
    json: true
  }).then((response) => {
    res.send(response);
  }).catch((err) => console.log(err)); // eslint-disable-line no-console
});

// catch PUT requests to /api/people/;id then call the api and save the person
app.put('/api/people/:id', (req, res) => {
  const {id} = req.params;
  return request({
    uri: `${config.backend}/${config.appId}/people/${id}`,
    method: 'PUT',
    body: req.body,
    json: true
  }).then((response) => {
    res.send(response);
  }).catch((err) => console.log(err)); // eslint-disable-line no-console
});

// catch PUT requests to /api/people/:id/image then call the api and save the image
app.put('/api/people/:id/image', (req, res) => {
  const {id} = req.params;
  return request({
    uri: `${config.backend}/${config.appId}/people/${id}/image`,
    method: 'PUT',
    body: req.body,
    json: true
  }).then((response) => {
    res.send(response);
  }).catch((err) => console.log(err)); // eslint-disable-line no-console
});

// remove item by id on people node
app.delete('/api/people/:id', (req, res) => {
  const {id} = req.params;
  return request({
    uri: `${config.backend}/${config.appId}/people/${id}`,
    method: 'DELETE',
    json: true
  }).then((response) => {
    res.send(response);
  }).catch((err) => console.log(err)); // eslint-disable-line no-console
});

// start the server
app.listen(app.get('port'), () => {
  console.log('Server listening on ', app.get('port')); // eslint-disable-line no-console
});
