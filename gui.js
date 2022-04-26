let timeSecMirror = {
  elId: "secondHand",
  property: "transform",
  value: "rotate(calc(((@timeSec + 1) * 6deg) - 90deg))",
  variable: { id: "timeSec", from: "time.now.seconds" },
};
let timeMinMirror = {
  elId: "minuteHand",
  property: "transform",
  value: "rotate(calc((@timeMin * 6deg) - 90deg))",
  variable: { id: "timeMin", from: "time.now.minutes" },
};
let timeHourMirror = {
  elId: "hourHand",
  property: "transform",
  value: "rotate(calc((@timeHour * 30deg) + 18deg - 90deg))",
  variable: { id: "timeHour", from: "time.now.hours" },
};
let clockTypeMemory = {
  memoryId: "clockType",
  value: "clock",
};
let weatherTempUpdate = {
  elId: "weatherMsg",
  property: "styledContent",
  newValue: "-",
};
let weatherHumidityUpdate = {
  elId: "weatherHumidity",
  property: "styledContent",
  newValue: "-",
};

let piecesStates = {
  whiteRokh: {
    id: 'whiteRokh',
    team: 'white',
    type: "rook",
    position: { x: 0, y: 0 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/rook.png",
    },
    killed: false
  },
  whiteAsb: {
    id: 'whiteAsb',
    team: 'white',
    type: 'knight',
    position: { x: 1, y: 0 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/knight.png",
    },
    killed: false
  },
  whiteFil: {
    id: 'whiteFil',
    team: 'white',
    type: 'bishop',
    position: { x: 2, y: 0 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/bishop.png",
    },
    killed: false
  },
  whiteVazir: {
    id: 'whiteVazir',
    team: 'white',
    type: 'queen',
    position: { x: 3, y: 0 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/queen.png",
    },
    killed: false
  },
  whiteShah: {
    id: 'whiteShah',
    team: 'white',
    type: 'king',
    position: { x: 4, y: 0 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/king.png",
    },
    killed: false
  },
  whiteFil2: {
    id: 'whiteFil2',
    team: 'white',
    type: 'bishop',
    position: { x: 5, y: 0 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/bishop.png",
    },
    killed: false
  },
  whiteAsb2: {
    id: 'whiteAsb2',
    team: 'white',
    type: 'knight',
    position: { x: 6, y: 0 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/knight.png",
    },
    killed: false
  },
  whiteRokh2: {
    id: 'whiteRokh2',
    team: 'white',
    type: 'rook',
    position: { x: 7, y: 0 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/rook.png",
    },
    killed: false
  },
  whiteSarbaz: {
    id: 'whiteSarbaz',
    team: 'white',
    type: 'pawn',
    position: { x: 0, y: 1 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawn.png",
    },
    killed: false
  },
  whiteSarbaz2: {
    id: 'whiteSarbaz2',
    team: 'white',
    type: 'pawn',
    position: { x: 1, y: 1 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawn.png",
    },
    killed: false
  },
  whiteSarbaz3: {
    id: 'whiteSarbaz3',
    team: 'white',
    type: 'pawn',
    position: { x: 2, y: 1 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawn.png",
    },
    killed: false
  },
  whiteSarbaz4: {
    id: 'whiteSarbaz4',
    team: 'white',
    type: 'pawn',
    position: { x: 3, y: 1 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawn.png",
    },
    killed: false
  },
  whiteSarbaz5: {
    id: 'whiteSarbaz5',
    team: 'white',
    type: 'pawn',
    position: { x: 4, y: 1 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawn.png",
    },
    killed: false
  },
  whiteSarbaz6: {
    id: 'whiteSarbaz6',
    team: 'white',
    type: 'pawn',
    position: { x: 5, y: 1 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawn.png",
    },
    killed: false
  },
  whiteSarbaz7: {
    id: 'whiteSarbaz7',
    team: 'white',
    type: 'pawn',
    position: { x: 6, y: 1 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawn.png",
    },
    killed: false
  },
  whiteSarbaz8: {
    id: 'whiteSarbaz8',
    team: 'white',
    type: 'pawn',
    position: { x: 7, y: 1 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawn.png",
    },
    killed: false
  },

  blackRokh: {
    id: 'blackRokh',
    team: 'black',
    type: 'rook',
    position: { x: 0, y: 7 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/rookBlack.png",
    },
    killed: false
  },
  blackAsb: {
    id: 'blackAsb',
    team: 'black',
    type: 'knight',
    position: { x: 1, y: 7 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/knightBlack.png",
    },
    killed: false
  },
  blackFil: {
    id: 'blackFil',
    team: 'black',
    type: 'bishop',
    position: { x: 2, y: 7 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/bishopBlack.png",
    },
    killed: false
  },
  blackVazir: {
    id: 'blackVazir',
    team: 'black',
    type: 'queen',
    position: { x: 3, y: 7 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/queenBlack.png",
    },
    killed: false
  },
  blackShah: {
    id: 'blackShah',
    team: 'black',
    type: 'king',
    position: { x: 4, y: 7 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/kingBlack.png",
    },
    killed: false
  },
  blackFil2: {
    id: 'blackFil2',
    team: 'black',
    type: 'bishop',
    position: { x: 5, y: 7 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/bishopBlack.png",
    },
    killed: false
  },
  blackAsb2: {
    id: 'blackAsb2',
    team: 'black',
    type: 'knight',
    position: { x: 6, y: 7 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/knightBlack.png",
    },
    killed: false
  },
  blackRokh2: {
    id: 'blackRokh2',
    team: 'black',
    type: 'rook',
    position: { x: 7, y: 7 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/rookBlack.png",
    },
    killed: false
  },
  blackSarbaz: {
    id: 'blackSarbaz',
    team: 'black',
    type: 'pawn',
    position: { x: 0, y: 6 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawnBlack.png",
    },
    killed: false
  },
  blackSarbaz2: {
    id: 'blackSarbaz2',
    team: 'black',
    type: 'pawn',
    position: { x: 1, y: 6 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawnBlack.png",
    },
    killed: false
  },
  blackSarbaz3: {
    id: 'blackSarbaz3',
    team: 'black',
    type: 'pawn',
    position: { x: 2, y: 6 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawnBlack.png",
    },
    killed: false
  },
  blackSarbaz4: {
    id: 'blackSarbaz4',
    team: 'black',
    type: 'pawn',
    position: { x: 3, y: 6 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawnBlack.png",
    },
    killed: false
  },
  blackSarbaz5: {
    id: 'blackSarbaz5',
    team: 'black',
    type: 'pawn',
    position: { x: 4, y: 6 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawnBlack.png",
    },
    killed: false
  },
  blackSarbaz6: {
    id: 'blackSarbaz6',
    team: 'black',
    type: 'pawn',
    position: { x: 5, y: 6 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawnBlack.png",
    },
    killed: false
  },
  blackSarbaz7: {
    id: 'blackSarbaz7',
    team: 'black',
    type: 'pawn',
    position: { x: 6, y: 6 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawnBlack.png",
    },
    killed: false
  },
  blackSarbaz8: {
    id: 'blackSarbaz8',
    team: 'black',
    type: 'pawn',
    position: { x: 7, y: 6 },
    icon: {
      url: "https://audioplayer.kasperian.cloud/pawnBlack.png",
    },
    killed: false
  },
};

let chessWidgetInitGui = {
  type: "Box",
  id: "clockBox",
  width: "100%",
  height: "100%",
  transition: "transform 1s",
  position: "relative",
  borderRadius: 32,
  background: "rgba(255, 255, 255, 1)",
  children: [
    {
      type: "Box",
      id: "clockBackImage",
      width: "100%",
      height: "100%",
      borderRadius: 32,
      position: "absolute",
      left: 0,
      top: 0,
      children: [0, 1, 2, 3, 4, 5, 6, 7].map((y) => {
        return {
          type: "Box",
          width: "100%",
          height: "12.5%",
          children: [0, 1, 2, 3, 4, 5, 6, 7].map((x) => {
            return {
              type: "Box",
              id: 'block-' + x + '-' + y,
              width: "12.5%",
              height: "12.5%",
              position: "absolute",
              left: `calc(${x} * 12.5%)`,
              top: `calc(${y} * 12.5%)`,
              borderRadius:
                x === 0 && y === 0
                  ? "32px 0 0 0"
                  : x === 7 && y === 0
                  ? "0 32px 0 0"
                  : x === 0 && y === 7
                  ? "0 0 0 32px"
                  : x === 7 && y === 7
                  ? "0 0 32px 0"
                  : 0,
              background:
                (x % 2 !== 0 && y % 2 === 0) || (x % 2 === 0 && y % 2 !== 0)
                  ? "rgba(0, 0, 0, 1)"
                  : "rgba(255, 255, 255, 1)",
            };
          }),
        };
      }).concat(Object.values(piecesStates).map((piece) => ({
        type: "Image",
        id: piece.id,
        position: "absolute",
        left: `calc(${piece.position.x} * 12.5%)`,
        top: `calc(${piece.position.y} * 12.5% - 2%)`,
        width: "12.5%",
        height: "10%",
        src: piece.icon.url,
      }))),
    },
  ],
};

module.exports = {
  weatherHumidityUpdate: weatherHumidityUpdate,
  weatherTempUpdate: weatherTempUpdate,
  clockTypeMemory: clockTypeMemory,
  timeHourMirror: timeHourMirror,
  timeMinMirror: timeMinMirror,
  timeSecMirror: timeSecMirror,
  chessWidgetInitGui: chessWidgetInitGui,
  piecesStates: piecesStates
};
