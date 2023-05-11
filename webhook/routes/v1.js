const express = require('express');
const debug = require('debug')('webhook:router_v1');
const router = express.Router();

/* GET home page. */
router.post('/', (req, res, next) => {
  res.send('Post Working');
})

module.exports = router;
