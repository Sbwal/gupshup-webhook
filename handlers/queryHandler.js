const debug = require('debug')('webhook:query');

const parsePayload = (text) => {
  let replace = text.replaceAll('&quot;', '"');
  debug(replace);
  try {
    const o = JSON.parse(replace);
    debug(o)
    if (o.payload?.template_type === 'button') {
      const rObj = {
        "type": "quick_reply",
        "content": {
          "type": "text",
          "header": "",
          "text": o.payload.text,
          "caption": ""
        },
        "options": []
      }
      o.payload.buttons.forEach(v => rObj.options.push({ type: "text", title: v.title.substring(0, 20), postbackText: v.payload }));
      return rObj;
    }
    if (o.payload?.template_type === 'table') {
      
    }
    if (o.isTemplate) {
      const strArr = o.text.split('\n');
      debug('strArr', strArr);
      const rObj = {
          "type": "quick_reply",
          "content": {
              "type": "text",
              "header": "",
              "text": strArr[0],
              "caption": ""
          },
          "options": []
      }
      for (let i = 1; i < strArr.length; i++) {
          let v = strArr[i];
          debug(v)
          if (v === '') continue;
          rObj.options.push({ type: "text", title: v.substring(0, 20), postbackText: v })
      }
      return rObj;
    }
  }
  catch (e) {
    debug(e.message)
  }
  return replace;
}

const queryHandler = ({ text }) => {
  if (typeof text === "string") return parsePayload(text);
  return text.map(parsePayload);
}

module.exports = queryHandler;