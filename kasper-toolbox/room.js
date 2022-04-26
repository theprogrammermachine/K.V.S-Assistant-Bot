
const fetch = require('node-fetch');

module.exports = {
    getWorkerships: async () => {
        const { SESSION_TOKEN } = require('./data/auth');
        const { SERVER_ROOT } = require('./data/constants');
        let requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              token: SESSION_TOKEN
            },
            redirect: 'follow'
        }
        let response = await fetch(SERVER_ROOT + '/bot/get_bot_Workerships', requestOptions);
        result = await response.json();
        console.log(result);
        if (result.status === 'success') {
            return {
                status: 'success',
                workerships: result.workerships
            };
        }
        return {
            status: 'error'
        };
    }
};
