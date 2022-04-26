
const io = require('socket.io-client');
const fetch = require('node-fetch');

let socket, pingTimer;
let eventDict = {};

module.exports = {
  registerEvent: (eventName, func) => {
    socket.on(eventName, func);
    eventDict[eventName] = func;
  },
  unregisterEvent: (eventName) => {
    socket.removeAllListeners(eventName);
    delete eventDict[eventName];
  },
  connectSocket: (connectionCallback) => {
    const { SESSION_TOKEN }  = require('./data/auth');
    const { SERVER_ROOT }  = require('./data/constants');
    socket = io(SERVER_ROOT);
    if (pingTimer !== undefined) {
      try {clearInterval(pingTimer);} catch (ex) {console.log(ex);}
    }
    pingTimer = setInterval(() => {
      if (socket !== null && socket !== undefined) {
        try {socket.emit('ping');} catch(ex) {console.log(ex);}
      }
    }, 1000);
    socket.on('sync', () => {
      let requestOptions2 = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          token: SESSION_TOKEN,
        },
        redirect: 'follow',
      }
      fetch(SERVER_ROOT + '/notifications/sync-bot', requestOptions2)
        .then((response) => response.json())
        .then((result) => {
          console.log(result)
          if (result.notifications !== undefined) {
            result.notifications.forEach(notif => {
              let eventFunc = eventDict[notif.key];
              if (eventFunc !== undefined) {
                try {eventFunc(notif.data);} catch (ex) {}
              }
            });
            let requestOptions3 = {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                token: SESSION_TOKEN,
              },
              body: JSON.stringify({
                notifsCount: result.notifications.length
              }),
              redirect: 'follow',
            }
            fetch(SERVER_ROOT + '/notifications/recycle-bot', requestOptions3)
          }
        })
        .catch((error) => console.log('error', error))
    });
    module.exports.registerEvent('connect', () => {
      console.log('socket connected succesfully.');
      module.exports.registerEvent('auth-success', () => {
        console.log('socket authenticated succesfully.');
        if (connectionCallback !== undefined) {
            connectionCallback();
          }
      })
      socket.emit('auth-bot', {
        token: SESSION_TOKEN,
      })
    })
    module.exports.registerEvent('disconnect', () => {
      console.log('socket disconnected.');
      console.log('socket reconnecting...');
    });
  }
};
