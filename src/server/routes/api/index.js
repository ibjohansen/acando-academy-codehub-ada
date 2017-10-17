module.exports = (app, next) => {
  // catch GET requests to /people call the api and load people resource
  app.get('/api/people', (req, res) => {
    fetch('http://localhost:3333/people')
      .then((data) => data.json())
      .then((json) => {
        res.send(json);
      }).catch((err) => console.error(err)); // eslint-disable-line no-console
  });

  next();
};
