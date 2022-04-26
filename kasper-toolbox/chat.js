
const fetch = require('node-fetch');

module.exports = {
    createTextMessage: async (roomId, text) => {
        const { SESSION_TOKEN } = require('./data/auth');
        const { SERVER_ROOT } = require('./data/constants');
        let requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              token: SESSION_TOKEN
            },
            body: JSON.stringify({
                text: text,
                roomId: roomId,
                messageType: 'text'
            }),
            redirect: 'follow'
        }
        let response = await fetch(SERVER_ROOT + '/chat/create_bot_message', requestOptions);
        result = await response.json();
        console.log(result);
        if (result.status === 'success') {
            return {
                status: 'success',
                message: result.message
            };
        }
        return {
            status: 'error'
        };
    }
};
