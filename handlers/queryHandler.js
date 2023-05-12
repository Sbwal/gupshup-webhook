const queryHandler = (query) => {
    const val = query.text[0].replaceAll('&quot;', '"');
    return val;
}

module.exports = queryHandler;