const { login } = require("./kasper-toolbox/auth");
const { getWorkerships } = require("./kasper-toolbox/room");
const { createTextMessage } = require("./kasper-toolbox/chat");
const { setBotId, setAuthToken } = require("./kasper-toolbox/data/auth");
const { connectSocket, registerEvent } = require("./kasper-toolbox/realtime");
const {
  chessWidgetInitGui,
  timeSecMirror,
  timeMinMirror,
  timeHourMirror,
  onClockBoxClick,
  weatherTempUpdate,
  weatherHumidityUpdate,
  clockTypeMemory,
  piecesStates,
} = require("./gui");
const { gui } = require("./kasper-toolbox/gui");
var {spawn} = require('child_process');
var readline      = require('readline');

setBotId("82f92733-3fd2-4662-989e-4d93938108d3-1650890118127");
setAuthToken(
  "HMBlIgZXlhzXjqkgtZeMhL7DQzfgHVwzHfqCTZdUuYTRkmaX8B7u7Fbw27ywmIx0"
);

let reservedActions = {};
let reservedPieceId = {};

const { NlpManager } = require('node-nlp');

const logfn = (status, time) => console.log(status, time);
const manager = new NlpManager({ languages: ['fa'], nlu: { useNoneFeature: false, log: logfn }, forcfaER: true  });

// Adds the utterances and intents for the NLP
manager.addDocument('fa', 'سلام', 'greetings.hello');
manager.addDocument('fa', 'درود', 'greetings.hello');
manager.addDocument('fa', 'سلام علیک', 'greetings.hello');
manager.addDocument('fa', 'سلام علیکم', 'greetings.hello');
manager.addDocument('fa', 'خداحافظ', 'greetings.bye');
manager.addDocument('fa', 'بدرود', 'greetings.bye');
manager.addDocument('fa', 'بای', 'greetings.bye');
manager.addDocument('fa', 'بای بای', 'greetings.bye');
manager.addDocument('fa', 'بابای', 'greetings.bye');
manager.addDocument('fa', 'بعدا میبینمت', 'greetings.bye');
manager.addDocument('fa', 'فعلا', 'greetings.bye');
manager.addDocument('fa', 'تا بعد', 'greetings.bye');
manager.addDocument('fa', 'میبینمت', 'greetings.bye');
manager.addDocument('fa', 'حالت چطوره ؟', 'me.moodhow');
manager.addDocument('fa', 'حالت چطوره', 'me.moodhow');
manager.addDocument('fa', 'حالت خوبه ؟', 'me.moodyesno');
manager.addDocument('fa', 'حالت خوبه', 'me.moodyesno');
manager.addDocument('fa', 'خوب هستی ؟', 'me.moodyesno');
manager.addDocument('fa', 'خوب هستی', 'me.moodyesno');
manager.addDocument('fa', 'چه خبر ؟', 'global.news');
manager.addDocument('fa', 'چه خبر', 'global.news');
manager.addDocument('fa', 'چه خبر هایی داری ؟', 'global.news');
manager.addDocument('fa', 'چه خبر هایی داری', 'global.news');
manager.addDocument('fa', 'اوضاع خوبه ؟', 'global.mainmood');

// Train also the NLG
manager.addAnswer('fa', 'greetings.hello', 'bah bah . salam !');
manager.addAnswer('fa', 'greetings.bye', 'felan . moraghebe khodet bash .');
manager.addAnswer('fa', 'me.moodhow', 'mamnoonam . kheyli khubam .');
manager.addAnswer('fa', 'me.moodhow', 'awliam . to chetori ?');
manager.addAnswer('fa', 'me.moodyesno', 'areh . mamnoon . kheyli khubam .');
manager.addAnswer('fa', 'me.moodyesno', 'areh . kheyli khubam . to khubi ?');
manager.addAnswer('fa', 'global.news', 'salamati.');
manager.addAnswer('fa', 'global.mainmood', 'bad nist.');

let sentencesAfterSentences = [];
let tempSentence = undefined;

(async () => {
  await manager.train();
  manager.save();

  console.log("starting bot...");
  let { bot, botSecret, session, status } = await login();
  if (status === "error") throw new Error("Could not login.");
  console.log("logged in succesfully");

  connectSocket(async (user) => {
    let { workerships, status0 } = await getWorkerships();
    if (status0 === "error") throw new Error("Could not get workerships.");
    console.log("fetched workerships succesfully");
    
    registerEvent("message-added", async ({ message }) => {
      const response = await manager.process('fa', message.text);
      console.log(response);
      if (response.answer === undefined) return;
      tempSentence = response.answer;
      await createTextMessage(message.roomId, response.answer);
    });
    registerEvent(
      "request_initial_gui",
      async ({ widgetId, userId, roomId, preview, widgetWorkerId }) => {
        console.log(
          "user::" +
            userId +
            " requested init-gui of widget::" +
            widgetId +
            (preview ? " in preview mode." : ".")
        );
      }
    );
    registerEvent(
      "gui_initialized",
      async ({ widgetId, userId, roomId, widgetWorkerId, preview }) => {
        console.log(
          "user::" +
            userId +
            " notified init-gui of widget::" +
            widgetId +
            " activated."
        );
        console.log("resuscitated widget-worker succesfully");
      }
    );
    registerEvent(
      "element_clicked",
      async ({
        widgetId,
        userId,
        roomId,
        widgetWorkerId,
        preview,
        elementId,
      }) => {
        console.log(
          "user::" +
            userId +
            " clicked widget::" +
            widgetId +
            " element::" +
            elementId +
            "."
        );
      }
    );
    registerEvent("user_joined", async ({ user, room }) => {
      console.log(user.firstName + " joined room.");
      let { message, status4 } = await createTextMessage(
        room.id,
        "سلام " +
          user.firstName +
          " " +
          user.lastName +
          " . به روم ما خوش آمدید ."
      );
      if (status4 === "error") throw new Error("Could not create message.");
      console.log("created message succesfully");
    });
  });
})();
