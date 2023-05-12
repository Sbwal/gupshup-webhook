module.exports = {
    "app": {
        "port": process.env.PORT
    },
    "kore": {
        "bot": {
            "id": process.env.KORE_BOT_ID,
            "jwt": process.env.KORE_BOT_JWT,
            "url": process.env.KORE_BOT_URL
        }
    }
}