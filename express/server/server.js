const express = require('express');

// create express obj:
// This app starts a server and listens on port 3000 for connections.
const app = express();
const port = 3000;


const cors = require('cors');
// deactivate the cors rule in the browser.
app.use(cors());



// GET, POST, PUT, DELETE




app.get('/', (req, res) => {
  console.log(req.url);
  res.json({message: "Json says hi!"});
});



// res has .json (pass js object, to be translated to json and sent)

// tell the server to keep listening:
// This app starts a server and listens on port 3000 for connections.
app.listen(port, function() {
  console.log('App running on port 3000');
});
