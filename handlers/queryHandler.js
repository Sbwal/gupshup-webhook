const queryHandler = (query) => {
    const text = query.text;
    if(typeof text === "string") return text;
    const val = query.text[0].replaceAll('&quot;', '"');
    return val;
}

module.exports = queryHandler;