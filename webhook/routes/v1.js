const express = require('express');
const debug = require('debug')('webhook:router_v1');
const router = express.Router();

const externals = require('../externals');

router.post('/', async (req, res, next) => {
  const reqBody = req.body;
  if(payload.type === 'text'){
    const body = {
      message: {
        text: reqBody?.payload?.payload?.text
      },
      from: {
        id: reqBody?.sender?.phone
      }
    }
    const query = externals.koreQueryResolver(body);
    res.send(query.text);
  }
  else res.send('Acknowledged');
})

module.exports = router;
