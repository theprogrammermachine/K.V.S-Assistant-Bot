let botId, token, sessionToken;

module.exports = {
    setAuthToken: t => {
        token = t;
        module.exports.AUTH_TOKEN = t;
    },
    setSessionToken: t => {
        sessionToken = t;
        module.exports.SESSION_TOKEN = t;
    },
    setBotId: bid => {
        botId = bid;
        module.exports.BOT_ID = bid;
    }
};
