
const fetch = require('node-fetch');

module.exports = {
    gui: async (type, gui, userId, widgetId, widgetWorkerId, preview, roomId, globalGui) => {
        const { SESSION_TOKEN } = require('./data/auth');
        const { SERVER_ROOT } = require('./data/constants');
        let requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              token: SESSION_TOKEN
            },
            body: JSON.stringify({
                type: type,
                userId: userId,
                widgetId: widgetId,
                widgetWorkerId: widgetWorkerId,
                roomId: roomId,
                preview: preview,
                gui: gui,
                globalGui: globalGui
            }),
            redirect: 'follow'
        }
        let response = await fetch(SERVER_ROOT + '/bot/gui', requestOptions);
        result = await response.json();
        console.log(result);
        if (result.status === 'success') {
            return {
                status: 'success'
            };
        }
        return {
            status: 'error'
        };
    }
};
