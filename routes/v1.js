const express = require('express');
const debug = require('debug')('webhook:router_v1');
const router = express.Router();

const externals = require('../externals');
const queryHandler = require('../handlers/queryHandler');

router.post('/', async (req, res, next) => {
  try {
    const reqBody = req.body;
    if (req.body.payload.type === 'text') {
      const body = {
        message: {
          text: reqBody?.payload?.payload
        },
        from: {
          id: reqBody?.sender?.phone
        }
      }
      debug(body)
      const query = await externals.koreQueryResolver(body);
      const text = queryHandler(query);
      res.send(text);
    }
    else res.send('Acknowledged');
  } catch (err) {
    debug(err.message);
    res.status(400).json({ error: err.message });
  }
})

module.exports = router;
