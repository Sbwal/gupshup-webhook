const debug = require('debug')('webhook:externals');
const axios = require("axios").default;
const config = require('./config/default');

const koreQueryResolver = async (body) => {
    try {
        const options = {
            method: 'POST',
            url: `https://${config.kore.bot.url}/chatbot/hooks/${config.kore.bot.id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${config.kore.bot.jwt}`
            },
            data: body
        };

        const response = axios.request(options);
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.error(error);
        return {};
    };

}

module.exports = {
    koreQueryResolver
}