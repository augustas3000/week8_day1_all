
// creating serevr obj
const express = require('express');
const app = express();

// for what?
const parser = require('body-parser');
// import mongodb client
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router');
const cors = require('cors');

app.use(cors())
app.use(parser.json())

// connecting to db, client obj has to be for db control
MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    console.log(err);
  }

  // specify database
  const db = client.db('games_hub');
  // take collection from db and assign it to var
  const gamesCollection = db.collection('games');
  // use this var as an argument in create router
  const gamesRouter = createRouter(gamesCollection)
  // prefix to specify home route in routing
  app.use('/api/games', gamesRouter);

  // make server object listen to requests using port 3000, and log to console(terminal as this is node.js server) req, response.
  app.listen(3000, function(){
    console.log(`app listening on port ${this.address().port}`);
  })
});


//2. What do you notice about the folder structure? Whats the client responsible for? Whats the server responsible for?
// Client and server are treated as two separate applications. Client has a new file in src called services, that holds js code responsible for interacting with the web server.
// The client
// Server handles http requests.
