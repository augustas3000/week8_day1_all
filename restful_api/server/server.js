// This file is basically a web server.

// once express is installed we require it,
const express = require('express');
// the function returns an object that provides
// various methods needed to create a server
// the returned object is assigned a variable - app
const app = express();


const cors = require('cors');
const bodyParser = require('body-parser');
const createRouter = require('./helpers/createRouter.js')

const teas = [
  { name: "Early Grey", brand: "Twinings" },
  { name: "Irish Breakfast", brand: "Barry's Tea" },
  { name: "Lemon and Ginger", brand: "Lipton" },
  { name: "Rooibos", brand: "Tick Tock" },
  { name: "Green", brand: "Clipper" }
];

const biscuits = [
  { name: "Digestives", brand: "McVitie's" },
  { name: "Hobnobs", brand: "McVitie's" },
  { name: "Shortbreads", brand: "Walkers" },
  { name: "Jammy Dodgers", brand: "Burton's" },
  { name: "Custard Creams", brand: "Crawford's" }
];

app.use(cors());
// jsonifies bodie of teh request
app.use(bodyParser.json());


// routers:
const teasRouter = createRouter(teas);
app.use('/api/teas', teasRouter);

const biscuitsRouter = createRouter(biscuits);
app.use('/api/biscuits', biscuitsRouter);




app.listen(3000, function () {
  console.log(`App running on port ${ this.address().port }`);
});





// /api/teas - Index (GET)
// /api/teas/:id - Show(GET)
// /api/teas/create - (POST)
// /api/teas/:id - Destroy(DELETE)
// /api/teas/:id - Update(PUT)
