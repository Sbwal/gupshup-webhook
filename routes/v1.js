const express = require('express');
const debug = require('debug')('webhook:router_v1');
const router = express.Router();

const externals = require('../externals');
const queryHandler = require('../handlers/queryHandler');

router.post('/', async (req, res, next) => {
  try {
    const reqBody = req.body;
    if (payload.type === 'text') {
      const body = {
        message: {
          text: reqBody?.payload?.payload?.text
        },
        from: {
          id: reqBody?.sender?.phone
        }
      }
      const query = externals.koreQueryResolver(body);
      const text = queryHandler(query);
      res.send(text);
    }
    else res.send('Acknowledged');
  } catch (err) {
    debug(err);
    res.statusCode(400).json({ err });
  }
})

module.exports = router;
