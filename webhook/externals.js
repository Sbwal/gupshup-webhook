const debug = require('debug')('webhook:externals');
const axios = require("axios").default;
const config = require('./config/default');

const koreQueryResolver = (body) => {

    const options = {
        method: 'POST',
        url: `https://${config.kore.bot.url}/chatbot/hooks/${config.kore.bot.id}`,
        headers: {
            Accept: '*/*',
            'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${config.kore.bot.jwt}`
        },
        data: body
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });

}

module.exports = {
    koreQueryResolver
}