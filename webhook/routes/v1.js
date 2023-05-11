var express = require('express');
var debug = require('debug')('webhook:router_v1');
var router = express.Router();

/* GET home page. */
router.post('/', (req, res, next) => {
  res.send('Post Working');
})

module.exports = router;
