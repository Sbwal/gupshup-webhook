const debug = require('debug')('webhook:externals');
const axios = require("axios").default;
const config = require('./config/default');

const koreQueryResolver = async (body) => {
    debug('In koreQueryResolver');
    const options = {
        method: 'POST',
        url: `https://${config.kore.bot.url}/chatbot/hooks/${config.kore.bot.id}`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.kore.bot.jwt}`
        },
        data: body
    };
    debug(options)
    const response = await axios(options);
    debug(response.data);
    return response.data;
}

module.exports = {
    koreQueryResolver
}