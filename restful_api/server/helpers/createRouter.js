const express = require('express')

const createRouter = function(data) {
  const router = express.Router();

  // GET a list of all the teas
  // /api/teas - Index (GET)
  // We want to enable a client making a GET request to the home route, to see a form, and list of teas and biscees.
  router.get('/', (req,res) => {
    res.json(data);
  });

  // show info about an individual tea:
  // /api/teas/:id - Show(GET)
  router.get('/:id', (req, res) => {
    // params obj lives on request object
    res.json(data[req.params.id]);
  });

  // create a new tea using post
  // /api/teas/create(POST)
  router.post('/', (req,res) => {
    // console.log('req.body:', req.body);
    data.push(req.body);
    res.json(data);
  });

  // /api/teas/:id - Destroy(DELETE)
  router.delete('/:id', (req, res) => {
    // res.json(teas[req.params.id]);
    data.splice(req.params.id, 1);
    res.json(data);
  });


  // /api/teas/:id - Update(PUT)
  router.put('/:id', (req, res) => {
    data[req.params.id] = req.body;
    res.json(data);
  });

  return router;

};

module.exports = createRouter
