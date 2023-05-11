const express = require('express');
const debug = require('debug')('webhook:router_v1');
const router = express.Router();

const externals = require('../externals');

router.post('/', (req, res, next) => {
  const payload = req.body.payload;
  if(payload.type === 'text'){
    const body = {
      message: {
        text: payload.payload.text
      },
      from: {
        id: req.body.sender.phone
      }
    }
    res.send(externals.koreQueryResolver(body).text);
  }
  else res.send('Acknowledged');
})

module.exports = router;
