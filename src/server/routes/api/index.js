module.exports = (req, res, next) => {
  console.log('in api routes');

  //catch GET requests to /people call the api and load people resource
  app.get('/api/people', (req, res) => {
    fetch('http://localhost:3333/people').then((data) => {
      return data.json();
    }).then((json) => {
      console.log('-/api/people---------------------------------------->');
      console.log(json);
      console.log('<----------------------------------------');
      res.send(json);
    }).catch((err) => log.err);
  });

  next();
};