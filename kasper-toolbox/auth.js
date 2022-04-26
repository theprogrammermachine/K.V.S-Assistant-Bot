
const fetch = require('node-fetch');

module.exports = {
    login: async () => {
        let {BOT_ID, AUTH_TOKEN, setBotId, setAuthToken, setSessionToken} = require('./data/auth');
        let {SERVER_ROOT} = require('./data/constants');
        let requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              botId: BOT_ID,
              token: AUTH_TOKEN
            }),
            redirect: 'follow'
        }
        let response = await fetch(SERVER_ROOT + '/auth/login_bot', requestOptions);
        result = await response.json();
        console.log(result);
        if (result.status === 'success') {  
            setSessionToken(result.session.token);      
            return {
                status: 'success',
                bot: result.bot,
                botSecret: result.botSecret,
                session: result.session
            };
        }
        return {
            status: 'error'
        };
    }
};
