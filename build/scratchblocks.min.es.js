function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var commands = [{
  id: "MOTION_MOVESTEPS",
  selector: "forward:",
  spec: "move %1 steps",
  inputs: ["%n"],
  shape: "stack",
  category: "motion"
}, {
  id: "MOTION_TURNRIGHT",
  selector: "turnRight:",
  spec: "turn @turnRight %1 degrees",
  inputs: ["%n"],
  shape: "stack",
  category: "motion"
}, {
  id: "MOTION_TURNLEFT",
  selector: "turnLeft:",
  spec: "turn @turnLeft %1 degrees",
  inputs: ["%n"],
  shape: "stack",
  category: "motion"
}, {
  id: "MOTION_POINTINDIRECTION",
  selector: "heading:",
  spec: "point in direction %1",
  inputs: ["%d.direction"],
  shape: "stack",
  category: "motion"
}, {
  id: "MOTION_POINTTOWARDS",
  selector: "pointTowards:",
  spec: "point towards %1",
  inputs: ["%m.spriteOrMouse"],
  shape: "stack",
  category: "motion"
}, {
  id: "MOTION_GOTOXY",
  selector: "gotoX:y:",
  spec: "go to x:%1 y:%2",
  inputs: ["%n", "%n"],
  shape: "stack",
  category: "motion"
}, {
  id: "MOTION_GOTO",
  selector: "gotoSpriteOrMouse:",
  spec: "go to %1",
  inputs: ["%m.location"],
  shape: "stack",
  category: "motion"
}, {
  id: "MOTION_GLIDESECSTOXY",
  selector: "glideSecs:toX:y:elapsed:from:",
  spec: "glide %1 secs to x:%2 y:%3",
  inputs: ["%n", "%n", "%n"],
  shape: "stack",
  category: "motion"
}, {
  id: "MOTION_GLIDETO",
  spec: "glide %1 secs to %2",
  inputs: ["%n", "%m.location"],
  shape: "stack",
  category: "motion"
}, {
  id: "MOTION_CHANGEXBY",
  selector: "changeXposBy:",
  spec: "change x by %1",
  inputs: ["%n"],
  shape: "stack",
  category: "motion"
}, {
  id: "MOTION_SETX",
  selector: "xpos:",
  spec: "set x to %1",
  inputs: ["%n"],
  shape: "stack",
  category: "motion"
}, {
  id: "MOTION_CHANGEYBY",
  selector: "changeYposBy:",
  spec: "change y by %1",
  inputs: ["%n"],
  shape: "stack",
  category: "motion"
}, {
  id: "MOTION_SETY",
  selector: "ypos:",
  spec: "set y to %1",
  inputs: ["%n"],
  shape: "stack",
  category: "motion"
}, {
  id: "MOTION_SETROTATIONSTYLE",
  selector: "setRotationStyle",
  spec: "set rotation style %1",
  inputs: ["%m.rotationStyle"],
  shape: "stack",
  category: "motion"
}, {
  id: "LOOKS_SAYFORSECS",
  selector: "say:duration:elapsed:from:",
  spec: "say %1 for %2 seconds",
  inputs: ["%s", "%n"],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_SAY",
  selector: "say:",
  spec: "say %1",
  inputs: ["%s"],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_THINKFORSECS",
  selector: "think:duration:elapsed:from:",
  spec: "think %1 for %2 seconds",
  inputs: ["%s", "%n"],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_THINK",
  selector: "think:",
  spec: "think %1",
  inputs: ["%s"],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_SHOW",
  selector: "show",
  spec: "show",
  inputs: [],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_HIDE",
  selector: "hide",
  spec: "hide",
  inputs: [],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_SWITCHCOSTUMETO",
  selector: "lookLike:",
  spec: "switch costume to %1",
  inputs: ["%m.costume"],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_NEXTCOSTUME",
  selector: "nextCostume",
  spec: "next costume",
  inputs: [],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_NEXTBACKDROP_BLOCK",
  selector: "nextScene",
  spec: "next backdrop",
  inputs: [],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_SWITCHBACKDROPTO",
  selector: "startScene",
  spec: "switch backdrop to %1",
  inputs: ["%m.backdrop"],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_SWITCHBACKDROPTOANDWAIT",
  selector: "startSceneAndWait",
  spec: "switch backdrop to %1 and wait",
  inputs: ["%m.backdrop"],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_CHANGEEFFECTBY",
  selector: "changeGraphicEffect:by:",
  spec: "change %1 effect by %2",
  inputs: ["%m.effect", "%n"],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_SETEFFECTTO",
  selector: "setGraphicEffect:to:",
  spec: "set %1 effect to %2",
  inputs: ["%m.effect", "%n"],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_CLEARGRAPHICEFFECTS",
  selector: "filterReset",
  spec: "clear graphic effects",
  inputs: [],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_CHANGESIZEBY",
  selector: "changeSizeBy:",
  spec: "change size by %1",
  inputs: ["%n"],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_SETSIZETO",
  selector: "setSizeTo:",
  spec: "set size to %1%",
  inputs: ["%n"],
  shape: "stack",
  category: "looks"
}, {
  selector: "comeToFront",
  spec: "go to front",
  inputs: [],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_GOTOFRONTBACK",
  spec: "go to %1 layer",
  inputs: ["%m"],
  shape: "stack",
  category: "looks"
}, {
  selector: "goBackByLayers:",
  spec: "go back %1 layers",
  inputs: ["%n"],
  shape: "stack",
  category: "looks"
}, {
  id: "LOOKS_GOFORWARDBACKWARDLAYERS",
  spec: "go %1 %2 layers",
  inputs: ["%m", "%n"],
  shape: "stack",
  category: "looks"
}, {
  id: "SOUND_PLAY",
  selector: "playSound:",
  spec: "start sound %1",
  inputs: ["%m.sound"],
  shape: "stack",
  category: "sound"
}, {
  id: "SOUND_CHANGEEFFECTBY",
  spec: "change %1 effect by %2",
  inputs: ["%m", "%n"],
  shape: "stack",
  category: "sound"
}, {
  id: "SOUND_SETEFFECTO",
  // sic
  spec: "set %1 effect to %2",
  inputs: ["%m", "%n"],
  shape: "stack",
  category: "sound"
}, {
  id: "SOUND_CLEAREFFECTS",
  spec: "clear sound effects",
  inputs: [],
  shape: "stack",
  category: "sound"
}, {
  id: "SOUND_PLAYUNTILDONE",
  selector: "doPlaySoundAndWait",
  spec: "play sound %1 until done",
  inputs: ["%m.sound"],
  shape: "stack",
  category: "sound"
}, {
  id: "SOUND_STOPALLSOUNDS",
  selector: "stopAllSounds",
  spec: "stop all sounds",
  inputs: [],
  shape: "stack",
  category: "sound"
}, {
  id: "music.playDrumForBeats",
  selector: "playDrum",
  spec: "play drum %1 for %2 beats",
  inputs: ["%d.drum", "%n"],
  shape: "stack",
  category: "music"
}, {
  id: "music.restForBeats",
  selector: "rest:elapsed:from:",
  spec: "rest for %1 beats",
  inputs: ["%n"],
  shape: "stack",
  category: "music"
}, {
  id: "music.playNoteForBeats",
  selector: "noteOn:duration:elapsed:from:",
  spec: "play note %1 for %2 beats",
  inputs: ["%d.note", "%n"],
  shape: "stack",
  category: "music"
}, {
  id: "music.setInstrument",
  selector: "instrument:",
  spec: "set instrument to %1",
  inputs: ["%d.instrument"],
  shape: "stack",
  category: "music"
}, {
  id: "SOUND_CHANGEVOLUMEBY",
  selector: "changeVolumeBy:",
  spec: "change volume by %1",
  inputs: ["%n"],
  shape: "stack",
  category: "sound"
}, {
  id: "SOUND_SETVOLUMETO",
  selector: "setVolumeTo:",
  spec: "set volume to %1%",
  inputs: ["%n"],
  shape: "stack",
  category: "sound"
}, {
  id: "music.changeTempo",
  selector: "changeTempoBy:",
  spec: "change tempo by %1",
  inputs: ["%n"],
  shape: "stack",
  category: "music"
}, {
  selector: "setTempoTo:",
  spec: "set tempo to %1 bpm",
  inputs: ["%n"],
  shape: "stack",
  category: "sound"
}, {
  id: "music.setTempo",
  selector: "setTempoTo:",
  spec: "set tempo to %1",
  inputs: ["%n"],
  shape: "stack",
  category: "music"
}, {
  id: "pen.clear",
  selector: "clearPenTrails",
  spec: "erase all",
  inputs: [],
  shape: "stack",
  category: "pen"
}, {
  id: "pen.stamp",
  selector: "stampCostume",
  spec: "stamp",
  inputs: [],
  shape: "stack",
  category: "pen"
}, {
  id: "pen.penDown",
  selector: "putPenDown",
  spec: "pen down",
  inputs: [],
  shape: "stack",
  category: "pen"
}, {
  id: "pen.penUp",
  selector: "putPenUp",
  spec: "pen up",
  inputs: [],
  shape: "stack",
  category: "pen"
}, {
  id: "pen.setColor",
  selector: "penColor:",
  spec: "set pen color to %1",
  inputs: ["%c"],
  shape: "stack",
  category: "pen"
}, {
  id: "pen.changeHue",
  selector: "changePenHueBy:",
  spec: "change pen color by %1",
  inputs: ["%n"],
  shape: "stack",
  category: "pen"
}, {
  id: "pen.setColorParam",
  spec: "set pen %1 to %2",
  inputs: ["%m.color", "%c"],
  shape: "stack",
  category: "pen"
}, {
  id: "pen.changeColorParam",
  spec: "change pen %1 by %2",
  inputs: ["%m.color", "%n"],
  shape: "stack",
  category: "pen"
}, {
  id: "pen.setHue",
  selector: "setPenHueTo:",
  spec: "set pen color to %1",
  inputs: ["%n"],
  shape: "stack",
  category: "pen"
}, {
  id: "pen.changeShade",
  selector: "changePenShadeBy:",
  spec: "change pen shade by %1",
  inputs: ["%n"],
  shape: "stack",
  category: "pen"
}, {
  id: "pen.setShade",
  selector: "setPenShadeTo:",
  spec: "set pen shade to %1",
  inputs: ["%n"],
  shape: "stack",
  category: "pen"
}, {
  id: "pen.changeSize",
  selector: "changePenSizeBy:",
  spec: "change pen size by %1",
  inputs: ["%n"],
  shape: "stack",
  category: "pen"
}, {
  id: "pen.setSize",
  selector: "penSize:",
  spec: "set pen size to %1",
  inputs: ["%n"],
  shape: "stack",
  category: "pen"
}, {
  id: "EVENT_WHENFLAGCLICKED",
  selector: "whenGreenFlag",
  spec: "when @greenFlag clicked",
  inputs: [],
  shape: "hat",
  category: "events"
}, {
  id: "EVENT_WHENKEYPRESSED",
  selector: "whenKeyPressed",
  spec: "when %1 key pressed",
  inputs: ["%m.key"],
  shape: "hat",
  category: "events"
}, {
  id: "EVENT_WHENTHISSPRITECLICKED",
  selector: "whenClicked",
  spec: "when this sprite clicked",
  inputs: [],
  shape: "hat",
  category: "events"
}, {
  id: "EVENT_WHENSTAGECLICKED",
  spec: "when stage clicked",
  inputs: [],
  shape: "hat",
  category: "events"
}, {
  id: "EVENT_WHENBACKDROPSWITCHESTO",
  selector: "whenSceneStarts",
  spec: "when backdrop switches to %1",
  inputs: ["%m.backdrop"],
  shape: "hat",
  category: "events"
}, {
  id: "EVENT_WHENGREATERTHAN",
  selector: "whenSensorGreaterThan",
  spec: "when %1 > %2",
  inputs: ["%m.triggerSensor", "%n"],
  shape: "hat",
  category: "events"
}, {
  id: "EVENT_WHENBROADCASTRECEIVED",
  selector: "whenIReceive",
  spec: "when I receive %1",
  inputs: ["%m.broadcast"],
  shape: "hat",
  category: "events"
}, {
  id: "EVENT_BROADCAST",
  selector: "broadcast:",
  spec: "broadcast %1",
  inputs: ["%m.broadcast"],
  shape: "stack",
  category: "events"
}, {
  id: "EVENT_BROADCASTANDWAIT",
  selector: "doBroadcastAndWait",
  spec: "broadcast %1 and wait",
  inputs: ["%m.broadcast"],
  shape: "stack",
  category: "events"
}, {
  id: "CONTROL_WAIT",
  selector: "wait:elapsed:from:",
  spec: "wait %1 seconds",
  inputs: ["%n"],
  shape: "stack",
  category: "control"
}, {
  id: "CONTROL_REPEAT",
  selector: "doRepeat",
  spec: "repeat %1",
  inputs: ["%n"],
  shape: "c-block",
  category: "control",
  hasLoopArrow: true
}, {
  id: "CONTROL_FOREVER",
  selector: "doForever",
  spec: "forever",
  inputs: [],
  shape: "c-block cap",
  category: "control",
  hasLoopArrow: true
}, {
  id: "CONTROL_IF",
  selector: "doIf",
  spec: "if %1 then",
  inputs: ["%b"],
  shape: "c-block",
  category: "control"
}, {
  id: "CONTROL_WAITUNTIL",
  selector: "doWaitUntil",
  spec: "wait until %1",
  inputs: ["%b"],
  shape: "stack",
  category: "control"
}, {
  id: "CONTROL_REPEATUNTIL",
  selector: "doUntil",
  spec: "repeat until %1",
  inputs: ["%b"],
  shape: "c-block",
  category: "control",
  hasLoopArrow: true
}, {
  id: "CONTROL_STOP",
  selector: "stopScripts",
  spec: "stop %1",
  inputs: ["%m.stop"],
  shape: "cap",
  category: "control"
}, {
  id: "CONTROL_STARTASCLONE",
  selector: "whenCloned",
  spec: "when I start as a clone",
  inputs: [],
  shape: "hat",
  category: "control"
}, {
  id: "CONTROL_CREATECLONEOF",
  selector: "createCloneOf",
  spec: "create clone of %1",
  inputs: ["%m.spriteOnly"],
  shape: "stack",
  category: "control"
}, {
  id: "CONTROL_DELETETHISCLONE",
  selector: "deleteClone",
  spec: "delete this clone",
  inputs: [],
  shape: "cap",
  category: "control"
}, {
  id: "SENSING_ASKANDWAIT",
  selector: "doAsk",
  spec: "ask %1 and wait",
  inputs: ["%s"],
  shape: "stack",
  category: "sensing"
}, {
  id: "videoSensing.videoToggle",
  selector: "setVideoState",
  spec: "turn video %1",
  inputs: ["%m.videoState"],
  shape: "stack",
  category: "video"
}, {
  id: "videoSensing.setVideoTransparency",
  selector: "setVideoTransparency",
  spec: "set video transparency to %1%",
  inputs: ["%n"],
  shape: "stack",
  category: "video"
}, {
  id: "videoSensing.whenMotionGreaterThan",
  spec: "when video motion > %1",
  inputs: ["%n"],
  shape: "hat",
  category: "video"
}, {
  id: "SENSING_RESETTIMER",
  selector: "timerReset",
  spec: "reset timer",
  inputs: [],
  shape: "stack",
  category: "sensing"
}, {
  id: "DATA_SETVARIABLETO",
  selector: "setVar:to:",
  spec: "set %1 to %2",
  inputs: ["%m.var", "%s"],
  shape: "stack",
  category: "variables"
}, {
  id: "DATA_CHANGEVARIABLEBY",
  selector: "changeVar:by:",
  spec: "change %1 by %2",
  inputs: ["%m.var", "%n"],
  shape: "stack",
  category: "variables"
}, {
  id: "DATA_SHOWVARIABLE",
  selector: "showVariable:",
  spec: "show variable %1",
  inputs: ["%m.var"],
  shape: "stack",
  category: "variables"
}, {
  id: "DATA_HIDEVARIABLE",
  selector: "hideVariable:",
  spec: "hide variable %1",
  inputs: ["%m.var"],
  shape: "stack",
  category: "variables"
}, {
  id: "DATA_ADDTOLIST",
  selector: "append:toList:",
  spec: "add %1 to %2",
  inputs: ["%s", "%m.list"],
  shape: "stack",
  category: "list"
}, {
  id: "DATA_DELETEOFLIST",
  selector: "deleteLine:ofList:",
  spec: "delete %1 of %2",
  inputs: ["%d.listDeleteItem", "%m.list"],
  shape: "stack",
  category: "list"
}, {
  id: "DATA_DELETEALLOFLIST",
  spec: "delete all of %1",
  inputs: ["%m.list"],
  shape: "stack",
  category: "list"
}, {
  id: "MOTION_IFONEDGEBOUNCE",
  selector: "bounceOffEdge",
  spec: "if on edge, bounce",
  inputs: [],
  shape: "stack",
  category: "motion"
}, {
  id: "DATA_INSERTATLIST",
  selector: "insert:at:ofList:",
  spec: "insert %1 at %2 of %3",
  inputs: ["%s", "%d.listItem", "%m.list"],
  shape: "stack",
  category: "list"
}, {
  id: "DATA_REPLACEITEMOFLIST",
  selector: "setLine:ofList:to:",
  spec: "replace item %1 of %2 with %3",
  inputs: ["%d.listItem", "%m.list", "%s"],
  shape: "stack",
  category: "list"
}, {
  id: "DATA_SHOWLIST",
  selector: "showList:",
  spec: "show list %1",
  inputs: ["%m.list"],
  shape: "stack",
  category: "list"
}, {
  id: "DATA_HIDELIST",
  selector: "hideList:",
  spec: "hide list %1",
  inputs: ["%m.list"],
  shape: "stack",
  category: "list"
}, {
  id: "SENSING_OF_XPOSITION",
  selector: "xpos",
  spec: "x position",
  inputs: [],
  shape: "reporter",
  category: "motion"
}, {
  id: "SENSING_OF_YPOSITION",
  selector: "ypos",
  spec: "y position",
  inputs: [],
  shape: "reporter",
  category: "motion"
}, {
  id: "SENSING_OF_DIRECTION",
  selector: "heading",
  spec: "direction",
  inputs: [],
  shape: "reporter",
  category: "motion"
}, {
  id: "SENSING_OF_COSTUMENUMBER",
  selector: "costumeIndex",
  spec: "costume #",
  inputs: [],
  shape: "reporter",
  category: "looks"
}, {
  id: "LOOKS_COSTUMENUMBERNAME",
  selector: "LOOKS_COSTUMENUMBERNAME",
  spec: "costume %1",
  inputs: ["%m"],
  shape: "reporter",
  category: "looks"
}, {
  id: "SENSING_OF_SIZE",
  selector: "scale",
  spec: "size",
  inputs: [],
  shape: "reporter",
  category: "looks"
}, {
  id: "SENSING_OF_BACKDROPNAME",
  selector: "sceneName",
  spec: "backdrop name",
  inputs: [],
  shape: "reporter",
  category: "looks"
}, {
  id: "LOOKS_BACKDROPNUMBERNAME",
  spec: "backdrop %1",
  inputs: ["%m"],
  shape: "reporter",
  category: "looks"
}, {
  id: "SENSING_OF_BACKDROPNUMBER",
  selector: "backgroundIndex",
  spec: "backdrop #",
  inputs: [],
  shape: "reporter",
  category: "looks"
}, {
  id: "SOUND_VOLUME",
  selector: "volume",
  spec: "volume",
  inputs: [],
  shape: "reporter",
  category: "sound"
}, {
  id: "music.getTempo",
  selector: "tempo",
  spec: "tempo",
  inputs: [],
  shape: "reporter",
  category: "music"
}, {
  id: "SENSING_TOUCHINGOBJECT",
  selector: "touching:",
  spec: "touching %1?",
  inputs: ["%m.touching"],
  shape: "boolean",
  category: "sensing"
}, {
  id: "SENSING_TOUCHINGCOLOR",
  selector: "touchingColor:",
  spec: "touching color %1?",
  inputs: ["%c"],
  shape: "boolean",
  category: "sensing"
}, {
  id: "SENSING_COLORISTOUCHINGCOLOR",
  selector: "color:sees:",
  spec: "color %1 is touching %2?",
  inputs: ["%c", "%c"],
  shape: "boolean",
  category: "sensing"
}, {
  id: "SENSING_DISTANCETO",
  selector: "distanceTo:",
  spec: "distance to %1",
  inputs: ["%m.spriteOrMouse"],
  shape: "reporter",
  category: "sensing"
}, {
  id: "SENSING_ANSWER",
  selector: "answer",
  spec: "answer",
  inputs: [],
  shape: "reporter",
  category: "sensing"
}, {
  id: "SENSING_KEYPRESSED",
  selector: "keyPressed:",
  spec: "key %1 pressed?",
  inputs: ["%m.key"],
  shape: "boolean",
  category: "sensing"
}, {
  id: "SENSING_MOUSEDOWN",
  selector: "mousePressed",
  spec: "mouse down?",
  inputs: [],
  shape: "boolean",
  category: "sensing"
}, {
  id: "SENSING_MOUSEX",
  selector: "mouseX",
  spec: "mouse x",
  inputs: [],
  shape: "reporter",
  category: "sensing"
}, {
  id: "SENSING_MOUSEY",
  selector: "mouseY",
  spec: "mouse y",
  inputs: [],
  shape: "reporter",
  category: "sensing"
}, {
  id: "SENSING_SETDRAGMODE",
  spec: "set drag mode %1",
  inputs: ["%m"],
  shape: "stack",
  category: "sensing"
}, {
  id: "SENSING_LOUDNESS",
  selector: "soundLevel",
  spec: "loudness",
  inputs: [],
  shape: "reporter",
  category: "sensing"
}, {
  id: "videoSensing.videoOn",
  selector: "senseVideoMotion",
  spec: "video %1 on %2",
  inputs: ["%m.videoMotionType", "%m.stageOrThis"],
  shape: "reporter",
  category: "video"
}, {
  id: "SENSING_TIMER",
  selector: "timer",
  spec: "timer",
  inputs: [],
  shape: "reporter",
  category: "sensing"
}, {
  id: "SENSING_OF",
  selector: "getAttribute:of:",
  spec: "%1 of %2",
  inputs: ["%m.attribute", "%m.spriteOrStage"],
  shape: "reporter",
  category: "sensing"
}, {
  id: "SENSING_CURRENT",
  selector: "timeAndDate",
  spec: "current %1",
  inputs: ["%m.timeAndDate"],
  shape: "reporter",
  category: "sensing"
}, {
  id: "SENSING_DAYSSINCE2000",
  selector: "timestamp",
  spec: "days since 2000",
  inputs: [],
  shape: "reporter",
  category: "sensing"
}, {
  id: "SENSING_USERNAME",
  selector: "getUserName",
  spec: "username",
  inputs: [],
  shape: "reporter",
  category: "sensing"
}, {
  id: "OPERATORS_ADD",
  selector: "+",
  spec: "%1 + %2",
  inputs: ["%n", "%n"],
  shape: "reporter",
  category: "operators"
}, {
  id: "OPERATORS_SUBTRACT",
  selector: "-",
  spec: "%1 - %2",
  inputs: ["%n", "%n"],
  shape: "reporter",
  category: "operators"
}, {
  id: "OPERATORS_MULTIPLY",
  selector: "*",
  spec: "%1 * %2",
  inputs: ["%n", "%n"],
  shape: "reporter",
  category: "operators"
}, {
  id: "OPERATORS_DIVIDE",
  selector: "/",
  spec: "%1 / %2",
  inputs: ["%n", "%n"],
  shape: "reporter",
  category: "operators"
}, {
  id: "OPERATORS_RANDOM",
  selector: "randomFrom:to:",
  spec: "pick random %1 to %2",
  inputs: ["%n", "%n"],
  shape: "reporter",
  category: "operators"
}, {
  id: "OPERATORS_LT",
  selector: "<",
  spec: "%1 < %2",
  inputs: ["%s", "%s"],
  shape: "boolean",
  category: "operators"
}, {
  id: "OPERATORS_EQUALS",
  selector: "=",
  spec: "%1 = %2",
  inputs: ["%s", "%s"],
  shape: "boolean",
  category: "operators"
}, {
  id: "OPERATORS_GT",
  selector: ">",
  spec: "%1 > %2",
  inputs: ["%s", "%s"],
  shape: "boolean",
  category: "operators"
}, {
  id: "OPERATORS_AND",
  selector: "&",
  spec: "%1 and %2",
  inputs: ["%b", "%b"],
  shape: "boolean",
  category: "operators"
}, {
  id: "OPERATORS_OR",
  selector: "|",
  spec: "%1 or %2",
  inputs: ["%b", "%b"],
  shape: "boolean",
  category: "operators"
}, {
  id: "OPERATORS_NOT",
  selector: "not",
  spec: "not %1",
  inputs: ["%b"],
  shape: "boolean",
  category: "operators"
}, {
  id: "OPERATORS_JOIN",
  selector: "concatenate:with:",
  spec: "join %1 %2",
  inputs: ["%s", "%s"],
  shape: "reporter",
  category: "operators"
}, {
  id: "OPERATORS_LETTEROF",
  selector: "letter:of:",
  spec: "letter %1 of %2",
  inputs: ["%n", "%s"],
  shape: "reporter",
  category: "operators"
}, {
  id: "OPERATORS_LENGTH",
  selector: "stringLength:",
  spec: "length of %1",
  inputs: ["%s"],
  shape: "reporter",
  category: "operators"
}, {
  id: "OPERATORS_MOD",
  selector: "%",
  spec: "%1 mod %2",
  inputs: ["%n", "%n"],
  shape: "reporter",
  category: "operators"
}, {
  id: "OPERATORS_ROUND",
  selector: "rounded",
  spec: "round %1",
  inputs: ["%n"],
  shape: "reporter",
  category: "operators"
}, {
  id: "OPERATORS_MATHOP",
  selector: "computeFunction:of:",
  spec: "%1 of %2",
  inputs: ["%m.mathOp", "%n"],
  shape: "reporter",
  category: "operators"
}, {
  id: "OPERATORS_CONTAINS",
  spec: "%1 contains %2?",
  inputs: ["%s", "%s"],
  shape: "boolean",
  category: "operators"
}, {
  id: "DATA_ITEMOFLIST",
  selector: "getLine:ofList:",
  spec: "item %1 of %2",
  inputs: ["%d.listItem", "%m.list"],
  shape: "reporter",
  category: "list"
}, {
  id: "DATA_ITEMNUMOFLIST",
  spec: "item # of %1 in %2",
  inputs: ["%s", "%m.list"],
  shape: "reporter",
  category: "list"
}, {
  id: "DATA_LENGTHOFLIST",
  selector: "lineCountOfList:",
  spec: "length of %1",
  inputs: ["%m.list"],
  shape: "reporter",
  category: "list"
}, {
  id: "DATA_LISTCONTAINSITEM",
  selector: "list:contains:",
  spec: "%1 contains %2?",
  inputs: ["%m.list", "%s"],
  shape: "boolean",
  category: "list"
}, {
  id: "wedo2.motorOn",
  spec: "turn %1 on",
  inputs: ["%m.motor"],
  shape: "stack",
  category: "extension"
}, {
  id: "wedo2.motorOff",
  spec: "turn %1 off",
  inputs: ["%m.motor"],
  shape: "stack",
  category: "extension"
}, {
  id: "wedo2.startMotorPower",
  spec: "set %1 power to %2",
  inputs: ["%m.motor", "%n"],
  shape: "stack",
  category: "extension"
}, {
  id: "wedo2.setMotorDirection",
  spec: "set %1 direction to %2",
  inputs: ["%m.motor2", "%m.motorDirection"],
  shape: "stack",
  category: "extension"
}, {
  id: "wedo2.whenDistance",
  spec: "when distance %1 %2",
  inputs: ["%m.lessMore", "%n"],
  shape: "hat",
  category: "extension"
}, {
  id: "wedo2.getDistance",
  spec: "distance",
  inputs: [],
  shape: "reporter",
  category: "extension"
}, {
  id: "wedo2.motorOnFor",
  spec: "turn %1 on for %2 seconds",
  inputs: ["%m.motor", "%n"],
  shape: "stack",
  category: "extension"
}, {
  id: "wedo2.setLightHue",
  spec: "set light color to %1",
  inputs: ["%n"],
  shape: "stack",
  category: "extension"
}, {
  id: "wedo2.playNoteFor",
  spec: "play note %1 for %2 seconds",
  inputs: ["%n", "%n"],
  shape: "stack",
  category: "extension"
}, {
  id: "wedo2.whenTilted",
  spec: "when tilted %1",
  inputs: ["%m.xxx"],
  shape: "hat",
  category: "extension"
}, {
  id: "wedo2.getTiltAngle",
  spec: "tilt angle %1",
  inputs: ["%m.xxx"],
  shape: "reporter",
  category: "extension"
}, {
  id: "CONTROL_ELSE",
  spec: "else",
  inputs: [],
  shape: "celse",
  category: "control"
}, {
  id: "scratchblocks:end",
  spec: "end",
  inputs: [],
  shape: "cend",
  category: "control"
}, {
  id: "scratchblocks:ellipsis",
  spec: ". . .",
  inputs: [],
  shape: "stack",
  category: "grey"
}, {
  id: "scratchblocks:addInput",
  spec: "%1 @addInput",
  inputs: ["%n"],
  shape: "ring",
  category: "grey"
}, {
  id: "SENSING_USERID",
  spec: "user id",
  inputs: [],
  shape: "reporter",
  category: "obsolete"
}, {
  selector: "doIf",
  spec: "if %1",
  inputs: ["%b"],
  shape: "c-block",
  category: "obsolete"
}, {
  selector: "doForeverIf",
  spec: "forever if %1",
  inputs: ["%b"],
  shape: "c-block cap",
  category: "obsolete"
}, {
  selector: "doReturn",
  spec: "stop script",
  inputs: [],
  shape: "cap",
  category: "obsolete"
}, {
  selector: "stopAll",
  spec: "stop all",
  inputs: [],
  shape: "cap",
  category: "obsolete"
}, {
  selector: "lookLike:",
  spec: "switch to costume %1",
  inputs: ["%m.costume"],
  shape: "stack",
  category: "obsolete"
}, {
  selector: "nextScene",
  spec: "next background",
  inputs: [],
  shape: "stack",
  category: "obsolete"
}, {
  selector: "startScene",
  spec: "switch to background %1",
  inputs: ["%m.backdrop"],
  shape: "stack",
  category: "obsolete"
}, {
  selector: "backgroundIndex",
  spec: "background #",
  inputs: [],
  shape: "reporter",
  category: "obsolete"
}, {
  id: "SENSING_LOUD",
  selector: "isLoud",
  spec: "loud?",
  inputs: [],
  shape: "boolean",
  category: "obsolete"
} // TODO define
];

var overrideCategories = ["motion", "looks", "sound", "pen", "variables", "list", "events", "control", "sensing", "operators", "custom", "custom-arg", "extension", "grey", "obsolete", "music", "video", "tts", "translate", "wedo", "ev3", "microbit", "makeymakey"];
var overrideShapes = ["hat", "cap", "stack", "boolean", "reporter", "ring", "cat"]; // languages that should be displayed right to left

var rtlLanguages = ["ar", "ckb", "fa", "he"]; // List of commands taken from Scratch

var inputNumberPat = /\%([0-9]+)/;
var inputPat = /(%[a-zA-Z0-9](?:\.[a-zA-Z0-9]+)?)/;
var inputPatGlobal = new RegExp(inputPat.source, "g");
var iconPat = /(@[a-zA-Z]+)/;
var splitPat = new RegExp([inputPat.source, "|", iconPat.source, "| +"].join(""), "g");
var hexColorPat = /^#(?:[0-9a-fA-F]{3}){1,2}?$/;

function parseInputNumber(part) {
  var m = inputNumberPat.exec(part);
  return m ? +m[1] : 0;
} // used for procDefs


function parseSpec(spec) {
  var parts = spec.split(splitPat).filter(function (x) {
    return !!x;
  });
  var inputs = parts.filter(function (p) {
    return inputPat.test(p);
  });
  return {
    spec: spec,
    parts: parts,
    inputs: inputs,
    hash: hashSpec(spec)
  };
}

function hashSpec(spec) {
  return minifyHash(spec.replace(inputPatGlobal, " _ "));
}

function minifyHash(hash) {
  return hash.replace(/_/g, " _ ").replace(/ +/g, " ").replace(/[,%?:]/g, "").replace(/ß/g, "ss").replace(/ä/g, "a").replace(/ö/g, "o").replace(/ü/g, "u").replace(". . .", "...").replace(/^…$/, "...").trim().toLowerCase();
}

var blocksById = {};
var blocksBySpec = {};
var allBlocks = commands.map(function (def) {
  var spec = def.spec;

  if (!def.id) {
    if (!def.selector) throw new Error("Missing ID: " + def.spec);
    def.id = "sb2:" + def.selector;
  }

  if (!def.spec) throw new Error("Missing spec: " + def.id);
  var info = {
    id: def.id,
    // Used for Scratch 3 translations
    spec: def.spec,
    // Used for Scratch 2 translations
    parts: def.spec.split(splitPat).filter(function (x) {
      return !!x;
    }),
    selector: def.selector || "sb3:" + def.id,
    // Used for JSON marshalling
    inputs: def.inputs,
    shape: def.shape,
    category: def.category,
    hasLoopArrow: !!def.hasLoopArrow
  };

  if (blocksById[info.id]) {
    throw new Error("Duplicate ID: " + info.id);
  }

  blocksById[info.id] = info;
  return blocksBySpec[spec] = info;
});
var unicodeIcons = {
  "@greenFlag": "⚑",
  "@turnRight": "↻",
  "@turnLeft": "↺",
  "@addInput": "▸",
  "@delInput": "◂"
};
var allLanguages = {};

function loadLanguage(code, language) {
  var blocksByHash = language.blocksByHash = {};
  Object.keys(language.commands).forEach(function (spec) {
    var nativeSpec = language.commands[spec];
    var block = blocksBySpec[spec];
    var nativeHash = hashSpec(nativeSpec);
    blocksByHash[nativeHash] = block; // fallback image replacement, for languages without aliases

    var m = iconPat.exec(spec);

    if (m) {
      var image = m[0];
      var hash = nativeHash.replace(hashSpec(image), unicodeIcons[image]);
      blocksByHash[hash] = block;
    }
  });
  language.nativeAliases = {};
  Object.keys(language.aliases).forEach(function (alias) {
    var spec = language.aliases[alias];
    var block = blocksBySpec[spec];

    if (block === undefined) {
      throw new Error("Invalid alias '" + spec + "'");
    }

    var aliasHash = hashSpec(alias);
    blocksByHash[aliasHash] = block;
    language.nativeAliases[spec] = alias;
  }); // Some English blocks were renamed between Scratch 2 and Scratch 3. Wire them
  // into language.blocksByHash

  Object.keys(language.renamedBlocks || {}).forEach(function (alt) {
    var id = language.renamedBlocks[alt];
    if (!blocksById[id]) throw new Error("Unknown ID: " + id);
    var block = blocksById[id];
    var hash = hashSpec(alt);
    english.blocksByHash[hash] = block;
  });
  language.nativeDropdowns = {};
  Object.keys(language.dropdowns).forEach(function (name) {
    var nativeName = language.dropdowns[name];
    language.nativeDropdowns[nativeName] = name;
  });
  language.code = code;
  allLanguages[code] = language;
}

function loadLanguages(languages) {
  Object.keys(languages).forEach(function (code) {
    loadLanguage(code, languages[code]);
  });
}

var english = {
  aliases: {
    "turn left %1 degrees": "turn @turnLeft %1 degrees",
    "turn ccw %1 degrees": "turn @turnLeft %1 degrees",
    "turn right %1 degrees": "turn @turnRight %1 degrees",
    "turn cw %1 degrees": "turn @turnRight %1 degrees",
    "when gf clicked": "when @greenFlag clicked",
    "when flag clicked": "when @greenFlag clicked",
    "when green flag clicked": "when @greenFlag clicked"
  },
  renamedBlocks: {
    "say %1 for %2 secs": "LOOKS_SAYFORSECS",
    "think %1 for %2 secs": "LOOKS_THINKFORSECS",
    "play sound %1": "SOUND_PLAY",
    "wait %1 secs": "CONTROL_WAIT",
    clear: "pen.clear"
  },
  definePrefix: ["define"],
  defineSuffix: [],
  // For ignoring the lt sign in the "when distance < _" block
  ignorelt: ["when distance"],
  // Valid arguments to "of" dropdown, for resolving ambiguous situations
  math: ["abs", "floor", "ceiling", "sqrt", "sin", "cos", "tan", "asin", "acos", "atan", "ln", "log", "e ^", "10 ^"],
  // Valid arguments to "sound effect" dropdown, for resolving ambiguous situations
  soundEffects: ["pitch", "pan left/right"],
  // For detecting the "stop" cap / stack block
  osis: ["other scripts in sprite", "other scripts in stage"],
  dropdowns: {},
  commands: {}
};
allBlocks.forEach(function (info) {
  english.commands[info.spec] = info.spec;
});
loadLanguages({
  en: english
});
/*****************************************************************************/

function specialCase(id, func) {
  if (!blocksById[id]) throw new Error("Unknown ID: " + id);
  blocksById[id].specialCase = func;
}

function disambig(id1, id2, test) {
  var func = function func(info, children, lang) {
    return blocksById[test(children, lang) ? id1 : id2];
  };

  specialCase(id1, func);
  specialCase(id2, func);
}

disambig("OPERATORS_MATHOP", "SENSING_OF", function (children, lang) {
  // Operators if math function, otherwise sensing "attribute of" block
  var first = children[0];
  if (!first.isInput) return;
  var name = first.value;
  return lang.math.indexOf(name) > -1;
});
disambig("SOUND_CHANGEEFFECTBY", "LOOKS_CHANGEEFFECTBY", function (children, lang) {
  // Sound if sound effect, otherwise default to graphic effect
  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (child.shape === "dropdown") {
      var name = child.value;

      var _iterator = _createForOfIteratorHelper(lang.soundEffects),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var effect = _step.value;

          if (minifyHash(effect) === minifyHash(name)) {
            return true;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }

  return false;
});
disambig("SOUND_SETEFFECTO", "LOOKS_SETEFFECTTO", function (children, lang) {
  // Sound if sound effect, otherwise default to graphic effect
  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (child.shape === "dropdown") {
      var name = child.value;

      var _iterator2 = _createForOfIteratorHelper(lang.soundEffects),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var effect = _step2.value;

          if (minifyHash(effect) === minifyHash(name)) {
            return true;
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }

  return false;
});
disambig("DATA_LENGTHOFLIST", "OPERATORS_LENGTH", function (children, lang) {
  // List block if dropdown, otherwise operators
  var last = children[children.length - 1];
  if (!last.isInput) return;
  return last.shape === "dropdown";
});
disambig("DATA_LISTCONTAINSITEM", "OPERATORS_CONTAINS", function (children, lang) {
  // List block if dropdown, otherwise operators
  var first = children[0];
  if (!first.isInput) return;
  return first.shape === "dropdown";
});
disambig("pen.setColor", "pen.setHue", function (children, lang) {
  // Color block if color input, otherwise numeric
  var last = children[children.length - 1]; // If variable, assume color input, since the RGBA hack is common.
  // TODO fix Scratch :P

  return last.isInput && last.isColor || last.isBlock;
});
specialCase("CONTROL_STOP", function (info, children, lang) {
  // Cap block unless argument is "other scripts in sprite"
  var last = children[children.length - 1];
  if (!last.isInput) return;
  var value = last.value;

  if (lang.osis.indexOf(value) > -1) {
    return _extends({}, blocksById["CONTROL_STOP"], {
      shape: "stack"
    });
  }
});

function lookupHash(hash, info, children, languages) {
  for (var i = 0; i < languages.length; i++) {
    var lang = languages[i];

    if (lang.blocksByHash.hasOwnProperty(hash)) {
      var block = lang.blocksByHash[hash];
      if (info.shape === "reporter" && block.shape !== "reporter") continue;
      if (info.shape === "boolean" && block.shape !== "boolean") continue;

      if (block.specialCase) {
        block = block.specialCase(info, children, lang) || block;
      }

      return {
        type: block,
        lang: lang
      };
    }
  }
}

function lookupDropdown(name, languages) {
  for (var i = 0; i < languages.length; i++) {
    var lang = languages[i];

    if (lang.nativeDropdowns.hasOwnProperty(name)) {
      var nativeName = lang.nativeDropdowns[name];
      return nativeName;
    }
  }
}

function applyOverrides(info, overrides) {
  for (var i = 0; i < overrides.length; i++) {
    var name = overrides[i];

    if (hexColorPat.test(name)) {
      info.color = name;
      info.category = "";
      info.categoryIsDefault = false;
    } else if (overrideCategories.indexOf(name) > -1) {
      info.category = name;
      info.categoryIsDefault = false;
    } else if (overrideShapes.indexOf(name) > -1) {
      info.shape = name;
    } else if (name === "loop") {
      info.hasLoopArrow = true;
    } else if (name === "+" || name === "-") {
      info.diff = name;
    }
  }
}

function blockName(block) {
  var words = [];

  for (var i = 0; i < block.children.length; i++) {
    var child = block.children[i];
    if (!child.isLabel) return;
    words.push(child.value);
  }

  return words.join(" ");
}

var blocks = {
  loadLanguages: loadLanguages,
  blockName: blockName,
  allLanguages: allLanguages,
  lookupDropdown: lookupDropdown,
  hexColorPat: hexColorPat,
  minifyHash: minifyHash,
  lookupHash: lookupHash,
  applyOverrides: applyOverrides,
  rtlLanguages: rtlLanguages,
  iconPat: iconPat,
  hashSpec: hashSpec,
  parseSpec: parseSpec,
  parseInputNumber: parseInputNumber,
  inputPat: inputPat,
  unicodeIcons: unicodeIcons,
  english: english,
  blocksById: blocksById
};

function assert$1(bool, message) {
  if (!bool) throw "Assertion failed! " + (message || "");
}

function indent(text) {
  return text.split("\n").map(function (line) {
    return "  " + line;
  }).join("\n");
}

var blocksById$1 = blocks.blocksById,
    parseSpec$1 = blocks.parseSpec,
    inputPat$1 = blocks.inputPat,
    parseInputNumber$1 = blocks.parseInputNumber,
    iconPat$1 = blocks.iconPat,
    rtlLanguages$1 = blocks.rtlLanguages,
    unicodeIcons$1 = blocks.unicodeIcons;
/* Label */

var Label = function Label(value, cls) {
  this.value = value;
  this.cls = cls || "";
  this.el = null;
  this.height = 12;
  this.metrics = null;
  this.x = 0;
};

Label.prototype.isLabel = true;

Label.prototype.stringify = function () {
  if (this.value === "<" || this.value === ">") return this.value;
  return this.value.replace(/([<>[\](){}])/g, "\\$1");
};
/* Icon */


var Icon = function Icon(name) {
  this.name = name;
  this.isArrow = name === "loopArrow";
  assert$1(Icon.icons[name], "no info for icon " + name);
};

Icon.prototype.isIcon = true;
Icon.icons = {
  greenFlag: true,
  turnLeft: true,
  turnRight: true,
  loopArrow: true,
  addInput: true,
  delInput: true
};

Icon.prototype.stringify = function () {
  return unicodeIcons$1["@" + this.name] || "";
};
/* Input */


var Input = function Input(shape, value, menu) {
  this.shape = shape;
  this.value = value;
  this.menu = menu || null;
  this.isRound = shape === "number" || shape === "number-dropdown";
  this.isBoolean = shape === "boolean";
  this.isStack = shape === "stack";
  this.isInset = shape === "boolean" || shape === "stack" || shape === "reporter";
  this.isColor = shape === "color";
  this.hasArrow = shape === "dropdown" || shape === "number-dropdown";
  this.isDarker = shape === "boolean" || shape === "stack" || shape === "dropdown";
  this.isSquare = shape === "string" || shape === "color" || shape === "dropdown";
  this.hasLabel = !(this.isColor || this.isInset);
  this.label = this.hasLabel ? new Label(value, "literal-" + this.shape) : null;
  this.x = 0;
};

Input.prototype.isInput = true;

Input.prototype.stringify = function () {
  if (this.isColor) {
    assert$1(this.value[0] === "#");
    return "[" + this.value + "]";
  }

  var text = (this.value ? "" + this.value : "").replace(/ v$/, " \\v").replace(/([\]\\])/g, "\\$1");
  if (this.hasArrow) text += " v";
  return this.isRound ? "(" + text + ")" : this.isSquare ? "[" + text + "]" : this.isBoolean ? "<>" : this.isStack ? "{}" : text;
};

Input.prototype.translate = function (lang) {
  if (this.hasArrow) {
    var value = this.menu || this.value;
    this.value = value; // TODO translate dropdown value

    this.label = new Label(this.value, "literal-" + this.shape);
  }
};
/* Block */


var Block = function Block(info, children, comment) {
  assert$1(info);
  this.info = _extends({}, info);
  this.children = children;
  this.comment = comment || null;
  this.diff = null;
  var shape = this.info.shape;
  this.isHat = shape === "hat" || shape === "cat" || shape === "define-hat";
  this.hasPuzzle = shape === "stack" || shape === "hat" || shape === "cat";
  this.isFinal = /cap/.test(shape);
  this.isCommand = shape === "stack" || shape === "cap" || /block/.test(shape);
  this.isOutline = shape === "outline";
  this.isReporter = shape === "reporter";
  this.isBoolean = shape === "boolean";
  this.isRing = shape === "ring";
  this.hasScript = /block/.test(shape);
  this.isElse = shape === "celse";
  this.isEnd = shape === "cend";
};

Block.prototype.isBlock = true;

Block.prototype.stringify = function (extras) {
  var firstInput = null;
  var checkAlias = false;
  var text = this.children.map(function (child) {
    if (child.isIcon) checkAlias = true;
    if (!firstInput && !(child.isLabel || child.isIcon)) firstInput = child;
    return child.isScript ? "\n" + indent(child.stringify()) + "\n" : child.stringify().trim() + " ";
  }).join("").trim();
  var lang = this.info.language;

  if (checkAlias && lang && this.info.selector) {
    var type = blocksById$1[this.info.id];
    var spec = type.spec;
    var alias = lang.nativeAliases[type.spec];

    if (alias) {
      // TODO make translate() not in-place, and use that
      if (inputPat$1.test(alias) && firstInput) {
        alias = alias.replace(inputPat$1, firstInput.stringify());
      }

      return alias;
    }
  }

  var overrides = extras || "";

  if (this.info.categoryIsDefault === false || this.info.category === "custom-arg" && (this.isReporter || this.isBoolean) || this.info.category === "custom" && this.info.shape === "stack") {
    if (overrides) overrides += " ";
    overrides += this.info.category;
  }

  if (overrides) {
    text += " :: " + overrides;
  }

  return this.hasScript ? text + "\nend" : this.info.shape === "reporter" ? "(" + text + ")" : this.info.shape === "boolean" ? "<" + text + ">" : text;
};

Block.prototype.translate = function (lang, isShallow) {
  var _this = this;

  if (!lang) throw new Error("Missing language");
  var id = this.info.id;
  if (!id) return;

  if (id === "PROCEDURES_DEFINITION") {
    // Find the first 'outline' child (there should be exactly one).
    var outline = this.children.find(function (child) {
      return child.isOutline;
    });
    this.children = [];

    var _iterator = _createForOfIteratorHelper(lang.definePrefix),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var word = _step.value;
        this.children.push(new Label(word));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.children.push(outline);

    var _iterator2 = _createForOfIteratorHelper(lang.defineSuffix),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _word = _step2.value;
        this.children.push(new Label(_word));
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return;
  }

  var type = blocksById$1[id];
  var oldSpec = this.info.language.commands[type.spec];
  var nativeSpec = lang.commands[type.spec];
  if (!nativeSpec) return;
  var nativeInfo = parseSpec$1(nativeSpec);
  var rawArgs = this.children.filter(function (child) {
    return !child.isLabel && !child.isIcon;
  });

  if (!isShallow) {
    rawArgs.forEach(function (child) {
      child.translate(lang);
    });
  } // Work out indexes of existing children


  var oldParts = parseSpec$1(oldSpec).parts;
  var oldInputOrder = oldParts.map(function (part) {
    return parseInputNumber$1(part);
  }).filter(function (x) {
    return !!x;
  });
  var highestNumber = 0;
  var args = oldInputOrder.map(function (number) {
    highestNumber = Math.max(highestNumber, number);
    return rawArgs[number - 1];
  });
  var remainingArgs = rawArgs.slice(highestNumber); // Get new children by index

  this.children = nativeInfo.parts.map(function (part) {
    var part = part.trim();
    if (!part) return;
    var number = parseInputNumber$1(part);

    if (number) {
      return args[number - 1];
    } else {
      return iconPat$1.test(part) ? new Icon(part.slice(1)) : new Label(part);
    }
  }).filter(function (x) {
    return !!x;
  }); // Push any remaining children, so we pick up C block bodies

  remainingArgs.forEach(function (arg, index) {
    if (index === 1 && _this.info.id === "CONTROL_IF") {
      _this.children.push(new Label(lang.commands["else"]));
    }

    _this.children.push(arg);
  });
  this.info.language = lang;
  this.info.isRTL = rtlLanguages$1.indexOf(lang.code) > -1;
  this.info.categoryIsDefault = true;
};
/* Comment */


var Comment = function Comment(value, hasBlock) {
  this.label = new Label(value, "comment-label");
  this.width = null;
  this.hasBlock = hasBlock;
};

Comment.prototype.isComment = true;

Comment.prototype.stringify = function () {
  return "// " + this.label.value;
};
/* Glow */


var Glow = function Glow(child) {
  assert$1(child);
  this.child = child;

  if (child.isBlock) {
    this.shape = child.info.shape;
    this.info = child.info;
  } else {
    this.shape = "stack";
  }
};

Glow.prototype.isGlow = true;

Glow.prototype.stringify = function () {
  if (this.child.isBlock) {
    return this.child.stringify("+");
  } else {
    var lines = this.child.stringify().split("\n");
    return lines.map(function (line) {
      return "+ " + line;
    }).join("\n");
  }
};

Glow.prototype.translate = function (lang) {
  this.child.translate(lang);
};
/* Script */


var Script = function Script(blocks$$1) {
  this.blocks = blocks$$1;
  this.isEmpty = !blocks$$1.length;
  this.isFinal = !this.isEmpty && blocks$$1[blocks$$1.length - 1].isFinal;
};

Script.prototype.isScript = true;

Script.prototype.stringify = function () {
  return this.blocks.map(function (block) {
    var line = block.stringify();
    if (block.comment) line += " " + block.comment.stringify();
    return line;
  }).join("\n");
};

Script.prototype.translate = function (lang) {
  this.blocks.forEach(function (block) {
    block.translate(lang);
  });
};
/* Document */


var Document = function Document(scripts) {
  this.scripts = scripts;
};

Document.prototype.stringify = function () {
  return this.scripts.map(function (script) {
    return script.stringify();
  }).join("\n\n");
};

Document.prototype.translate = function (lang) {
  this.scripts.forEach(function (script) {
    script.translate(lang);
  });
};

var model = {
  Label: Label,
  Icon: Icon,
  Input: Input,
  Block: Block,
  Comment: Comment,
  Glow: Glow,
  Script: Script,
  Document: Document
};

function isArray$2(o) {
  return o && o.constructor === Array;
}

function assert$2(bool, message) {
  if (!bool) throw "Assertion failed! " + (message || "");
}

var Label$1 = model.Label,
    Icon$1 = model.Icon,
    Input$1 = model.Input,
    Block$1 = model.Block,
    Comment$1 = model.Comment,
    Glow$1 = model.Glow,
    Script$1 = model.Script,
    Document$1 = model.Document;
var allLanguages$1 = blocks.allLanguages,
    lookupDropdown$1 = blocks.lookupDropdown,
    hexColorPat$1 = blocks.hexColorPat,
    minifyHash$1 = blocks.minifyHash,
    lookupHash$1 = blocks.lookupHash,
    hashSpec$1 = blocks.hashSpec,
    applyOverrides$1 = blocks.applyOverrides,
    rtlLanguages$2 = blocks.rtlLanguages,
    iconPat$2 = blocks.iconPat,
    blockName$2 = blocks.blockName;

function paintBlock(info, children, languages) {
  var overrides = [];

  if (isArray$2(children[children.length - 1])) {
    overrides = children.pop();
  } // build hash


  var words = [];

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (child.isLabel) {
      words.push(child.value);
    } else if (child.isIcon) {
      words.push("@" + child.name);
    } else {
      words.push("_");
    }
  }

  var string = words.join(" ");
  var shortHash = info.hash = minifyHash$1(string); // paint

  var o = lookupHash$1(shortHash, info, children, languages);

  if (o) {
    var lang = o.lang;
    var type = o.type;
    info.language = lang;
    info.isRTL = rtlLanguages$2.indexOf(lang.code) > -1;

    if (type.shape === "ring" ? info.shape === "reporter" : info.shape === "stack") {
      info.shape = type.shape;
    }

    info.category = type.category;
    info.categoryIsDefault = true; // store selector, used for translation among other things

    if (type.selector) info.selector = type.selector;
    if (type.id) info.id = type.id;
    info.hasLoopArrow = type.hasLoopArrow; // ellipsis block

    if (type.spec === ". . .") {
      children = [new Label$1(". . .")];
    }
  } else {
    // The block was not recognised, so we check if it's a define block.
    //
    // We check for built-in blocks first to avoid ambiguity, e.g. the
    // `defina o tamanho como (100) %` block in pt_BR.
    var _iterator = _createForOfIteratorHelper(languages),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _lang = _step.value;

        if (!isDefineBlock(children, _lang)) {
          continue;
        } // Setting the shape also triggers some logic in recogniseStuff.


        info.shape = "define-hat";
        info.category = "custom"; // Move the children of the define block into an "outline", transforming
        // () and [] shapes as we go.

        var outlineChildren = children.splice(_lang.definePrefix.length, children.length - _lang.defineSuffix.length);

        for (var _i = 0; _i < outlineChildren.length; _i++) {
          var _child = outlineChildren[_i];

          if (_child.isInput && _child.isBoolean) {
            // Convert empty boolean slot to empty boolean argument.
            _child = paintBlock({
              shape: "boolean",
              argument: "boolean",
              category: "custom-arg"
            }, [new Label$1("")], languages);
          } else if (_child.isInput && (_child.shape === "string" || _child.shape === "number")) {
            // Convert string inputs to string arguments, number inputs to number arguments.
            var labels = _child.value.split(/ +/g).map(function (word) {
              return new Label$1(word);
            });

            _child = paintBlock({
              shape: "reporter",
              argument: _child.shape === "string" ? "string" : "number",
              category: "custom-arg"
            }, labels, languages);
          } else if (_child.isReporter || _child.isBoolean) {
            // Convert variables to number arguments, predicates to boolean arguments.
            if (_child.info.categoryIsDefault) {
              _child.info.category = "custom-arg";
              _child.info.argument = _child.isBoolean ? "boolean" : "number";
            }
          }

          outlineChildren[_i] = _child;
        }

        var outlineInfo = {
          shape: "outline",
          category: "custom",
          categoryIsDefault: true,
          hasLoopArrow: false
        };
        var outline = new Block$1(outlineInfo, outlineChildren);
        children.splice(_lang.definePrefix.length, 0, outline);
        break;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  } // Apply overrides.


  applyOverrides$1(info, overrides); // loop arrows

  if (info.hasLoopArrow) {
    children.push(new Icon$1("loopArrow"));
  }

  var block = new Block$1(info, children); // image replacement

  if (type && iconPat$2.test(type.spec)) {
    block.translate(lang, true);
  } // diffs


  if (info.diff === "+") {
    return new Glow$1(block);
  } else {
    block.diff = info.diff;
  }

  return block;
}

function isDefineBlock(children, lang) {
  if (children.length < lang.definePrefix.length) return false;
  if (children.length < lang.defineSuffix.length) return false;

  for (var i = 0; i < lang.definePrefix.length; i++) {
    var defineWord = lang.definePrefix[i];
    var child = children[i];

    if (!child.isLabel || minifyHash$1(child.value) !== minifyHash$1(defineWord)) {
      return false;
    }
  }

  for (var i = 1; i <= lang.defineSuffix.length; i++) {
    var _defineWord = lang.defineSuffix[lang.defineSuffix.length - i];
    var _child2 = children[children.length - i];

    if (!_child2.isLabel || minifyHash$1(_child2.value) !== minifyHash$1(_defineWord)) {
      return false;
    }
  }

  return true;
}

function parseLines(code, languages) {
  var tok = code[0];
  var index = 0;

  function next() {
    tok = code[++index];
  }

  function peek() {
    return code[index + 1];
  }

  function peekNonWs() {
    for (var i = index + 1; i < code.length; i++) {
      if (code[i] !== " ") return code[i];
    }
  }

  var sawNL;
  var define = [];
  languages.map(function (lang) {
    define = define.concat(lang.define);
  });

  function makeBlock(shape, children) {
    var hasInputs = !!children.filter(function (x) {
      return !x.isLabel;
    }).length;
    var info = {
      shape: shape,
      category: shape === "reporter" && !hasInputs ? "variables" : "obsolete",
      categoryIsDefault: true,
      hasLoopArrow: false
    };
    return paintBlock(info, children, languages);
  }

  function makeMenu(shape, value) {
    var menu = lookupDropdown$1(value, languages) || value;
    return new Input$1(shape, value, menu);
  }

  function pParts(end) {
    var children = [];
    var label;

    while (tok && tok !== "\n") {
      if (tok === "<" || tok === ">" && end === ">") {
        var last = children[children.length - 1];
        var c = peekNonWs();

        if (last && !last.isLabel && (c === "[" || c === "(" || c === "<" || c === "{")) {
          label = null;
          children.push(new Label$1(tok));
          next();
          continue;
        }
      }

      if (tok === end) break;
      if (tok === "/" && peek() === "/" && !end) break;

      switch (tok) {
        case "[":
          label = null;
          children.push(pString());
          break;

        case "(":
          label = null;
          children.push(pReporter());
          break;

        case "<":
          label = null;
          children.push(pPredicate());
          break;

        case "{":
          label = null;
          children.push(pEmbedded());
          break;

        case " ":
        case "\t":
          next(); // Skip over whitespace.

          label = null;
          break;

        case "◂":
        case "▸":
          children.push(pIcon());
          label = null;
          break;

        case "@":
          next();
          var name = "";

          while (tok && /[a-zA-Z]/.test(tok)) {
            name += tok;
            next();
          }

          if (name === "cloud") {
            children.push(new Label$1("☁"));
          } else {
            children.push(Icon$1.icons.hasOwnProperty(name) ? new Icon$1(name) : new Label$1("@" + name));
          }

          label = null;
          break;

        case "\\":
          next();
        // escape character
        // fall-thru

        case ":":
          if (tok === ":" && peek() === ":") {
            children.push(pOverrides(end));
            return children;
          }

        // fall-thru

        default:
          if (!label) children.push(label = new Label$1(""));
          label.value += tok;
          next();
      }
    }

    return children;
  }

  function pString() {
    next(); // '['

    var s = "";
    var escapeV = false;

    while (tok && tok !== "]" && tok !== "\n") {
      if (tok === "\\") {
        next();
        if (tok === "v") escapeV = true;
        if (!tok) break;
      } else {
        escapeV = false;
      }

      s += tok;
      next();
    }

    if (tok === "]") next();

    if (hexColorPat$1.test(s)) {
      return new Input$1("color", s);
    }

    return !escapeV && / v$/.test(s) ? makeMenu("dropdown", s.slice(0, s.length - 2)) : new Input$1("string", s);
  }

  function pBlock(end) {
    var children = pParts(end);

    if (tok && tok === "\n") {
      sawNL = true;
      next();
    }

    if (children.length === 0) return; // standalone reporters

    if (children.length === 1) {
      var child = children[0];

      if (child.isBlock && (child.isReporter || child.isBoolean || child.isRing)) {
        return child;
      }
    }

    return makeBlock("stack", children);
  }

  function pReporter() {
    next(); // '('
    // empty number-dropdown

    if (tok === " ") {
      next();

      if (tok === "v" && peek() === ")") {
        next();
        next();
        return new Input$1("number-dropdown", "");
      }
    }

    var children = pParts(")");
    if (tok && tok === ")") next(); // empty numbers

    if (children.length === 0) {
      return new Input$1("number", "");
    } // number


    if (children.length === 1 && children[0].isLabel) {
      var value = children[0].value;

      if (/^[0-9e.-]*$/.test(value)) {
        return new Input$1("number", value);
      }

      if (hexColorPat$1.test(value)) {
        return new Input$1("color", value);
      }
    } // number-dropdown


    for (var i = 0; i < children.length; i++) {
      if (!children[i].isLabel) {
        break;
      }
    }

    if (i === children.length) {
      var last = children[i - 1];

      if (i > 1 && last.value === "v") {
        children.pop();
        var value = children.map(function (l) {
          return l.value;
        }).join(" ");
        return makeMenu("number-dropdown", value);
      }
    }

    var block = makeBlock("reporter", children); // rings

    if (block.info && block.info.shape === "ring") {
      var first = block.children[0];

      if (first && first.isInput && first.shape === "number" && first.value === "") {
        block.children[0] = new Input$1("reporter");
      } else if (first && first.isScript && first.isEmpty || first && first.isBlock && !first.children.length) {
        block.children[0] = new Input$1("stack");
      }
    }

    return block;
  }

  function pPredicate() {
    next(); // '<'

    var children = pParts(">");
    if (tok && tok === ">") next();

    if (children.length === 0) {
      return new Input$1("boolean");
    }

    return makeBlock("boolean", children);
  }

  function pEmbedded() {
    next(); // '{'

    sawNL = false;

    var f = function f() {
      while (tok && tok !== "}") {
        var block = pBlock("}");
        if (block) return block;
      }
    };

    var scripts = parseScripts(f);
    var blocks$$1 = [];
    scripts.forEach(function (script) {
      blocks$$1 = blocks$$1.concat(script.blocks);
    });
    if (tok === "}") next();

    if (!sawNL) {
      assert$2(blocks$$1.length <= 1);
      return blocks$$1.length ? blocks$$1[0] : makeBlock("stack", []);
    }

    return new Script$1(blocks$$1);
  }

  function pIcon() {
    var c = tok;
    next();

    switch (c) {
      case "▸":
        return new Icon$1("addInput");

      case "◂":
        return new Icon$1("delInput");
    }
  }

  function pOverrides(end) {
    next();
    next();
    var overrides = [];
    var override = "";

    while (tok && tok !== "\n" && tok !== end) {
      if (tok === " ") {
        if (override) {
          overrides.push(override);
          override = "";
        }
      } else if (tok === "/" && peek() === "/") {
        break;
      } else {
        override += tok;
      }

      next();
    }

    if (override) overrides.push(override);
    return overrides;
  }

  function pComment(end) {
    next();
    next();
    var comment = "";

    while (tok && tok !== "\n" && tok !== end) {
      comment += tok;
      next();
    }

    if (tok && tok === "\n") next();
    return new Comment$1(comment, true);
  }

  function pLine() {
    var diff;

    if (tok === "+" || tok === "-") {
      diff = tok;
      next();
    }

    var block = pBlock();

    if (tok === "/" && peek() === "/") {
      var comment = pComment();
      comment.hasBlock = block && block.children.length;

      if (!comment.hasBlock) {
        return comment;
      }

      block.comment = comment;
    }

    if (block) block.diff = diff;
    return block;
  }

  return function () {
    if (!tok) return undefined;
    var line = pLine();
    return line || "NL";
  };
}
/* * */


function parseScripts(getLine) {
  var line = getLine();

  function next() {
    line = getLine();
  }

  function pFile() {
    while (line === "NL") {
      next();
    }

    var scripts = [];

    while (line) {
      var blocks$$1 = [];

      while (line && line !== "NL") {
        var b = pLine();
        var isGlow = b.diff === "+";

        if (isGlow) {
          b.diff = null;
        }

        if (b.isElse || b.isEnd) {
          b = new Block$1(_extends({}, b.info, {
            shape: "stack"
          }), b.children);
        }

        if (isGlow) {
          var last = blocks$$1[blocks$$1.length - 1];
          var children = [];

          if (last && last.isGlow) {
            blocks$$1.pop();
            var children = last.child.isScript ? last.child.blocks : [last.child];
          }

          children.push(b);
          blocks$$1.push(new Glow$1(new Script$1(children)));
        } else if (b.isHat) {
          if (blocks$$1.length) scripts.push(new Script$1(blocks$$1));
          blocks$$1 = [b];
        } else if (b.isFinal) {
          blocks$$1.push(b);
          break;
        } else if (b.isCommand) {
          blocks$$1.push(b);
        } else {
          // reporter or predicate
          if (blocks$$1.length) scripts.push(new Script$1(blocks$$1));
          scripts.push(new Script$1([b]));
          blocks$$1 = [];
          break;
        }
      }

      if (blocks$$1.length) scripts.push(new Script$1(blocks$$1));

      while (line === "NL") {
        next();
      }
    }

    return scripts;
  }

  function pLine() {
    var b = line;
    next();

    if (b.hasScript) {
      while (true) {
        var blocks$$1 = pMouth();
        b.children.push(new Script$1(blocks$$1));

        if (line && line.isElse) {
          for (var i = 0; i < line.children.length; i++) {
            b.children.push(line.children[i]);
          }

          next();
          continue;
        }

        if (line && line.isEnd) {
          next();
        }

        break;
      }
    }

    return b;
  }

  function pMouth() {
    var blocks$$1 = [];

    while (line) {
      if (line === "NL") {
        next();
        continue;
      }

      if (!line.isCommand) {
        return blocks$$1;
      }

      var b = pLine();
      var isGlow = b.diff === "+";

      if (isGlow) {
        b.diff = null;
      }

      if (isGlow) {
        var last = blocks$$1[blocks$$1.length - 1];
        var children = [];

        if (last && last.isGlow) {
          blocks$$1.pop();
          var children = last.child.isScript ? last.child.blocks : [last.child];
        }

        children.push(b);
        blocks$$1.push(new Glow$1(new Script$1(children)));
      } else {
        blocks$$1.push(b);
      }
    }

    return blocks$$1;
  }

  return pFile();
}
/* * */


function eachBlock(x, cb) {
  if (x.isScript) {
    x.blocks = x.blocks.map(function (block) {
      eachBlock(block, cb);
      return cb(block) || block;
    });
  } else if (x.isBlock) {
    x.children = x.children.map(function (child) {
      eachBlock(child, cb);
      return cb(child) || child;
    });
  } else if (x.isGlow) {
    eachBlock(x.child, cb);
  }
}

var listBlocks = {
  "append:toList:": 1,
  "deleteLine:ofList:": 1,
  "insert:at:ofList:": 2,
  "setLine:ofList:to:": 1,
  "showList:": 0,
  "hideList:": 0
};

function recogniseStuff(scripts) {
  // Object.create(null) is JS magic for an "empty dictionary"
  // In ES6-land a Set would be more appropriate
  var customBlocksByHash = Object.create(null);
  var listNames = Object.create(null);
  var variableNames = Object.create(null);
  scripts.forEach(function (script) {
    var customArgs = Object.create(null);
    eachBlock(script, function (block) {
      if (!block.isBlock) return; // custom blocks

      if (block.info.shape === "define-hat") {
        // There should be exactly one `outline` child, added in paintBlock.
        var outline = block.children.find(function (child) {
          return child.isOutline;
        });
        if (!outline) return;
        var names = [];
        var parts = [];

        for (var i = 0; i < outline.children.length; i++) {
          var child = outline.children[i];

          if (child.isLabel) {
            parts.push(child.value);
          } else if (child.isBlock) {
            if (!child.info.argument) return;
            parts.push({
              number: "%n",
              string: "%s",
              boolean: "%b"
            }[child.info.argument]);
            var name = blockName$2(child);
            names.push(name);
            customArgs[name] = true;
          }
        }

        var spec = parts.join(" ");
        var hash = hashSpec$1(spec);
        var info = customBlocksByHash[hash] = {
          spec: spec,
          names: names
        };
        block.info.id = "PROCEDURES_DEFINITION";
        block.info.selector = "procDef";
        block.info.call = info.spec;
        block.info.names = info.names;
        block.info.category = "custom"; // custom arguments
      } else if (block.info.categoryIsDefault && (block.isReporter || block.isBoolean)) {
        var name = blockName$2(block);

        if (customArgs[name]) {
          block.info.category = "custom-arg";
          block.info.categoryIsDefault = false;
          block.info.selector = "getParam";
        } // list names

      } else if (listBlocks.hasOwnProperty(block.info.selector)) {
        var argIndex = listBlocks[block.info.selector];
        var inputs = block.children.filter(function (child) {
          return !child.isLabel;
        });
        var input = inputs[argIndex];

        if (input && input.isInput) {
          listNames[input.value] = true;
        }
      }
    });
  });
  scripts.forEach(function (script) {
    eachBlock(script, function (block) {
      if (block.info && block.info.categoryIsDefault && block.info.category === "obsolete") {
        // custom blocks
        var info = customBlocksByHash[block.info.hash];

        if (info) {
          block.info.selector = "call";
          block.info.call = info.spec;
          block.info.names = info.names;
          block.info.category = "custom";
        }

        return;
      }

      var name, info;

      if (block.isReporter && block.info.category === "variables" && block.info.categoryIsDefault) {
        // We set the selector here for some reason
        block.info.selector = "readVariable";
        name = blockName$2(block);
        info = block.info;
      }

      if (!name) return; // list reporters

      if (listNames[name]) {
        info.category = "list";
        info.categoryIsDefault = false;
        info.selector = "contentsOfList:"; // variable reporters
      } else if (variableNames[name]) {
        info.category = "variables";
        info.categoryIsDefault = false;
        info.selector = "readVariable";
      } else {
        return;
      }

      return; // already done
    });
  });
}

function parse(code, options) {
  var options = _extends({
    inline: false,
    languages: ["en"]
  }, options);

  if (options.dialect) {
    throw new Error("Option 'dialect' no longer supported");
  }

  code = code.replace(/&lt;/g, "<");
  code = code.replace(/&gt;/g, ">");

  if (options.inline) {
    code = code.replace(/\n/g, " ");
  }

  var languages = options.languages.map(function (code) {
    var lang = allLanguages$1[code];
    if (!lang) throw new Error("Unknown language: '" + code + "'");
    return lang;
  });
  /* * */

  var f = parseLines(code, languages);
  var scripts = parseScripts(f);
  recogniseStuff(scripts);
  return new Document$1(scripts);
}

var syntax = {
  parse: parse
};

var parse$1 = syntax.parse;
var Label$2 = model.Label,
    Icon$2 = model.Icon,
    Input$2 = model.Input,
    Block$2 = model.Block,
    Comment$2 = model.Comment,
    Glow$2 = model.Glow,
    Script$2 = model.Script,
    Document$2 = model.Document;
var allLanguages$2 = blocks.allLanguages,
    loadLanguages$1 = blocks.loadLanguages;
var syntax$1 = {
  allLanguages: allLanguages$2,
  loadLanguages: loadLanguages$1,
  parse: parse$1,
  Label: Label$2,
  Icon: Icon$2,
  Input: Input$2,
  Block: Block$2,
  Comment: Comment$2,
  Glow: Glow$2,
  Script: Script$2,
  Document: Document$2
};

var draw = createCommonjsModule(function (module) {
  /* for constucting SVGs */
  function extend(src, dest) {
    return _extends({}, src, dest);
  }

  function assert(bool, message) {
    if (!bool) throw "Assertion failed! " + (message || "");
  } // set by SVG.init


  var document;
  var xml;
  var directProps = {
    textContent: true
  };
  var SVG = module.exports = {
    init: function init(window) {
      document = window.document;
      var DOMParser = window.DOMParser;
      xml = new DOMParser().parseFromString("<xml></xml>", "application/xml");
      SVG.XMLSerializer = window.XMLSerializer;
    },
    makeCanvas: function makeCanvas() {
      return document.createElement("canvas");
    },
    cdata: function cdata(content) {
      return xml.createCDATASection(content);
    },
    el: function el(name, props) {
      var el = document.createElementNS("http://www.w3.org/2000/svg", name);
      return SVG.setProps(el, props);
    },
    setProps: function setProps(el, props) {
      for (var key in props) {
        var value = "" + props[key];

        if (directProps[key]) {
          el[key] = value;
        } else if (/^xlink:/.test(key)) {
          el.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value);
        } else if (props[key] !== null && props.hasOwnProperty(key)) {
          el.setAttributeNS(null, key, value);
        }
      }

      return el;
    },
    withChildren: function withChildren(el, children) {
      for (var i = 0; i < children.length; i++) {
        el.appendChild(children[i]);
      }

      return el;
    },
    group: function group(children) {
      return SVG.withChildren(SVG.el("g"), children);
    },
    newSVG: function newSVG(width, height) {
      return SVG.el("svg", {
        version: "1.1",
        width: width,
        height: height
      });
    },
    polygon: function polygon(props) {
      return SVG.el("polygon", extend(props, {
        points: props.points.join(" ")
      }));
    },
    path: function path(props) {
      return SVG.el("path", extend(props, {
        path: null,
        d: props.path.join(" ")
      }));
    },
    text: function text(x, y, content, props) {
      var text = SVG.el("text", extend(props, {
        x: x,
        y: y,
        textContent: content
      }));
      return text;
    },
    symbol: function symbol(href) {
      return SVG.el("use", {
        "xlink:href": href
      });
    },
    move: function move(dx, dy, el) {
      SVG.setProps(el, {
        transform: ["translate(", dx, " ", dy, ")"].join("")
      });
      return el;
    },
    translatePath: function translatePath(dx, dy, path) {
      var isX = true;
      var parts = path.split(" ");
      var out = [];

      for (var i = 0; i < parts.length; i++) {
        var part = parts[i];

        if (part === "A") {
          var j = i + 5;
          out.push("A");

          while (i < j) {
            out.push(parts[++i]);
          }

          continue;
        } else if (/[A-Za-z]/.test(part)) {
          assert(isX);
        } else {
          part = +part;
          part += isX ? dx : dy;
          isX = !isX;
        }

        out.push(part);
      }

      return out.join(" ");
    },

    /* shapes */
    rect: function rect(w, h, props) {
      return SVG.el("rect", extend(props, {
        x: 0,
        y: 0,
        width: w,
        height: h
      }));
    },
    ellipse: function ellipse(w, h, props) {
      return SVG.el("ellipse", extend(props, {
        cx: w / 2,
        cy: h / 2,
        rx: w / 2,
        ry: h / 2
      }));
    },
    arc: function arc(p1x, p1y, p2x, p2y, rx, ry) {
      return ["L", p1x, p1y, "A", rx, ry, 0, 0, 1, p2x, p2y].join(" ");
    },
    arcw: function arcw(p1x, p1y, p2x, p2y, rx, ry) {
      return ["L", p1x, p1y, "A", rx, ry, 0, 0, 0, p2x, p2y].join(" ");
    },
    roundedPath: function roundedPath(w, h) {
      var r = h / 2;
      return ["M", r, 0, SVG.arc(w - r, 0, w - r, h, r, r), SVG.arc(r, h, r, 0, r, r), "Z"];
    },
    roundedRect: function roundedRect(w, h, props) {
      return SVG.path(extend(props, {
        path: SVG.roundedPath(w, h)
      }));
    },
    pointedPath: function pointedPath(w, h) {
      var r = h / 2;
      return ["M", r, 0, "L", w - r, 0, w, r, "L", w, r, w - r, h, "L", r, h, 0, r, "L", 0, r, r, 0, "Z"];
    },
    pointedRect: function pointedRect(w, h, props) {
      return SVG.path(extend(props, {
        path: SVG.pointedPath(w, h)
      }));
    },
    getTop: function getTop(w) {
      return ["M", 0, 3, "L", 3, 0, "L", 13, 0, "L", 16, 3, "L", 24, 3, "L", 27, 0, "L", w - 3, 0, "L", w, 3].join(" ");
    },
    getRingTop: function getRingTop(w) {
      return ["M", 0, 3, "L", 3, 0, "L", 7, 0, "L", 10, 3, "L", 16, 3, "L", 19, 0, "L", w - 3, 0, "L", w, 3].join(" ");
    },
    getRightAndBottom: function getRightAndBottom(w, y, hasNotch, inset) {
      if (typeof inset === "undefined") {
        inset = 0;
      }

      var arr = ["L", w, y - 3, "L", w - 3, y];

      if (hasNotch) {
        arr = arr.concat(["L", inset + 27, y, "L", inset + 24, y + 3, "L", inset + 16, y + 3, "L", inset + 13, y]);
      }

      if (inset > 0) {
        arr = arr.concat(["L", inset + 2, y, "L", inset, y + 2]);
      } else {
        arr = arr.concat(["L", inset + 3, y, "L", 0, y - 3]);
      }

      return arr.join(" ");
    },
    getArm: function getArm(w, armTop) {
      return ["L", 15, armTop - 2, "L", 15 + 2, armTop, "L", w - 3, armTop, "L", w, armTop + 3].join(" ");
    },
    stackRect: function stackRect(w, h, props) {
      return SVG.path(extend(props, {
        path: [SVG.getTop(w), SVG.getRightAndBottom(w, h, true, 0), "Z"]
      }));
    },
    capPath: function capPath(w, h) {
      return [SVG.getTop(w), SVG.getRightAndBottom(w, h, false, 0), "Z"];
    },
    ringCapPath: function ringCapPath(w, h) {
      return [SVG.getRingTop(w), SVG.getRightAndBottom(w, h, false, 0), "Z"];
    },
    capRect: function capRect(w, h, props) {
      return SVG.path(extend(props, {
        path: SVG.capPath(w, h)
      }));
    },
    hatRect: function hatRect(w, h, props) {
      return SVG.path(extend(props, {
        path: ["M", 0, 12, SVG.arc(0, 12, 80, 10, 80, 80), "L", w - 3, 10, "L", w, 10 + 3, SVG.getRightAndBottom(w, h, true), "Z"]
      }));
    },
    curve: function curve(p1x, p1y, p2x, p2y, roundness) {
      var roundness = roundness || 0.42;
      var midX = (p1x + p2x) / 2.0;
      var midY = (p1y + p2y) / 2.0;
      var cx = Math.round(midX + roundness * (p2y - p1y));
      var cy = Math.round(midY - roundness * (p2x - p1x));
      return [cx, cy, p2x, p2y].join(" ");
    },
    procHatBase: function procHatBase(w, h, archRoundness, props) {
      // TODO use arc()
      var archRoundness = Math.min(0.2, 35 / w);
      return SVG.path(extend(props, {
        path: ["M", 0, 15, "Q", SVG.curve(0, 15, w, 15, archRoundness), SVG.getRightAndBottom(w, h, true), "M", -1, 13, "Q", SVG.curve(-1, 13, w + 1, 13, archRoundness), "Q", SVG.curve(w + 1, 13, w, 16, 0.6), "Q", SVG.curve(w, 16, 0, 16, -archRoundness), "Q", SVG.curve(0, 16, -1, 13, 0.6), "Z"]
      }));
    },
    procHatCap: function procHatCap(w, h, archRoundness) {
      // TODO use arc()
      // TODO this doesn't look quite right
      return SVG.path({
        path: ["M", -1, 13, "Q", SVG.curve(-1, 13, w + 1, 13, archRoundness), "Q", SVG.curve(w + 1, 13, w, 16, 0.6), "Q", SVG.curve(w, 16, 0, 16, -archRoundness), "Q", SVG.curve(0, 16, -1, 13, 0.6), "Z"],
        class: "sb-define-hat-cap"
      });
    },
    procHatRect: function procHatRect(w, h, props) {
      var q = 52;
      var y = h - q;
      var archRoundness = Math.min(0.2, 35 / w);
      return SVG.move(0, y, SVG.group([SVG.procHatBase(w, q, archRoundness, props), SVG.procHatCap(w, q, archRoundness)]));
    },
    mouthRect: function mouthRect(w, h, isFinal, lines, props) {
      var y = lines[0].height;
      var p = [SVG.getTop(w), SVG.getRightAndBottom(w, y, true, 15)];

      for (var i = 1; i < lines.length; i += 2) {
        var isLast = i + 2 === lines.length;
        y += lines[i].height - 3;
        p.push(SVG.getArm(w, y));
        var hasNotch = !(isLast && isFinal);
        var inset = isLast ? 0 : 15;
        y += lines[i + 1].height + 3;
        p.push(SVG.getRightAndBottom(w, y, hasNotch, inset));
      }

      return SVG.path(extend(props, {
        path: p
      }));
    },
    ringRect: function ringRect(w, h, cy, cw, ch, shape, props) {
      var r = 8;
      var func = shape === "reporter" ? SVG.roundedPath : shape === "boolean" ? SVG.pointedPath : cw < 40 ? SVG.ringCapPath : SVG.capPath;
      return SVG.path(extend(props, {
        path: ["M", r, 0, SVG.arcw(r, 0, 0, r, r, r), SVG.arcw(0, h - r, r, h, r, r), SVG.arcw(w - r, h, w, h - r, r, r), SVG.arcw(w, r, w - r, 0, r, r), "Z", SVG.translatePath(4, cy || 4, func(cw, ch).join(" "))],
        "fill-rule": "even-odd"
      }));
    },
    commentRect: function commentRect(w, h, props) {
      var r = 6;
      return SVG.path(extend(props, {
        class: "sb-comment",
        path: ["M", r, 0, SVG.arc(w - r, 0, w, r, r, r), SVG.arc(w, h - r, w - r, h, r, r), SVG.arc(r, h, 0, h - r, r, r), SVG.arc(0, r, r, 0, r, r), "Z"]
      }));
    },
    commentLine: function commentLine(width, props) {
      return SVG.move(-width, 9, SVG.rect(width, 2, extend(props, {
        class: "sb-comment-line"
      })));
    },
    strikethroughLine: function strikethroughLine(w, props) {
      return SVG.path(extend(props, {
        path: ["M", 0, 0, "L", w, 0],
        class: "sb-diff sb-diff-del"
      }));
    }
  };
});
var draw_1 = draw.init;
var draw_2 = draw.makeCanvas;
var draw_3 = draw.cdata;
var draw_4 = draw.el;
var draw_5 = draw.setProps;
var draw_6 = draw.withChildren;
var draw_7 = draw.group;
var draw_8 = draw.newSVG;
var draw_9 = draw.polygon;
var draw_10 = draw.path;
var draw_11 = draw.text;
var draw_12 = draw.symbol;
var draw_13 = draw.move;
var draw_14 = draw.translatePath;
var draw_15 = draw.rect;
var draw_16 = draw.ellipse;
var draw_17 = draw.arc;
var draw_18 = draw.arcw;
var draw_19 = draw.roundedPath;
var draw_20 = draw.roundedRect;
var draw_21 = draw.pointedPath;
var draw_22 = draw.pointedRect;
var draw_23 = draw.getTop;
var draw_24 = draw.getRingTop;
var draw_25 = draw.getRightAndBottom;
var draw_26 = draw.getArm;
var draw_27 = draw.stackRect;
var draw_28 = draw.capPath;
var draw_29 = draw.ringCapPath;
var draw_30 = draw.capRect;
var draw_31 = draw.hatRect;
var draw_32 = draw.curve;
var draw_33 = draw.procHatBase;
var draw_34 = draw.procHatCap;
var draw_35 = draw.procHatRect;
var draw_36 = draw.mouthRect;
var draw_37 = draw.ringRect;
var draw_38 = draw.commentRect;
var draw_39 = draw.commentLine;
var draw_40 = draw.strikethroughLine;

function extend(src, dest) {
  return _extends({}, src, dest);
}

var Filter = function Filter(id, props) {
  this.el = draw.el("filter", extend(props, {
    id: id,
    x0: "-50%",
    y0: "-50%",
    width: "200%",
    height: "200%"
  }));
  this.highestId = 0;
};

Filter.prototype.fe = function (name, props, children) {
  var shortName = name.toLowerCase().replace(/gaussian|osite/, "");
  var id = [shortName, "-", ++this.highestId].join("");
  this.el.appendChild(draw.withChildren(draw.el("fe" + name, extend(props, {
    result: id
  })), children || []));
  return id;
};

Filter.prototype.comp = function (op, in1, in2, props) {
  return this.fe("Composite", extend(props, {
    operator: op,
    in: in1,
    in2: in2
  }));
};

Filter.prototype.subtract = function (in1, in2) {
  return this.comp("arithmetic", in1, in2, {
    k2: +1,
    k3: -1
  });
};

Filter.prototype.offset = function (dx, dy, in1) {
  return this.fe("Offset", {
    in: in1,
    dx: dx,
    dy: dy
  });
};

Filter.prototype.flood = function (color, opacity, in1) {
  return this.fe("Flood", {
    in: in1,
    "flood-color": color,
    "flood-opacity": opacity
  });
};

Filter.prototype.blur = function (dev, in1) {
  return this.fe("GaussianBlur", {
    in: in1,
    stdDeviation: [dev, dev].join(" ")
  });
};

Filter.prototype.colorMatrix = function (in1, values) {
  return this.fe("ColorMatrix", {
    in: in1,
    type: "matrix",
    values: values.join(" ")
  });
};

Filter.prototype.merge = function (children) {
  this.fe("Merge", {}, children.map(function (name) {
    return draw.el("feMergeNode", {
      in: name
    });
  }));
};

var filter = Filter;

var style = createCommonjsModule(function (module) {
  var Style = module.exports = {
    cssContent: "\n    .sb-label {\n      font-family: Lucida Grande, Verdana, Arial, DejaVu Sans, sans-serif;\n      font-weight: bold;\n      fill: #fff;\n      font-size: 10px;\n      word-spacing: +1px;\n    }\n\n    .sb-obsolete { fill: #d42828; }\n    .sb-motion { fill: #4a6cd4; }\n    .sb-looks { fill: #8a55d7; }\n    .sb-sound { fill: #bb42c3; }\n    .sb-pen { fill: #0e9a6c;  }\n    .sb-events { fill: #c88330; }\n    .sb-control { fill: #e1a91a; }\n    .sb-sensing { fill: #2ca5e2; }\n    .sb-operators { fill: #5cb712; }\n    .sb-variables { fill: #ee7d16; }\n    .sb-list { fill: #cc5b22 }\n    .sb-custom { fill: #632d99; }\n    .sb-custom-arg { fill: #5947b1; }\n    .sb-extension { fill: #4b4a60; }\n    .sb-grey { fill: #969696; }\n\n    .sb-bevel {\n      filter: url(#bevelFilter);\n    }\n\n    .sb-input {\n      filter: url(#inputBevelFilter);\n    }\n    .sb-input-number,\n    .sb-input-string,\n    .sb-input-number-dropdown {\n      fill: #fff;\n    }\n    .sb-literal-number,\n    .sb-literal-string,\n    .sb-literal-number-dropdown,\n    .sb-literal-dropdown {\n      font-weight: normal;\n      font-size: 9px;\n      word-spacing: 0;\n    }\n    .sb-literal-number,\n    .sb-literal-string,\n    .sb-literal-number-dropdown {\n      fill: #000;\n    }\n\n    .sb-darker {\n      filter: url(#inputDarkFilter);\n    }\n\n    .sb-outline {\n      stroke: #fff;\n      stroke-opacity: 0.2;\n      stroke-width: 2;\n      fill: none;\n    }\n\n    .sb-define-hat-cap {\n      stroke: #632d99;\n      stroke-width: 1;\n      fill: #8e2ec2;\n    }\n\n    .sb-comment {\n      fill: #ffffa5;\n      stroke: #d0d1d2;\n      stroke-width: 1;\n    }\n    .sb-comment-line {\n      fill: #ffff80;\n    }\n    .sb-comment-label {\n      font-family: Helevetica, Arial, DejaVu Sans, sans-serif;\n      font-weight: bold;\n      fill: #5c5d5f;\n      word-spacing: 0;\n      font-size: 12px;\n    }\n\n    .sb-diff {\n      fill: none;\n      stroke: #000;\n    }\n    .sb-diff-ins {\n      stroke-width: 2px;\n    }\n    .sb-diff-del {\n      stroke-width: 3px;\n    }\n  ".replace(/[ \n]+/, " "),
    makeIcons: function makeIcons() {
      return [draw.el("path", {
        d: "M1.504 21L0 19.493 4.567 0h1.948l-.5 2.418s1.002-.502 3.006 0c2.006.503 3.008 2.01 6.517 2.01 3.508 0 4.463-.545 4.463-.545l-.823 9.892s-2.137 1.005-5.144.696c-3.007-.307-3.007-2.007-6.014-2.51-3.008-.502-4.512.503-4.512.503L1.504 21z",
        fill: "#3f8d15",
        id: "greenFlag"
      }), draw.el("path", {
        d: "M6.724 0C3.01 0 0 2.91 0 6.5c0 2.316 1.253 4.35 3.14 5.5H5.17v-1.256C3.364 10.126 2.07 8.46 2.07 6.5 2.07 4.015 4.152 2 6.723 2c1.14 0 2.184.396 2.993 1.053L8.31 4.13c-.45.344-.398.826.11 1.08L15 8.5 13.858.992c-.083-.547-.514-.714-.963-.37l-1.532 1.172A6.825 6.825 0 0 0 6.723 0z",
        fill: "#fff",
        id: "turnRight"
      }), draw.el("path", {
        d: "M3.637 1.794A6.825 6.825 0 0 1 8.277 0C11.99 0 15 2.91 15 6.5c0 2.316-1.253 4.35-3.14 5.5H9.83v-1.256c1.808-.618 3.103-2.285 3.103-4.244 0-2.485-2.083-4.5-4.654-4.5-1.14 0-2.184.396-2.993 1.053L6.69 4.13c.45.344.398.826-.11 1.08L0 8.5 1.142.992c.083-.547.514-.714.963-.37l1.532 1.172z",
        fill: "#fff",
        id: "turnLeft"
      }), draw.el("path", {
        d: "M0 0L4 4L0 8Z",
        fill: "#111",
        id: "addInput"
      }), draw.el("path", {
        d: "M4 0L4 8L0 4Z",
        fill: "#111",
        id: "delInput"
      }), draw.setProps(draw.group([draw.el("path", {
        d: "M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2",
        fill: "#000",
        opacity: "0.3"
      }), draw.move(-1, -1, draw.el("path", {
        d: "M8 0l2 -2l0 -3l3 0l-4 -5l-4 5l3 0l0 3l-8 0l0 2",
        fill: "#fff",
        opacity: "0.9"
      }))]), {
        id: "loopArrow"
      })];
    },
    makeStyle: function makeStyle() {
      var style = draw.el("style");
      style.appendChild(draw.cdata(Style.cssContent));
      return style;
    },
    bevelFilter: function bevelFilter(id, inset) {
      var f = new filter(id);
      var alpha = "SourceAlpha";
      var s = inset ? -1 : 1;
      var blur = f.blur(1, alpha);
      f.merge(["SourceGraphic", f.comp("in", f.flood("#fff", 0.15), f.subtract(alpha, f.offset(+s, +s, blur))), f.comp("in", f.flood("#000", 0.7), f.subtract(alpha, f.offset(-s, -s, blur)))]);
      return f.el;
    },
    darkFilter: function darkFilter(id) {
      var f = new filter(id);
      f.merge(["SourceGraphic", f.comp("in", f.flood("#000", 0.2), "SourceAlpha")]);
      return f.el;
    },
    darkRect: function darkRect(w, h, category, el) {
      return draw.setProps(draw.group([draw.setProps(el, {
        class: ["sb-" + category, "sb-darker"].join(" ")
      })]), {
        width: w,
        height: h
      });
    },
    defaultFontFamily: "Lucida Grande, Verdana, Arial, DejaVu Sans, sans-serif"
  };
});
var style_1 = style.cssContent;
var style_2 = style.makeIcons;
var style_3 = style.makeStyle;
var style_4 = style.bevelFilter;
var style_5 = style.darkFilter;
var style_6 = style.darkRect;
var style_7 = style.defaultFontFamily;

var Label$3 = syntax$1.Label,
    Icon$3 = syntax$1.Icon,
    Input$3 = syntax$1.Input,
    Block$3 = syntax$1.Block,
    Comment$3 = syntax$1.Comment,
    Glow$3 = syntax$1.Glow,
    Script$3 = syntax$1.Script,
    Document$3 = syntax$1.Document;
var defaultFontFamily = style.defaultFontFamily,
    makeStyle = style.makeStyle,
    makeIcons = style.makeIcons,
    darkRect = style.darkRect,
    bevelFilter = style.bevelFilter,
    darkFilter = style.darkFilter;
/* Label */

var LabelView = function LabelView(label) {
  _extends(this, label);

  this.el = null;
  this.height = 12;
  this.metrics = null;
  this.x = 0;
};

LabelView.prototype.isLabel = true;

LabelView.prototype.draw = function () {
  return this.el;
};

Object.defineProperty(LabelView.prototype, "width", {
  get: function get() {
    return this.metrics.width;
  }
});
LabelView.metricsCache = {};
LabelView.toMeasure = [];

LabelView.prototype.measure = function () {
  var value = this.value;
  var cls = "sb-" + this.cls;
  this.el = draw.text(0, 10, value, {
    class: "sb-label " + cls
  });
  var cache = LabelView.metricsCache[cls];

  if (!cache) {
    cache = LabelView.metricsCache[cls] = Object.create(null);
  }

  if (Object.hasOwnProperty.call(cache, value)) {
    this.metrics = cache[value];
  } else {
    var font = /comment-label/.test(this.cls) ? "bold 12px Helevetica, Arial, DejaVu Sans, sans-serif" : /literal/.test(this.cls) ? "normal 9px " + defaultFontFamily : "bold 10px " + defaultFontFamily;
    this.metrics = cache[value] = LabelView.measure(value, font); // TODO: word-spacing? (fortunately it seems to have no effect!)
  }
};

LabelView.measure = function (value, font) {
  var context = LabelView.measuring;
  context.font = font;
  var textMetrics = context.measureText(value);
  var width = textMetrics.width + 0.5 | 0;
  return {
    width: width
  };
};
/* Icon */


var IconView = function IconView(icon) {
  _extends(this, icon);

  var info = IconView.icons[this.name];

  if (!info) {
    throw new Error("no info for icon: " + this.name);
  }

  _extends(this, info);
};

IconView.prototype.isIcon = true;

IconView.prototype.draw = function () {
  return draw.symbol("#" + this.name, {
    width: this.width,
    height: this.height
  });
};

IconView.icons = {
  greenFlag: {
    width: 20,
    height: 21,
    dy: -2
  },
  turnLeft: {
    width: 15,
    height: 12,
    dy: +1
  },
  turnRight: {
    width: 15,
    height: 12,
    dy: +1
  },
  loopArrow: {
    width: 14,
    height: 11
  },
  addInput: {
    width: 4,
    height: 8
  },
  delInput: {
    width: 4,
    height: 8
  }
};
/* Input */

var InputView = function InputView(input) {
  _extends(this, input);

  if (input.label) {
    this.label = newView(input.label);
  }

  this.x = 0;
};

InputView.prototype.measure = function () {
  if (this.hasLabel) this.label.measure();
};

InputView.shapes = {
  string: draw.rect,
  number: draw.roundedRect,
  "number-dropdown": draw.roundedRect,
  color: draw.rect,
  dropdown: draw.rect,
  boolean: draw.pointedRect,
  stack: draw.stackRect,
  reporter: draw.roundedRect
};

InputView.prototype.draw = function (parent) {
  if (this.hasLabel) {
    var label = this.label.draw();
    var w = Math.max(14, this.label.width + (this.shape === "string" || this.shape === "number-dropdown" ? 6 : 9));
  } else {
    var w = this.isInset ? 30 : this.isColor ? 13 : null;
  }

  if (this.hasArrow) w += 10;
  this.width = w;
  var h = this.height = this.isRound || this.isColor ? 13 : 14;
  var el = InputView.shapes[this.shape](w, h);

  if (this.isColor) {
    draw.setProps(el, {
      fill: this.value
    });
  } else if (this.isDarker) {
    el = darkRect(w, h, parent.info.category, el);

    if (parent.info.color) {
      draw.setProps(el, {
        fill: parent.info.color
      });
    }
  }

  var result = draw.group([draw.setProps(el, {
    class: ["sb-input", "sb-input-" + this.shape].join(" ")
  })]);

  if (this.hasLabel) {
    var x = this.isRound ? 5 : 4;
    result.appendChild(draw.move(x, 0, label));
  }

  if (this.hasArrow) {
    var y = this.shape === "dropdown" ? 5 : 4;
    result.appendChild(draw.move(w - 10, y, draw.polygon({
      points: [7, 0, 3.5, 4, 0, 0],
      fill: "#000",
      opacity: "0.6"
    })));
  }

  return result;
};
/* Block */


var BlockView = function BlockView(block) {
  _extends(this, block);

  this.children = block.children.map(newView);
  this.comment = this.comment ? newView(this.comment) : null;

  switch (this.info.category) {
    case "music":
      this.info.category = "sound";
      break;

    case "video":
      this.info.category = "sensing";
      break;

    case "tts":
    case "translate":
    case "wedo":
    case "ev3":
    case "microbit":
    case "makeymakey":
      this.info.category = "extension";
      break;
  }

  this.x = 0;
  this.width = null;
  this.height = null;
  this.firstLine = null;
  this.innerWidth = null;
};

BlockView.prototype.isBlock = true;

BlockView.prototype.measure = function () {
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if (child.measure) child.measure();
  }

  if (this.comment) this.comment.measure();
};

BlockView.shapes = {
  stack: draw.stackRect,
  "c-block": draw.stackRect,
  "if-block": draw.stackRect,
  celse: draw.stackRect,
  cend: draw.stackRect,
  cap: draw.capRect,
  reporter: draw.roundedRect,
  boolean: draw.pointedRect,
  hat: draw.hatRect,
  cat: draw.hatRect,
  "define-hat": draw.procHatRect,
  ring: draw.roundedRect
};

BlockView.prototype.drawSelf = function (w, h, lines) {
  // mouths
  if (lines.length > 1) {
    return draw.mouthRect(w, h, this.isFinal, lines, {
      class: ["sb-" + this.info.category, "sb-bevel"].join(" ")
    });
  } // outlines


  if (this.info.shape === "outline") {
    return draw.setProps(draw.stackRect(w, h), {
      class: "sb-outline"
    });
  } // rings


  if (this.isRing) {
    var child = this.children[0];

    if (child && (child.isInput || child.isBlock || child.isScript)) {
      var shape = child.isScript ? "stack" : child.isInput ? child.shape : child.info.shape;
      return draw.ringRect(w, h, child.y, child.width, child.height, shape, {
        class: ["sb-" + this.info.category, "sb-bevel"].join(" ")
      });
    }
  }

  var func = BlockView.shapes[this.info.shape];

  if (!func) {
    throw new Error("no shape func: " + this.info.shape);
  }

  return func(w, h, {
    class: ["sb-" + this.info.category, "sb-bevel"].join(" ")
  });
};

BlockView.prototype.minDistance = function (child) {
  if (this.isBoolean) {
    return child.isReporter ? 4 + child.height / 4 | 0 : child.isLabel ? 5 + child.height / 2 | 0 : child.isBoolean || child.shape === "boolean" ? 5 : 2 + child.height / 2 | 0;
  }

  if (this.isReporter) {
    return child.isInput && child.isRound || (child.isReporter || child.isBoolean) && !child.hasScript ? 0 : child.isLabel ? 2 + child.height / 2 | 0 : -2 + child.height / 2 | 0;
  }

  return 0;
};

BlockView.padding = {
  hat: [15, 6, 2],
  cat: [15, 6, 2],
  "define-hat": [21, 8, 9],
  reporter: [3, 4, 1],
  boolean: [3, 4, 2],
  cap: [6, 6, 2],
  "c-block": [3, 6, 2],
  "if-block": [3, 6, 2],
  ring: [4, 4, 2],
  null: [4, 6, 2]
};

BlockView.prototype.draw = function () {
  var isDefine = this.info.shape === "define-hat";
  var children = this.children;
  var padding = BlockView.padding[this.info.shape] || BlockView.padding[null];
  var pt = padding[0],
      px = padding[1],
      pb = padding[2];
  var y = 0;

  var Line = function Line(y) {
    this.y = y;
    this.width = 0;
    this.height = y ? 13 : 16;
    this.children = [];
  };

  var innerWidth = 0;
  var scriptWidth = 0;
  var line = new Line(y);

  function pushLine(isLast) {
    if (lines.length === 0) {
      line.height += pt + pb;
    } else {
      line.height += isLast ? 0 : +2;
      line.y -= 1;
    }

    y += line.height;
    lines.push(line);
  }

  if (this.info.isRTL) {
    var start = 0;

    var flip = function () {
      children = children.slice(0, start).concat(children.slice(start, i).reverse()).concat(children.slice(i));
    }.bind(this);

    for (var i = 0; i < children.length; i++) {
      if (children[i].isScript) {
        flip();
        start = i + 1;
      }
    }

    if (start < i) {
      flip();
    }
  }

  var lines = [];

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    child.el = child.draw(this);

    if (child.isScript && this.isCommand) {
      this.hasScript = true;
      pushLine();
      child.y = y;
      lines.push(child);
      scriptWidth = Math.max(scriptWidth, Math.max(1, child.width));
      child.height = Math.max(12, child.height) + 3;
      y += child.height;
      line = new Line(y);
    } else if (child.isArrow) {
      line.children.push(child);
    } else {
      var cmw = i > 0 ? 30 : 0; // 27

      var md = this.isCommand ? 0 : this.minDistance(child);
      var mw = this.isCommand ? child.isBlock || child.isInput ? cmw : 0 : md;

      if (mw && !lines.length && line.width < mw - px) {
        line.width = mw - px;
      }

      child.x = line.width;
      line.width += child.width;
      innerWidth = Math.max(innerWidth, line.width + Math.max(0, md - px));
      line.width += 4;

      if (!child.isLabel) {
        line.height = Math.max(line.height, child.height);
      }

      line.children.push(child);
    }
  }

  pushLine(true);
  innerWidth = Math.max(innerWidth + px * 2, this.isHat || this.hasScript ? 83 : this.isCommand || this.isOutline || this.isRing ? 39 : 20);
  this.height = y;
  this.width = scriptWidth ? Math.max(innerWidth, 15 + scriptWidth) : innerWidth;

  if (isDefine) {
    var p = Math.min(26, 3.5 + 0.13 * innerWidth | 0) - 18;
    this.height += p;
    pt += 2 * p;
  }

  this.firstLine = lines[0];
  this.innerWidth = innerWidth;
  var objects = [];

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];

    if (line.isScript) {
      objects.push(draw.move(15, line.y, line.el));
      continue;
    }

    var h = line.height;

    for (var j = 0; j < line.children.length; j++) {
      var child = line.children[j];

      if (child.isArrow) {
        objects.push(draw.move(innerWidth - 15, this.height - 3, child.el));
        continue;
      }

      var y = pt + (h - child.height - pt - pb) / 2 - 1;

      if (isDefine && child.isLabel) {
        y += 3;
      } else if (child.isIcon) {
        y += child.dy | 0;
      }

      if (this.isRing) {
        child.y = line.y + y | 0;

        if (child.isInset) {
          continue;
        }
      }

      objects.push(draw.move(px + child.x, line.y + y | 0, child.el));

      if (child.diff === "+") {
        var ellipse = draw.insEllipse(child.width, child.height);
        objects.push(draw.move(px + child.x, line.y + y | 0, ellipse));
      }
    }
  }

  var el = this.drawSelf(innerWidth, this.height, lines);
  objects.splice(0, 0, el);

  if (this.info.color) {
    draw.setProps(el, {
      fill: this.info.color
    });
  }

  return draw.group(objects);
};
/* Comment */


var CommentView = function CommentView(comment) {
  _extends(this, comment);

  this.label = newView(comment.label);
  this.width = null;
};

CommentView.prototype.isComment = true;
CommentView.lineLength = 12;
CommentView.prototype.height = 20;

CommentView.prototype.measure = function () {
  this.label.measure();
};

CommentView.prototype.draw = function () {
  var labelEl = this.label.draw();
  this.width = this.label.width + 16;
  return draw.group([draw.commentLine(this.hasBlock ? CommentView.lineLength : 0, 6), draw.commentRect(this.width, this.height, {
    class: "sb-comment"
  }), draw.move(8, 4, labelEl)]);
};
/* Glow */


var GlowView = function GlowView(glow) {
  _extends(this, glow);

  this.child = newView(glow.child);
  this.width = null;
  this.height = null;
  this.y = 0;
};

GlowView.prototype.isGlow = true;

GlowView.prototype.measure = function () {
  this.child.measure();
};

GlowView.prototype.drawSelf = function () {
  var c = this.child;
  var el;
  var w = this.width;
  var h = this.height - 1;

  if (c.isScript) {
    if (!c.isEmpty && c.blocks[0].isHat) {
      el = draw.hatRect(w, h);
    } else if (c.isFinal) {
      el = draw.capRect(w, h);
    } else {
      el = draw.stackRect(w, h);
    }
  } else {
    var el = c.drawSelf(w, h, []);
  }

  return draw.setProps(el, {
    class: "sb-diff sb-diff-ins"
  });
}; // TODO how can we always raise Glows above their parents?


GlowView.prototype.draw = function () {
  var c = this.child;
  var el = c.isScript ? c.draw(true) : c.draw();
  this.width = c.width;
  this.height = c.isBlock && c.firstLine.height || c.height; // encircle

  return draw.group([el, this.drawSelf()]);
};
/* Script */


var ScriptView = function ScriptView(script) {
  _extends(this, script);

  this.blocks = script.blocks.map(newView);
  this.y = 0;
};

ScriptView.prototype.isScript = true;

ScriptView.prototype.measure = function () {
  for (var i = 0; i < this.blocks.length; i++) {
    this.blocks[i].measure();
  }
};

ScriptView.prototype.draw = function (inside) {
  var children = [];
  var y = 0;
  this.width = 0;

  for (var i = 0; i < this.blocks.length; i++) {
    var block = this.blocks[i];
    var x = inside ? 0 : 2;
    var child = block.draw();
    children.push(draw.move(x, y, child));
    this.width = Math.max(this.width, block.width);
    var diff = block.diff;

    if (diff === "-") {
      var dw = block.width;
      var dh = block.firstLine.height || block.height;
      children.push(draw.move(x, y + dh / 2 + 1, draw.strikethroughLine(dw)));
      this.width = Math.max(this.width, block.width);
    }

    y += block.height;
    var comment = block.comment;

    if (comment) {
      var line = block.firstLine;
      var cx = block.innerWidth + 2 + CommentView.lineLength;
      var cy = y - block.height + line.height / 2;
      var el = comment.draw();
      children.push(draw.move(cx, cy - comment.height / 2, el));
      this.width = Math.max(this.width, cx + comment.width);
    }
  }

  this.height = y;

  if (!inside && !this.isFinal) {
    this.height += 3;
  }

  if (!inside && block.isGlow) {
    this.height += 2; // TODO unbreak this
  }

  return draw.group(children);
};
/* Document */


var DocumentView = function DocumentView(doc) {
  _extends(this, doc);

  this.scripts = doc.scripts.map(newView);
  this.width = null;
  this.height = null;
  this.el = null;
  this.defs = null;
};

DocumentView.prototype.measure = function () {
  this.scripts.forEach(function (script) {
    script.measure();
  });
};

DocumentView.prototype.render = function (cb) {
  if (typeof ocbptions === "function") {
    throw new Error("render() no longer takes a callback");
  } // measure strings


  this.measure(); // TODO: separate layout + render steps.
  // render each script

  var width = 0;
  var height = 0;
  var elements = [];

  for (var i = 0; i < this.scripts.length; i++) {
    var script = this.scripts[i];
    if (height) height += 10;
    script.y = height;
    elements.push(draw.move(0, height, script.draw()));
    height += script.height;
    width = Math.max(width, script.width + 4);
  }

  this.width = width;
  this.height = height; // return SVG

  var svg = draw.newSVG(width, height);
  svg.appendChild(this.defs = draw.withChildren(draw.el("defs"), [bevelFilter("bevelFilter", false), bevelFilter("inputBevelFilter", true), darkFilter("inputDarkFilter")].concat(makeIcons())));
  svg.appendChild(draw.group(elements));
  this.el = svg;
  return svg;
};
/* Export SVG image as XML string */


DocumentView.prototype.exportSVGString = function () {
  if (this.el == null) {
    throw new Error("call draw() first");
  }

  var style$$1 = makeStyle();
  this.defs.appendChild(style$$1);
  var xml = new draw.XMLSerializer().serializeToString(this.el);
  this.defs.removeChild(style$$1);
  return xml;
};
/* Export SVG image as data URI */


DocumentView.prototype.exportSVG = function () {
  var xml = this.exportSVGString();
  return "data:image/svg+xml;utf8," + xml.replace(/[#]/g, encodeURIComponent);
};

DocumentView.prototype.toCanvas = function (cb, scale) {
  scale = scale || 1.0;
  var canvas = draw.makeCanvas();
  canvas.width = this.width * scale;
  canvas.height = this.height * scale;
  var context = canvas.getContext("2d");
  var image = new Image();
  image.src = this.exportSVG();

  image.onload = function () {
    context.save();
    context.scale(scale, scale);
    context.drawImage(image, 0, 0);
    context.restore();
    cb(canvas);
  };
};

DocumentView.prototype.exportPNG = function (cb, scale) {
  this.toCanvas(function (canvas) {
    if (URL && URL.createObjectURL && Blob && canvas.toBlob) {
      var blob = canvas.toBlob(function (blob) {
        cb(URL.createObjectURL(blob));
      }, "image/png");
    } else {
      cb(canvas.toDataURL("image/png"));
    }
  }, scale);
};
/* view */


var viewFor = function viewFor(node) {
  switch (node.constructor) {
    case Label$3:
      return LabelView;

    case Icon$3:
      return IconView;

    case Input$3:
      return InputView;

    case Block$3:
      return BlockView;

    case Comment$3:
      return CommentView;

    case Glow$3:
      return GlowView;

    case Script$3:
      return ScriptView;

    case Document$3:
      return DocumentView;

    default:
      throw new Error("no view for " + node.constructor.name);
  }
};

var newView = function newView(node) {
  return new (viewFor(node))(node);
};

var blocks$1 = {
  newView: newView,
  LabelView: LabelView
};

function init(window) {
  draw.init(window);

  blocks$1.LabelView.measuring = function () {
    var canvas = draw.makeCanvas();
    return canvas.getContext("2d");
  }();
}

var scratch2 = {
  init: init,
  newView: blocks$1.newView,
  makeStyle: style.makeStyle
};

var draw$1 = createCommonjsModule(function (module) {
  /* for constucting SVGs */
  function extend(src, dest) {
    return _extends({}, src, dest);
  }


  var document;
  var xml;
  var directProps = {
    textContent: true
  };
  var SVG = module.exports = {
    init: function init(window) {
      document = window.document;
      var DOMParser = window.DOMParser;
      xml = new DOMParser().parseFromString("<xml></xml>", "application/xml");
      SVG.XMLSerializer = window.XMLSerializer;
    },
    makeCanvas: function makeCanvas() {
      return document.createElement("canvas");
    },
    cdata: function cdata(content) {
      return xml.createCDATASection(content);
    },
    el: function el(name, props) {
      var el = document.createElementNS("http://www.w3.org/2000/svg", name);
      return SVG.setProps(el, props);
    },
    setProps: function setProps(el, props) {
      for (var key in props) {
        var value = "" + props[key];

        if (directProps[key]) {
          el[key] = value;
        } else if (/^xlink:/.test(key)) {
          el.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value);
        } else if (props[key] !== null && props.hasOwnProperty(key)) {
          el.setAttributeNS(null, key, value);
        }
      }

      return el;
    },
    withChildren: function withChildren(el, children) {
      for (var i = 0; i < children.length; i++) {
        el.appendChild(children[i]);
      }

      return el;
    },
    group: function group(children) {
      return SVG.withChildren(SVG.el("g"), children);
    },
    newSVG: function newSVG(width, height) {
      return SVG.el("svg", {
        version: "1.1",
        width: width,
        height: height
      });
    },
    polygon: function polygon(props) {
      return SVG.el("polygon", extend(props, {
        points: props.points.join(" ")
      }));
    },
    path: function path(props) {
      return SVG.el("path", extend(props, {
        path: null,
        d: props.path.join(" ")
      }));
    },
    text: function text(x, y, content, props) {
      var text = SVG.el("text", extend(props, {
        x: x,
        y: y,
        textContent: content
      }));
      return text;
    },
    symbol: function symbol(href) {
      return SVG.el("use", {
        "xlink:href": href
      });
    },
    move: function move(dx, dy, el) {
      SVG.setProps(el, {
        transform: ["translate(", dx, " ", dy, ")"].join("")
      });
      return el;
    },

    /* shapes */
    rect: function rect(w, h, props) {
      return SVG.el("rect", extend(props, {
        x: 0,
        y: 0,
        width: w,
        height: h
      }));
    },
    roundRect: function roundRect(w, h, props) {
      return SVG.rect(w, h, extend(props, {
        rx: 4,
        ry: 4
      }));
    },
    pillRect: function pillRect(w, h, props) {
      var r = h / 2;
      return SVG.rect(w, h, extend(props, {
        rx: r,
        ry: r
      }));
    },
    pointedPath: function pointedPath(w, h) {
      var r = h / 2;
      return [["M", r, 0].join(" "), ["L", w - r, 0, w, r].join(" "), ["L", w, r, w - r, h].join(" "), ["L", r, h, 0, r].join(" "), ["L", 0, r, r, 0].join(" "), "Z"];
    },
    pointedRect: function pointedRect(w, h, props) {
      return SVG.path(extend(props, {
        path: SVG.pointedPath(w, h)
      }));
    },
    topNotch: function topNotch(w, y) {
      return ["c 2 0 3 1 4 2", "l 4 4", "c 1 1 2 2 4 2", "h 12", "c 2 0 3 -1 4 -2", "l 4 -4", "c 1 -1 2 -2 4 -2", ["L", w - 4, y].join(" "), "a 4 4 0 0 1 4 4"].join(" ");
    },
    getTop: function getTop(w) {
      return ["M 0 4", "A 4 4 0 0 1 4 0", "H 12", SVG.topNotch(w, 0)].join(" ");
    },
    getRingTop: function getRingTop(w) {
      return ["M", 0, 3, "L", 3, 0, "L", 7, 0, "L", 10, 3, "L", 16, 3, "L", 19, 0, "L", w - 3, 0, "L", w, 3].join(" ");
    },
    getRightAndBottom: function getRightAndBottom(w, y, hasNotch, inset) {
      if (typeof inset === "undefined") {
        inset = 0;
      }

      var arr = [["L", w, y - 4].join(" "), ["a", 4, 4, 0, 0, 1, -4, 4].join(" ")];

      if (hasNotch) {
        arr = arr.concat([["L", inset + 48, y].join(" "), "c -2 0 -3 1 -4 2", "l -4 4", "c -1 1 -2 2 -4 2", "h -12", "c -2 0 -3 -1 -4 -2", "l -4 -4", "c -1 -1 -2 -2 -4 -2"]);
      }

      if (inset === 0) {
        arr.push("L", inset + 4, y);
        arr.push("a 4 4 0 0 1 -4 -4");
      } else {
        arr.push("L", inset + 4, y);
        arr.push("a 4 4 0 0 0 -4 4");
      }

      return arr.join(" ");
    },
    getArm: function getArm(w, armTop) {
      return [["L", 16, armTop - 4].join(" "), "a 4 4 0 0 0 4 4", ["L", 28, armTop].join(" "), SVG.topNotch(w, armTop)].join(" ");
    },
    getArmNoNotch: function getArmNoNotch(w, armTop) {
      return [["L", 16, armTop - 4].join(" "), "a 4 4 0 0 0 4 4", ["L", 28, armTop].join(" "), ["L", w - 4, armTop].join(" "), "a 4 4 0 0 1 4 4"].join(" ");
    },
    stackRect: function stackRect(w, h, props) {
      return SVG.path(extend(props, {
        path: [SVG.getTop(w), SVG.getRightAndBottom(w, h, true, 0), "Z"]
      }));
    },
    capPath: function capPath(w, h) {
      return [SVG.getTop(w), SVG.getRightAndBottom(w, h, false, 0), "Z"];
    },
    ringCapPath: function ringCapPath(w, h) {
      return [SVG.getRingTop(w), SVG.getRightAndBottom(w, h, false, 0), "Z"];
    },
    capRect: function capRect(w, h, props) {
      return SVG.path(extend(props, {
        path: SVG.capPath(w, h)
      }));
    },
    getHatTop: function getHatTop(w) {
      return ["M 0 16", "c 25,-22 71,-22 96,0", ["L", w - 4, 16].join(" "), "a 4 4 0 0 1 4 4"].join(" ");
    },
    getCatTop: function getCatTop(w) {
      return ["M 0 32", "c2.6,-2.3 5.5,-4.3 8.5,-6.2c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4c8.4,-1.3 17,-1.3 25.4,0c1.9,-2.3 14.7,-17.2 18.4,-15.4c3.1,1.5 9.4,12.3 8.4,24.8c3,1.8 5.9,3.9 8.5,6.1", ["L", w - 4, 32].join(" "), "a 4 4 0 0 1 4 4"].join(" ");
    },
    hatRect: function hatRect(w, h, props) {
      return SVG.path(extend(props, {
        path: [SVG.getHatTop(w), SVG.getRightAndBottom(w, h, true, 0), "Z"]
      }));
    },
    catHat: function catHat(w, h, props) {
      return SVG.group([SVG.path(extend(props, {
        path: [SVG.getCatTop(w), SVG.getRightAndBottom(w, h, true, 0), "Z"]
      })), SVG.move(0, 32, SVG.setProps(SVG.group([SVG.el("circle", {
        cx: 29.1,
        cy: -3.3,
        r: 3.4
      }), SVG.el("circle", {
        cx: 59.2,
        cy: -3.3,
        r: 3.4
      }), SVG.el("path", {
        d: "M45.6,0.1c-0.9,0-1.7-0.3-2.3-0.9c-0.6,0.6-1.3,0.9-2.2,0.9c-0.9,0-1.8-0.3-2.3-0.9c-1-1.1-1.1-2.6-1.1-2.8c0-0.5,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1c0,0.4,0.1,1.7,1.4,1.7c0.5,0,0.7-0.2,0.8-0.3c0.3-0.3,0.4-1,0.4-1.3c0-0.1,0-0.1,0-0.2c0-0.5,0.5-1,1-1l0,0c0.5,0,1,0.4,1,1c0,0,0,0.1,0,0.2c0,0.3,0.1,0.9,0.4,1.2C44.8-2.2,45-2,45.5-2s0.7-0.2,0.8-0.3c0.3-0.4,0.4-1.1,0.3-1.3c0-0.5,0.4-1,0.9-1.1c0.5,0,1,0.4,1.1,0.9c0,0.2,0.1,1.8-0.8,2.8C47.5-0.4,46.8,0.1,45.6,0.1z"
      })]), {
        fill: "#000",
        "fill-opacity": 0.6
      })), SVG.move(0, 32, SVG.el("path", {
        d: "M73.1-15.6c1.7-4.2,4.5-9.1,5.8-8.5c1.6,0.8,5.4,7.9,5,15.4c0,0.6-0.7,0.7-1.1,0.5c-3-1.6-6.4-2.8-8.6-3.6C72.8-12.3,72.4-13.7,73.1-15.6z",
        fill: "#FFD5E6",
        transform: "translate(0, 32)"
      })), SVG.move(0, 32, SVG.el("path", {
        d: "M22.4-15.6c-1.7-4.2-4.5-9.1-5.8-8.5c-1.6,0.8-5.4,7.9-5,15.4c0,0.6,0.7,0.7,1.1,0.5c3-1.6,6.4-2.8,8.6-3.6C22.8-12.3,23.2-13.7,22.4-15.6z",
        fill: "#FFD5E6",
        transform: "translate(0, 32)"
      }))]);
    },
    getProcHatTop: function getProcHatTop(w) {
      return ["M 0 20", "a 20 20 0 0 1 20 -20", ["L", w - 20, 0].join(" "), "a 20,20 0 0,1 20,20"].join(" ");
    },
    procHatRect: function procHatRect(w, h, props) {
      return SVG.path(extend(props, {
        path: [SVG.getProcHatTop(w), SVG.getRightAndBottom(w, h, true, 0), "Z"]
      }));
    },
    mouthRect: function mouthRect(w, h, isFinal, lines, props) {
      var y = lines[0].height;
      var p = [SVG.getTop(w), SVG.getRightAndBottom(w, y, true, 16)];

      for (var i = 1; i < lines.length; i += 2) {
        var isLast = i + 2 === lines.length;
        var line = lines[i];
        y += line.height - 3;

        if (line.isFinal) {
          p.push(SVG.getArmNoNotch(w, y));
        } else {
          p.push(SVG.getArm(w, y));
        }

        var hasNotch = !(isLast && isFinal);
        var inset = isLast ? 0 : 16;
        y += lines[i + 1].height + 3;
        p.push(SVG.getRightAndBottom(w, y, hasNotch, inset));
      }

      p.push("Z");
      return SVG.path(extend(props, {
        path: p
      }));
    },
    commentRect: function commentRect(w, h, props) {
      return SVG.roundRect(w, h, extend(props, {
        class: "sb3-comment"
      }));
    },
    commentLine: function commentLine(width, props) {
      return SVG.move(-width, 9, SVG.rect(width, 2, extend(props, {
        class: "sb3-comment-line"
      })));
    },
    strikethroughLine: function strikethroughLine(w, props) {
      return SVG.path(extend(props, {
        path: ["M", 0, 0, "L", w, 0],
        class: "sb3-diff sb3-diff-del"
      }));
    }
  };
});
var draw_1$1 = draw$1.init;
var draw_2$1 = draw$1.makeCanvas;
var draw_3$1 = draw$1.cdata;
var draw_4$1 = draw$1.el;
var draw_5$1 = draw$1.setProps;
var draw_6$1 = draw$1.withChildren;
var draw_7$1 = draw$1.group;
var draw_8$1 = draw$1.newSVG;
var draw_9$1 = draw$1.polygon;
var draw_10$1 = draw$1.path;
var draw_11$1 = draw$1.text;
var draw_12$1 = draw$1.symbol;
var draw_13$1 = draw$1.move;
var draw_14$1 = draw$1.rect;
var draw_15$1 = draw$1.roundRect;
var draw_16$1 = draw$1.pillRect;
var draw_17$1 = draw$1.pointedPath;
var draw_18$1 = draw$1.pointedRect;
var draw_19$1 = draw$1.topNotch;
var draw_20$1 = draw$1.getTop;
var draw_21$1 = draw$1.getRingTop;
var draw_22$1 = draw$1.getRightAndBottom;
var draw_23$1 = draw$1.getArm;
var draw_24$1 = draw$1.getArmNoNotch;
var draw_25$1 = draw$1.stackRect;
var draw_26$1 = draw$1.capPath;
var draw_27$1 = draw$1.ringCapPath;
var draw_28$1 = draw$1.capRect;
var draw_29$1 = draw$1.getHatTop;
var draw_30$1 = draw$1.getCatTop;
var draw_31$1 = draw$1.hatRect;
var draw_32$1 = draw$1.catHat;
var draw_33$1 = draw$1.getProcHatTop;
var draw_34$1 = draw$1.procHatRect;
var draw_35$1 = draw$1.mouthRect;
var draw_36$1 = draw$1.commentRect;
var draw_37$1 = draw$1.commentLine;
var draw_38$1 = draw$1.strikethroughLine;

var style$1 = createCommonjsModule(function (module) {
  var Style = module.exports = {
    cssContent: "\n    .sb3-label {\n      font: 500 12pt Sarabun, Helevetica Neue, Helvetica, sans-serif;\n      fill: #fff;\n      word-spacing: +1pt;\n    }\n\n    .sb3-motion { fill: #4c97ff; stroke: #3373cc; }\n    .sb3-motion-alt { fill: #4280d7; }\n    .sb3-motion-dark { fill: #4c97ff; }\n    .sb3-looks { fill: #9966ff; stroke: #774dcb; }\n    .sb3-looks-alt { fill: #855cd6; }\n    .sb3-looks-dark { fill: #bd42bd; }\n    .sb3-sound { fill: #cf63cf; stroke: #bd42bd; }\n    .sb3-sound-alt { fill: #c94fc9; }\n    .sb3-sound-dark { fill: #bd42bd; }\n    .sb3-control { fill: #ffab19; stroke: #cf8b17; }\n    .sb3-control-alt { fill: #ec9c13; }\n    .sb3-control-dark { fill: #cf8b17; }\n    .sb3-events { fill: #ffbf00; stroke: #cc9900; }\n    .sb3-events-alt { fill: #e6ac00; }\n    .sb3-events-dark { fill: #cc9900; }\n    .sb3-sensing { fill: #5cb1d6; stroke: #2e8eb8; }\n    .sb3-sensing-alt { fill: #47a8d1; }\n    .sb3-sensing-dark { fill: #2e8eb8; }\n    .sb3-operators { fill: #59c059; stroke: #389438; }\n    .sb3-operators-alt { fill: #46b946; }\n    .sb3-operators-dark { fill: #389438; }\n    .sb3-variables { fill: #ff8c1a; stroke: #db6e00; }\n    .sb3-variables-alt { fill: #ff8000; }\n    .sb3-variables-dark { fill: #db6e00; }\n    .sb3-list { fill: #ff661a; stroke: #e64d00; }\n    .sb3-list-alt { fill: #ff5500; }\n    .sb3-list-dark { fill: #e64d00; }\n    .sb3-custom { fill: #ff6680; stroke: #ff3355; }\n    .sb3-custom-alt { fill: #ff4d6a; }\n    .sb3-custom-dark { fill: #ff3355; }\n    .sb3-custom-arg { fill: #ff6680; stroke: #ff3355; }\n\n    /* extension blocks, e.g. pen */\n    .sb3-extension { fill: #0fbd8c; stroke: #0b8e69; }\n    .sb3-extension-alt { fill: #0da57a; }\n    .sb3-extension-line { stroke: #0da57a; }\n    .sb3-extension-dark { fill: #0b8e69; }\n\n    /* obsolete colors: chosen by hand, indicates invalid blocks */ \n    .sb3-obsolete { fill: #ed4242; stroke: #ca2b2b; }\n    .sb3-obsolete-alt { fill: #db3333; }\n    .sb3-obsolete-dark { fill: #ca2b2b; }\n\n    /* grey: special color from the Scratch 3.0 design mockups */\n    .sb3-grey { fill: #bfbfbf; stroke: #909090; }\n    .sb3-grey-alt { fill: #b2b2b2; }\n    .sb3-grey-dark { fill: #909090; }\n\n    .sb3-input-color {\n      stroke: #fff;\n    }\n\n    .sb3-input-number,\n    .sb3-input-string {\n      fill: #fff;\n    }\n    .sb3-literal-number,\n    .sb3-literal-string,\n    .sb3-literal-number-dropdown,\n    .sb3-literal-dropdown {\n      word-spacing: 0;\n    }\n    .sb3-literal-number,\n    .sb3-literal-string {\n      fill: #575e75;\n    }\n\n    .sb3-comment {\n      fill: #ffffa5;\n      stroke: #d0d1d2;\n      stroke-width: 1;\n    }\n    .sb3-comment-line {\n      fill: #ffff80;\n    }\n    .sb3-comment-label {\n      font: 400 12pt Helevetica Neue, Helvetica, sans-serif;\n      fill: #000;\n      word-spacing: 0;\n    }\n\n    .sb3-diff {\n      fill: none;\n      stroke: #000;\n    }\n    .sb3-diff-ins {\n      stroke-width: 2px;\n    }\n    .sb3-diff-del {\n      stroke-width: 3px;\n    }\n  ".replace(/[ \n]+/, " "),
    makeIcons: function makeIcons() {
      return [draw$1.setProps(draw$1.group([draw$1.el("path", {
        d: "M20.8 3.7c-.4-.2-.9-.1-1.2.2-2 1.6-4.8 1.6-6.8 0-2.3-1.9-5.6-2.3-8.3-1v-.4c0-.6-.5-1-1-1s-1 .4-1 1v18.8c0 .5.5 1 1 1h.1c.5 0 1-.5 1-1v-6.4c1-.7 2.1-1.2 3.4-1.3 1.2 0 2.4.4 3.4 1.2 2.9 2.3 7 2.3 9.8 0 .3-.2.4-.5.4-.9V4.7c0-.5-.3-.9-.8-1zm-.3 10.2C18 16 14.4 16 11.9 14c-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2l.1.1-.1 9.2z",
        fill: "#45993d"
      }), draw$1.el("path", {
        d: "M20.6 4.8l-.1 9.1v.1c-2.5 2-6.1 2-8.6 0-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2c0 .1.1.1.1.2z",
        fill: "#4cbf56"
      })]), {
        id: "sb3-greenFlag"
      }), draw$1.setProps(draw$1.group([draw$1.el("path", {
        d: "M12.71 2.44A2.41 2.41 0 0 1 12 4.16L8.08 8.08a2.45 2.45 0 0 1-3.45 0L.72 4.16A2.42 2.42 0 0 1 0 2.44 2.48 2.48 0 0 1 .71.71C1 .47 1.43 0 6.36 0s5.39.46 5.64.71a2.44 2.44 0 0 1 .71 1.73z",
        fill: "#231f20",
        opacity: ".1"
      }), draw$1.el("path", {
        d: "M6.36 7.79a1.43 1.43 0 0 1-1-.42L1.42 3.45a1.44 1.44 0 0 1 0-2c.56-.56 9.31-.56 9.87 0a1.44 1.44 0 0 1 0 2L7.37 7.37a1.43 1.43 0 0 1-1.01.42z",
        fill: "#fff"
      })]), {
        id: "sb3-dropdownArrow",
        transform: "scale(0.944)"
      }), draw$1.setProps(draw$1.group([draw$1.el("path", {
        d: "M22.68 12.2a1.6 1.6 0 0 1-1.27.63h-7.69a1.59 1.59 0 0 1-1.16-2.58l1.12-1.41a4.82 4.82 0 0 0-3.14-.77 4.31 4.31 0 0 0-2 .8A4.25 4.25 0 0 0 7.2 10.6a5.06 5.06 0 0 0 .54 4.62A5.58 5.58 0 0 0 12 17.74a2.26 2.26 0 0 1-.16 4.52A10.25 10.25 0 0 1 3.74 18a10.14 10.14 0 0 1-1.49-9.22 9.7 9.7 0 0 1 2.83-4.14A9.92 9.92 0 0 1 9.66 2.5a10.66 10.66 0 0 1 7.72 1.68l1.08-1.35a1.57 1.57 0 0 1 1.24-.6 1.6 1.6 0 0 1 1.54 1.21l1.7 7.37a1.57 1.57 0 0 1-.26 1.39z",
        fill: "#3d79cc"
      }), draw$1.el("path", {
        d: "M21.38 11.83h-7.61a.59.59 0 0 1-.43-1l1.75-2.19a5.9 5.9 0 0 0-4.7-1.58 5.07 5.07 0 0 0-4.11 3.17A6 6 0 0 0 7 15.77a6.51 6.51 0 0 0 5 2.92 1.31 1.31 0 0 1-.08 2.62 9.3 9.3 0 0 1-7.35-3.82 9.16 9.16 0 0 1-1.4-8.37A8.51 8.51 0 0 1 5.71 5.4a8.76 8.76 0 0 1 4.11-1.92 9.71 9.71 0 0 1 7.75 2.07l1.67-2.1a.59.59 0 0 1 1 .21L22 11.08a.59.59 0 0 1-.62.75z",
        fill: "#fff"
      })]), {
        id: "sb3-turnRight"
      }), draw$1.setProps(draw$1.group([draw$1.el("path", {
        d: "M20.34 18.21a10.24 10.24 0 0 1-8.1 4.22 2.26 2.26 0 0 1-.16-4.52 5.58 5.58 0 0 0 4.25-2.53 5.06 5.06 0 0 0 .54-4.62A4.25 4.25 0 0 0 15.55 9a4.31 4.31 0 0 0-2-.8 4.82 4.82 0 0 0-3.15.8l1.12 1.41A1.59 1.59 0 0 1 10.36 13H2.67a1.56 1.56 0 0 1-1.26-.63A1.54 1.54 0 0 1 1.13 11l1.72-7.43A1.59 1.59 0 0 1 4.38 2.4a1.57 1.57 0 0 1 1.24.6L6.7 4.35a10.66 10.66 0 0 1 7.72-1.68A9.88 9.88 0 0 1 19 4.81 9.61 9.61 0 0 1 21.83 9a10.08 10.08 0 0 1-1.49 9.21z",
        fill: "#3d79cc"
      }), draw$1.el("path", {
        d: "M19.56 17.65a9.29 9.29 0 0 1-7.35 3.83 1.31 1.31 0 0 1-.08-2.62 6.53 6.53 0 0 0 5-2.92 6.05 6.05 0 0 0 .67-5.51 5.32 5.32 0 0 0-1.64-2.16 5.21 5.21 0 0 0-2.48-1A5.86 5.86 0 0 0 9 8.84L10.74 11a.59.59 0 0 1-.43 1H2.7a.6.6 0 0 1-.6-.75l1.71-7.42a.59.59 0 0 1 1-.21l1.67 2.1a9.71 9.71 0 0 1 7.75-2.07 8.84 8.84 0 0 1 4.12 1.92 8.68 8.68 0 0 1 2.54 3.72 9.14 9.14 0 0 1-1.33 8.36z",
        fill: "#fff"
      })]), {
        id: "sb3-turnLeft"
      }), draw$1.el("path", {
        d: "M0 0L4 4L0 8Z",
        fill: "#111",
        id: "sb3-addInput"
      }), draw$1.el("path", {
        d: "M4 0L4 8L0 4Z",
        fill: "#111",
        id: "sb3-delInput"
      }), draw$1.setProps(draw$1.group([draw$1.el("path", {
        d: "M23.3 11c-.3.6-.9 1-1.5 1h-1.6c-.1 1.3-.5 2.5-1.1 3.6-.9 1.7-2.3 3.2-4.1 4.1-1.7.9-3.6 1.2-5.5.9-1.8-.3-3.5-1.1-4.9-2.3-.7-.7-.7-1.9 0-2.6.6-.6 1.6-.7 2.3-.2H7c.9.6 1.9.9 2.9.9s1.9-.3 2.7-.9c1.1-.8 1.8-2.1 1.8-3.5h-1.5c-.9 0-1.7-.7-1.7-1.7 0-.4.2-.9.5-1.2l4.4-4.4c.7-.6 1.7-.6 2.4 0L23 9.2c.5.5.6 1.2.3 1.8z",
        fill: "#cf8b17"
      }), draw$1.el("path", {
        d: "M21.8 11h-2.6c0 1.5-.3 2.9-1 4.2-.8 1.6-2.1 2.8-3.7 3.6-1.5.8-3.3 1.1-4.9.8-1.6-.2-3.2-1-4.4-2.1-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1 1 .7 2.2 1.1 3.4 1.1s2.3-.3 3.3-1c.9-.6 1.6-1.5 2-2.6.3-.9.4-1.8.2-2.8h-2.4c-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.4l4.4-4.4c.3-.3.7-.3.9 0L22 9.8c.3.3.4.6.3.9s-.3.3-.5.3z",
        fill: "#fff"
      })]), {
        id: "sb3-loopArrow"
      }), draw$1.setProps(draw$1.group([draw$1.el("path", {
        d: "M28.456 21.675c-.009-.312-.087-.825-.256-1.702-.096-.495-.612-3.022-.753-3.73-.395-1.98-.76-3.92-1.142-6.113-.732-4.223-.693-6.05.344-6.527.502-.23 1.06-.081 1.842.35.413.227 2.181 1.365 2.07 1.296 1.993 1.243 3.463 1.775 4.928 1.549 1.527-.237 2.505-.06 2.877.618.348.635.015 1.416-.729 2.18-1.473 1.516-3.976 2.514-5.849 2.023-.822-.218-1.238-.464-2.38-1.266a9.737 9.737 0 0 0-.095-.066c.047.593.264 1.74.717 3.803.294 1.336 2.079 9.187 2.637 11.674l.002.012c.529 2.637-1.872 4.724-5.235 4.724-3.29 0-6.363-1.988-6.862-4.528-.53-2.64 1.873-4.734 5.233-4.734a8.411 8.411 0 0 1 2.65.437zM11.46 27.666c-.01-.319-.091-.84-.266-1.738-.09-.46-.595-2.937-.753-3.727-.39-1.96-.752-3.892-1.131-6.07-.732-4.224-.692-6.052.344-6.527.502-.23 1.06-.082 1.841.349.414.228 2.181 1.365 2.07 1.296 1.992 1.243 3.461 1.775 4.925 1.549 1.525-.24 2.504-.064 2.876.614.348.635.015 1.415-.728 2.18-1.474 1.517-3.977 2.513-5.847 2.017-.822-.218-1.237-.463-2.38-1.266a9.729 9.729 0 0 0-.094-.065c.047.593.264 1.74.717 3.802.294 1.337 2.078 9.19 2.636 11.675l.003.013c.517 2.638-1.884 4.732-5.234 4.732-3.286 0-6.359-1.993-6.87-4.54-.518-2.639 1.885-4.73 5.242-4.73.904 0 1.802.15 2.65.436z",
        stroke: "#000",
        "stroke-opacity": ".1"
      }), draw$1.el("path", {
        d: "M32.18 25.874C32.636 28.157 30.512 30 27.433 30c-3.07 0-5.923-1.843-6.372-4.126-.458-2.285 1.665-4.136 4.743-4.136.647 0 1.283.084 1.89.234a7 7 0 0 1 .938.302c.87-.02-.104-2.294-1.835-12.229-2.134-12.303 3.06-1.87 8.768-2.753 5.708-.885.076 4.82-3.65 3.844-3.724-.987-4.65-7.153.263 14.738zm-16.998 5.99C15.63 34.148 13.507 36 10.439 36c-3.068 0-5.92-1.852-6.379-4.136-.448-2.284 1.674-4.135 4.751-4.135 1.002 0 1.974.197 2.854.544.822-.055-.15-2.377-1.862-12.228-2.133-12.303 3.059-1.87 8.764-2.753 5.706-.894.076 4.821-3.648 3.834-3.723-.987-4.648-7.152.263 14.738z",
        fill: "#FFF"
      })]), {
        id: "sb3-musicBlock",
        fill: "none"
      }), draw$1.setProps(draw$1.group([draw$1.el("path", {
        d: "M8.753 34.602l-4.251 1.779 1.784-4.236c1.218-2.892 2.907-5.423 5.03-7.538L31.066 4.93c.846-.842 2.65-.41 4.032.967 1.38 1.375 1.816 3.173.97 4.015L16.318 29.59c-2.123 2.116-4.664 3.799-7.565 5.012",
        fill: "#FFF"
      }), draw$1.el("path", {
        d: "M29.41 6.111s-4.45-2.379-8.202 5.771c-1.734 3.766-4.35 1.546-4.35 1.546"
      }), draw$1.el("path", {
        d: "M36.42 8.825c0 .463-.14.873-.432 1.164l-9.335 9.301c.282-.29.41-.668.41-1.12 0-.874-.507-1.963-1.406-2.868-1.362-1.358-3.147-1.8-4.002-.99L30.99 5.01c.844-.84 2.65-.41 4.035.96.898.904 1.396 1.982 1.396 2.855M10.515 33.774a23.74 23.74 0 0 1-1.764.83L4.5 36.382l1.786-4.235c.258-.604.529-1.186.833-1.757.69.183 1.449.625 2.109 1.282.659.658 1.102 1.412 1.287 2.102",
        fill: "#4C97FF"
      }), draw$1.el("path", {
        d: "M36.498 8.748c0 .464-.141.874-.433 1.165l-19.742 19.68c-2.131 2.111-4.673 3.793-7.572 5.01L4.5 36.381l.974-2.317 1.925-.808c2.899-1.218 5.441-2.899 7.572-5.01l19.742-19.68c.292-.292.432-.702.432-1.165 0-.647-.27-1.4-.779-2.123.249.172.498.377.736.614.898.905 1.396 1.983 1.396 2.856",
        fill: "#575E75",
        opacity: ".15"
      }), draw$1.el("path", {
        d: "M18.45 12.831a.904.904 0 1 1-1.807 0 .904.904 0 0 1 1.807 0z",
        fill: "#575E75"
      })]), {
        id: "sb3-penBlock",
        stroke: "#575E75",
        fill: "none",
        "stroke-linejoin": "round"
      }), draw$1.setProps(draw$1.group([draw$1.el("circle", {
        opacity: 0.25,
        cx: 32,
        cy: 16,
        r: 4.5
      }), draw$1.el("circle", {
        opacity: 0.5,
        cx: 32,
        cy: 12,
        r: 4.5
      }), draw$1.el("circle", {
        opacity: 0.75,
        cx: 32,
        cy: 8,
        r: 4.5
      }), draw$1.el("circle", {
        cx: 32,
        cy: 4,
        r: 4.5
      }), draw$1.el("path", {
        d: "M22.672 4.42l-6.172 4V6.1c0-2.01-1.563-3.6-3.5-3.6H4.1C2.076 2.5.5 4.076.5 6.1V14c0 1.927 1.584 3.512 3.6 3.6H13c1.902 0 3.5-1.653 3.5-3.6v-2.283l6.257 3.754.097.075c.02.02.098.054.146.054.267 0 .5-.217.5-.5V4.8c0 .037-.056-.094-.129-.243-.145-.242-.43-.299-.7-.137z",
        fill: "#4D4D4D",
        "stroke-linejoin": "round"
      })]), {
        id: "sb3-videoBlock",
        stroke: "#000",
        fill: "#FFF",
        "stroke-opacity": 0.15
      }), draw$1.setProps(draw$1.group([draw$1.el("path", {
        d: "M25.644 20.5c-1.667 1.937-4.539 3.429-5.977 3.429a1.25 1.25 0 0 1-.557-.137c-.372-.186-.61-.542-.61-1.03 0-.105.017-.207.05-.308.076-.236.624-.986.727-1.173.27-.484.462-1.075.566-1.865A8.5 8.5 0 0 1 24 3.5h4a8.5 8.5 0 1 1 0 17h-2.356z",
        fill: "#FFF"
      }), draw$1.el("path", {
        d: "M15.5 21.67c0-1.016-1.494-1.586-2.387-.782l-2.7 2.163A5.958 5.958 0 0 1 6.7 24.33h-.4c-1.035 0-1.8.69-1.8 1.573v4.235c0 .883.765 1.572 1.8 1.572h.4c1.458 0 2.754.423 3.82 1.287l2.598 2.161c.908.75 2.382.188 2.382-.876V21.67z",
        fill: "#4D4D4D"
      })]), {
        id: "sb3-ttsBlock",
        stroke: "#000",
        "stroke-opacity": 0.15
      }), draw$1.el("image", {
        id: "sb3-translateBlock",
        width: "40px",
        height: "40px",
        href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABTVBMVEX///8AAAAAAAAAAAAAAABqamoAAAAAAAAAAAAAAACurq7Ly8vV1dXZ2dnS0tLDw8MAAAAAAAAAAAAAAADb29vq6urz8/P6+vr////9/f319fXx8fHl5eXPz89HR0e2trbu7u7X19ekpKTe3t74+Pjn5+fg4ODi4uIAAACEhISWlpa9vb0AAAAAAADH3v/0+P8AAADHx8e41f9Rmf9WnP/p8v+Pvv9Nl/9Ynf/S5f9ho/9Smv+82P9PmP9Ml/+Rv/9uqv9mpf9coP+MvP9an/9zrf9Qmf+rzf+Dtv9op/+10/+bxP/d6/96sf9jpP+5ubkAAABrqf92r/9/tP9GieeOrtnW19mgx/96otnZ4u5Znv/q6+5XXnXV19ygpLGWmqhhZ3309fbKzNTAwsuLkKBtbW3s7OxMTEy1uMJ2fI5rcobf4eVFRUWBhperrrqQI7PpAAAAbXRSTlMADBUdJkERBQIfeLzl/9ehGA4aJP///////////8kyhf/yav//////E09ckwcK//8hrv///////////////////////////////////////0b//////////////////////////z//L/////80bccdAQAABJxJREFUeAHtmOd/qkoTgDELVhZLiKwRseuRA5Y00uT03nvvvf7/H++CmVzNsvvD+74f85ie8DCzO2EGpFOiOSWxgmRFRiiZ+r/o0plsTsUULa8UhMp0sbQqc1ktFdNSQCmnr5UNUlmvmrimJPm+pFXXsACtboVHy7hBjjDMZqvA8xVazXajQ7h0Gu3Z0TLukmMaOFvg+LJwYh5wdCGPe/1+wyAhVZw9E5lvC1dFLji6lZTSaGC3zmpw/mpTidiZtNVskBg0mhbdGcd1i6jVPMq8X4tIulhvk1i060U4ZNCc5WRgJeGcFJa0iACHo4gQtZIU4ozt/FEQ5sS2x4lF4Spm93djc2ub3Wu8KgWkLI1uzWxjyv0eVgfuglDGhGHH290jDFieFUVOn8+prKul/02IcJnMY2CLJxzte8ABfLE/YoWLVVbGMk94OPUZpodMypN2Zc5X6dX4KZ87f/6C5108H3Lgb144f/4Sk3La0nqVOZ9mOaI1HHn+ZfjiIHINJQeMkT5mU674V8MNuTb1rkcKwcjxMcK9q96NIMBd/+o2RwhG8ImFZN+7epOQW1PvfHTZgNFgfBzh3tQ/2L7t+d52pBCMOdzHNfCJC/sOrb4Df3orurDBOFbqyhh8YiFdPlrRdwlHCLiuKwFiITn0fEiYIwTiCa9d9egKHgyDbayaOgbu3ed0Q7Hw9oOrPl1Dz58+3G6ATdQNxcK9R1ep6vpodHfqe4+fPI3XDbnCm/tTqtsdEsqzzcfP43ZDnnC4STdj89aIhLx4Ersb8lrA8ODqy2tw/avoOH435DWp7dvzp166G4rbqBkrQOiGMRq9jvn7y3bDGKMIxiQmWOYPS2Lhq9eUNwIhO86JhW8D4TuOkB0458LsBv+5rPB9IHz/QSyEkRgp2Dj2NQeyfJ8Rfnwd8imGMOy2JlS02RwUo65Cn2l4NMjPsYSuDVXSaWtfqI8VfggW8B398CqOMKOtzcL7ivPfHClK+J26PgZpf48jlHEn1OmqXUpLkcIfr1//DDfmZxzheGKul7u6moXxkRH+orG9JSTI+VcMYfK3htVJa1zkXsnfzkwfoRR5QqBYQmjFEbQGmivwPoYQuiJX+AlsUIoiIfTtjCDCz9TzJ+Q1lKJI6Fg13Mc5y4kSwnXhBwn5CaXIFcI0ZcDsEyH8/m/9vYUvuUJ2OmOEEBbUz0+hkJ0fWeHfv3+/z339ly/kTrirS7cAxgfGNNMNl2pSpdrMB8b2pPBfbyphrconRgG0/G3vPBY2TtwYoaVvzBdAqj4fYkPPFZZ9dLCIO1Bxrz9zGv0e1qzU0g83FkmMbRsaSjtvjx3h45fuXHDMwAk4CWh5VdqfhA+IBs1jo4EVxIzEQKHWhw7aQkXXdSQOxUHThCozaYHxSCnNKiSinbXtAUrzjF+0NvRHbLtc45ks1IjR6NOtyXNP7nzL46+zINe0jBQJWyNdwT1JumSreqjs8P4KasQ0QNgQ/mlinFX1bnndnIwlAUmlhs3qeoUY5TU9V5JEFMetiYq130lJRKqg5MOyU3PZTFoS46wgVIIezlcmEZIHMlrh/OUpp/wDfCaVjn0YjrEAAAAASUVORK5CYII="
      }), draw$1.el("image", {
        id: "sb3-microbitBlock",
        width: "40px",
        height: "40px",
        href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAKQElEQVR4AeybBVAcSxeF4+4OwcND4hV3fB1NFuLu7i5IXLCHS9wV97cQd3d3d/e9/9wh6YI/AwOT2dqF2q46leb07e7b3/RMr2RLaIu2aIu2aIu2aIu2aIu2aIu2aIu2aIv6SuSG1I3ha5NOb9ihOJt58MyV/5di/5mr4RtSTkZtTL0Wvi59bJFZGACUbN68eWUzM7M6TY2N6zcxMmqgCvkGbVakpe+HjMxDkLn3CKPSFQchLeMALF21doWq8sA1WlhY1LY2sq7ACzwcTDA5Lkqy/MEnWehPpSwUoGBSgnDijjzbhRP+bJMsvga2soFgI/RQm2yFHh9thO77O9pIhaamptX+CqC5uXlVwbSkraywGOA5DA8DW5fRecHDZNUMjwWkyONLZyupDQWxPGeAuJ2lAW9+cIGHSRCADPBQGgqPyFogj2nWrFlNzrdvl74+1lzhEYDM8FAaDI/oBj77OQPsOsBPyhUeAcgMD6XZ8FAC9wfULVxXNQBZ4BGAzPBQf8KTDQLBiAgQjN3IoE1gP9gfbEQ9iwVAFngEIIHHJju38SBZ8RCkfq9BNP84iOcezC3PMyAL+gLiBSfAVtK/uAAk8P5aIs9TIPV9DjaOQ8FG3PfPiyHpA3Yes3BO3I3FASB/8FBSv5cgmr3vV/017l7ShvOIZmVhnYYsmnOwqAPkFx5K4n2OgvMCbJ2G5b0De82h5xeM316UAfIPD2UnnwoSahdK/d+CmLqdRfOP5pLY5wLIgr6CZOFlPGyKEEDVwyOydR4BgnFbQTglDoSTY3MJPcHI1bgTi+opTOAVG9n38QSJ1zkQe1PyOY+i63buU/kDWFzhoRyGBILr7FRw8TySvUmCPoOQPF95A0jgFUuAzkuugvOK+wQePiJ4A9it33KJKuD1GzwBho2eDiKnfsTr2X8s7Tm6DSJejz6jaM/FfSjxsE552EY87IMejlFIgLjzmOHxAbBdZ4c2qrjyp89egEePn8CUGT7Ey9x3iPaW+4YSLzY+lfai124hHtYpD9uIh33QwzEKC1D6LwM8TQd46MhxesGjxs8mXkJyGu15+awi3qYtu2gvICiSeFinPGwjHvZBD8co1CHSbxEIJu4m8FQO0FrgDlb2bmBlx6xu9t0xhjXxLtaO0MlKClYOPYjX1cY526PGIJ6tC3rUuG7EwzrlYRvxsA96OEbe8zLkL6A95vx5BogfLoJH37GwYHEoeC0NY9Qc7zAQyPpq2mHBPX8+AXazc4Ulvuvg/oNHcP8hs67duAuTZizFnaVJhwj3/HkFaOsKq4I20s8a1M1btyEtIwsUmfvh3v0H2d7tezB19gqwJgDVf4hwyl/VAK9evQ4jxs4EsXN/cJEPBe/FfvDg4SN2gOo5RLjnzwdAqetAuHTlOqzwDSYJ7IlJAntJbyC3Wq+RcOjwMXaAajxEEGBB8w8MjqLXLHMd+PCvAcqpZ83Xr99g+44YksCumEQqgV4kAfe+o1kAql8IsKD5xyek0Wvu2W/0I15uYdyFORO4efMW9fzyBrHzAHDuPhh8FrHcwuo/RAqbP65ZtYfI1es3yEP4/oOHmnuIcM+f/5cxS/3W4suAPHXtxh2YMtsXrDTrEOGeP/8vpMfBgsXh4L00jFGzvYJA6NhPw96JcM9f9W/lRH3Y38qpX1zeiqr+wwRb2WAQLziO3+dq9MdZHKR6gAhPNHsvSAI/4JdBmv9xlgYBJPDwk2ppwDsEqPEfZ6kfIAM856XX2AGq/xDRGID4oSOBhx+Du02PAadFlwhADZf6ATqMigLJwosg9j6fLa+z1N8X8Ltc7SFSjL4TKdYAtYcIR2kPkWIi9QMc1EcIkZ5NH0V5Nb20eGr7r7ai/N+22YnlsHmJ5bcz6+s+PbGm3rt54zqTNrZ+GxY3+XEgUuexIkTvWUH7oQJmt1KeWFvvxaEonWe+M1sr2XJ0dnGB/4INPp1aW/dJ6r+GHwb0FqsGYH9q4ORAg6M4YEujljX8ppv3ifZu+iW/5OJ8G31d5204GOOFXevonFxT99qMUd1YIcT7N/oRMe+fqfgTA/xf8on+hskF6RcyrwUkB+itb9KkSS3U1iWmwcFzW+YZ7yDpAafX1n23YoxR+5ZGRjUWjarX/Oz6Oq+cnF34B7h9mRlMHWHREX1sb21iUn1feMMb9mI5Y3J45Y9G17/5+9c+np6epYJnGDumBRnmCwH7nV1X5yUC+J1H++YN9RIDTL6zAEQYH3MuGOuKEIN3ecVPGmZNbQr9mI4dO1b8FV8+ZqVhpNfEjvwDVITow6rJZh7W1tZlsA0XeH5jned4CzAlJ5J1h/Mbaj/DOIxv3bp1Wf8Zlv2PRTfIFwL2u7Oz6ifcedhPLpeXHjPIstWR6AZKNoC3dlT7bk3BxouFsjQ01Dm3ofa3vOLnj+8M6UH6mVSOVXDNVI6V9qw03uo/u5VqAF7ZUvON1xgzO9wRu1ca74CsEsr8AGJ7zEqjLd2a6urPHW0quLq15tuCAITMEpAapL9X2sXAZFJ/s3an1tV9zNYP9SS2EuyP0Lkk6mxu3q2l5T/JgYZn0MsP4MfUMspoT7OZ+Kus4Dlmo5/HV/jBK0APuQz2rDSFa1tr4MJoKTNLKH/Xz66vDVmhenBsdX04EtUADkbqwFGqfiBChzH+ZUJ5OI6x0Q2oGF28zWFfuC7dnzpoICusYe5+Wdl9X1H9MGY/3acBNUY9+qKeXlcXzqyvQ9e/ppci/X7+mvML5eF8CipH6kJgPMbS3vVt1chcv+NRCf7GGMMPwCH9hHhlKVXMTk5REj6nlcN6Lr1NLkvqb5Jyt3/PKJPr7/cpzLEfUnPG4eLLwY//SgOJTSyXYwwSCwSCIvvfj6kV8pzvh4LMReb4llEWPqWVh1eJVeBDSkU4HN0A21QD8PQGE9gf1aRQAFNCWnECeGajCZzfZFhogNtWdYUD0Y3hWXx1VoDpYS0hNqA9hPqIIWKhEDJCW/IDEEvT1q0bUQCVBCC94Mpwc4dOYQBSfWtyAnh5qx5CKDTAsxuN4fp2XapekhXgje06cHGzAf0vbo5LW/QJQCuB/Cz+XpozQOw8ZrDdyZwAiQoOEMUJIFHhAOYWC0AGEYDU15sr8TfTnAFSx3u50QNaCKgH7uf/tXPWCBFDURSdEnd3Ghxa1kiPu7trh7tHx911DbybLTAV3BNPniX5kh9L/rMDqK1W54a6hzpxOWT7Dfh3AC4J7mYaLpSVakf0oDiRPinIYpo6Kcgoq9WOm6mmr4/FGrvUvvrTTIP6vlBrv5+u/87I9sxpQTZ2WJTENHNWkPVsl4c+IbtQpz9MN6gfIns33aC8z9ean0s19uvJps+syGGIix58pY4LMv6dkgh83M80KK/zdQZkryaaP5XlGsf3crUT85JL0ogpcVyYgm8swzf8XYndb0u2xpKFLWO9wgtZ+JBpOnlcmEmeFKR2RtrHhgfq6nHNa8sHOAu4WscF518f8IMNtEisFhchhBBCCCGEEEJIPvkBF5B61BH0sY4AAAAASUVORK5CYII="
      }), draw$1.setProps(draw$1.group([draw$1.el("path", {
        d: "M23.513 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
        fill: "#7C87A5"
      }), draw$1.el("path", {
        d: "M24.91 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z"
      }), draw$1.el("path", {
        d: "M9.54 11.17h-.728c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479",
        fill: "#7C87A5"
      }), draw$1.el("path", {
        d: "M10.938 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479z"
      }), draw$1.el("path", {
        d: "M26.305 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479",
        fill: "#7C87A5"
      }), draw$1.el("path", {
        d: "M27.702 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z"
      }), draw$1.el("path", {
        d: "M29.101 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
        fill: "#7C87A5"
      }), draw$1.el("path", {
        d: "M30.498 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z"
      }), draw$1.el("path", {
        d: "M17.925 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479",
        fill: "#7C87A5"
      }), draw$1.el("path", {
        d: "M19.322 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479z"
      }), draw$1.el("path", {
        d: "M20.717 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479",
        fill: "#7C87A5"
      }), draw$1.el("path", {
        d: "M22.114 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z"
      }), draw$1.el("path", {
        d: "M15.129 11.17H14.4c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479",
        fill: "#7C87A5"
      }), draw$1.el("path", {
        d: "M16.526 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z"
      }), draw$1.el("path", {
        d: "M12.335 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.882v-1.08c0-.265-.26-.479-.577-.479",
        fill: "#7C87A5"
      }), draw$1.el("path", {
        d: "M13.732 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z"
      }), draw$1.el("path", {
        d: "M31.893 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479",
        fill: "#7C87A5"
      }), draw$1.el("path", {
        d: "M33.29 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z"
      }), draw$1.el("path", {
        d: "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992",
        fill: "#FFF"
      }), draw$1.el("path", {
        d: "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992z",
        stroke: "#7C87A5",
        "stroke-width": ".893"
      }), draw$1.el("path", {
        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
        fill: "#FFF"
      }), draw$1.el("path", {
        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
        stroke: "#7C87A5",
        "stroke-width": ".893"
      }), draw$1.el("path", {
        d: "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z",
        fill: "#4C97FF"
      }), draw$1.el("path", {
        d: "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z",
        stroke: "#3D79CC",
        "stroke-width": ".893"
      }), draw$1.el("path", {
        stroke: "#7C87A5",
        "stroke-width": ".893",
        d: "M4.47 20.474h27.961l2.157 2.974"
      }), draw$1.el("path", {
        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
        stroke: "#7C87A5",
        "stroke-width": ".893"
      }), draw$1.el("path", {
        d: "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
        fill: "#7C87A5"
      }), draw$1.el("path", {
        d: "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z"
      }), draw$1.el("path", {
        d: "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479",
        fill: "#7C87A5"
      }), draw$1.el("path", {
        d: "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479z"
      }), draw$1.el("path", {
        d: "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479",
        fill: "#7C87A5"
      }), draw$1.el("path", {
        d: "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479z"
      }), draw$1.el("path", {
        d: "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479",
        fill: "#7C87A5"
      }), draw$1.el("path", {
        d: "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z"
      }), draw$1.el("path", {
        d: "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993",
        fill: "#E6E7E8"
      }), draw$1.el("path", {
        d: "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993z",
        stroke: "#7C87A5",
        "stroke-width": ".893"
      }), draw$1.el("path", {
        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z",
        fill: "#E6E7E8"
      }), draw$1.el("path", {
        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z",
        stroke: "#7C87A5",
        "stroke-width": ".893"
      }), draw$1.el("path", {
        fill: "#E6E7E8",
        d: "M19.53 24.438h11.294V20.47H19.529z"
      }), draw$1.el("path", {
        stroke: "#7C87A5",
        "stroke-width": ".893",
        d: "M19.53 24.438h11.294V20.47H19.529zm12.902-3.964l2.157-2.794"
      })]), {
        id: "sb3-wedoBlock",
        fill: "none"
      }), draw$1.setProps(draw$1.group([draw$1.el("rect", {
        stroke: "#7C87A5",
        fill: "#FFF",
        x: ".5",
        y: "3.59",
        width: "28",
        height: "25.81",
        rx: "1"
      }), draw$1.el("rect", {
        stroke: "#7C87A5",
        fill: "#E6E7E8",
        x: "2.5",
        y: ".5",
        width: "24",
        height: "32",
        rx: "1"
      }), draw$1.el("path", {
        stroke: "#7C87A5",
        fill: "#FFF",
        d: "M2.5 14.5h24v13h-24z"
      }), draw$1.el("path", {
        d: "M14.5 10.5v4",
        stroke: "#7C87A5",
        fill: "#E6E7E8"
      }), draw$1.el("rect", {
        fill: "#414757",
        x: "4.5",
        y: "2.5",
        width: "20",
        height: "10",
        rx: "1"
      }), draw$1.el("rect", {
        fill: "#7C87A5",
        opacity: ".5",
        x: "13.5",
        y: "20.13",
        width: "2",
        height: "2",
        rx: ".5"
      }), draw$1.el("path", {
        d: "M9.06 20.13h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.5a1 1 0 0 1 0-2zM19.93 22.13h-1.51a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1.5a1 1 0 0 1 .01 2zM8.23 17.5H5a.5.5 0 0 1-.5-.5v-2.5h6l-1.85 2.78a.51.51 0 0 1-.42.22zM18.15 18.85l-.5.5a.49.49 0 0 0-.15.36V20a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5v-.29a.49.49 0 0 0-.15-.36l-.5-.5a.51.51 0 0 1 0-.71l1.51-1.49a.47.47 0 0 1 .35-.15h3.58a.47.47 0 0 1 .35.15l1.51 1.49a.51.51 0 0 1 0 .71zM10.85 23.45l.5-.5a.49.49 0 0 0 .15-.36v-.29a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.29a.49.49 0 0 0 .15.36l.5.5a.5.5 0 0 1 0 .7l-1.51 1.5a.47.47 0 0 1-.35.15h-3.58a.47.47 0 0 1-.35-.15l-1.51-1.5a.5.5 0 0 1 0-.7z",
        fill: "#7C87A5",
        opacity: ".5"
      }), draw$1.el("path", {
        d: "M21.5 27.5h5v4a1 1 0 0 1-1 1h-4v-5z",
        stroke: "#CC4C23",
        fill: "#F15A29"
      })]), {
        transform: "translate(5.5 3.5)",
        id: "sb3-ev3Block"
      }), draw$1.setProps(draw$1.group([draw$1.el("path", {
        d: "M35 28H5a1 1 0 0 1-1-1V12c0-.6.4-1 1-1h30c.5 0 1 .4 1 1v15c0 .5-.5 1-1 1z",
        fill: "#fff"
      }), draw$1.el("path", {
        fill: "red",
        d: "M4 25h32v2.7H4zm9-1h-2.2a1 1 0 0 1-1-1v-9.7c0-.6.4-1 1-1H13c.6 0 1 .4 1 1V23c0 .6-.5 1-1 1z"
      }), draw$1.el("path", {
        fill: "red",
        d: "M6.1 19.3v-2.2c0-.5.4-1 1-1h9.7c.5 0 1 .5 1 1v2.2c0 .5-.5 1-1 1H7.1a1 1 0 0 1-1-1z"
      }), draw$1.el("circle", {
        fill: "red",
        cx: "22.8",
        cy: "18.2",
        r: "3.4"
      }), draw$1.el("circle", {
        fill: "red",
        cx: "30.6",
        cy: "18.2",
        r: "3.4"
      }), draw$1.el("path", {
        fill: "red",
        d: "M4.2 27h31.9v.7H4.2z"
      }), draw$1.el("circle", {
        fill: "#e0e0e0",
        cx: "22.8",
        cy: "18.2",
        r: "2.3"
      }), draw$1.el("circle", {
        fill: "#e0e0e0",
        cx: "30.6",
        cy: "18.2",
        r: "2.3"
      }), draw$1.el("path", {
        fill: "#e0e0e0",
        d: "M12.5 22.9h-1.2c-.3 0-.5-.2-.5-.5V14c0-.3.2-.5.5-.5h1.2c.3 0 .5.2.5.5v8.4c0 .3-.2.5-.5.5z"
      }), draw$1.el("path", {
        fill: "#e0e0e0",
        d: "M7.2 18.7v-1.2c0-.3.2-.5.5-.5h8.4c.3 0 .5.2.5.5v1.2c0 .3-.2.5-.5.5H7.7c-.3 0-.5-.2-.5-.5zM4 26h32v2H4z"
      }), draw$1.el("path", {
        stroke: "#666",
        "stroke-width": ".5",
        d: "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z"
      }), draw$1.el("path", {
        stroke: "#666",
        "stroke-width": ".5",
        d: "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z"
      })]), {
        id: "sb3-makeymakeyBlock",
        fill: "none"
      })];
    },
    makeStyle: function makeStyle() {
      var style = draw$1.el("style");
      style.appendChild(draw$1.cdata(Style.cssContent));
      return style;
    },
    defaultFont: "500 12pt Sarabun, Helevetica Neue, Helvetica, sans-serif",
    commentFont: "400 12pt Sarabun, Helevetica Neue, Helvetica, sans-serif"
  };
});
var style_1$1 = style$1.cssContent;
var style_2$1 = style$1.makeIcons;
var style_3$1 = style$1.makeStyle;
var style_4$1 = style$1.defaultFont;
var style_5$1 = style$1.commentFont;

var Label$4 = syntax$1.Label,
    Icon$4 = syntax$1.Icon,
    Input$4 = syntax$1.Input,
    Block$4 = syntax$1.Block,
    Comment$4 = syntax$1.Comment,
    Glow$4 = syntax$1.Glow,
    Script$4 = syntax$1.Script,
    Document$4 = syntax$1.Document;
var defaultFont = style$1.defaultFont,
    commentFont = style$1.commentFont,
    makeStyle$1 = style$1.makeStyle,
    makeIcons$1 = style$1.makeIcons;
/* Label */

var LabelView$1 = function LabelView(label) {
  _extends(this, label);

  this.el = null;
  this.height = 12;
  this.metrics = null;
  this.x = 0;
};

LabelView$1.prototype.isLabel = true;

LabelView$1.prototype.draw = function () {
  return this.el;
};

Object.defineProperty(LabelView$1.prototype, "width", {
  get: function get() {
    return this.metrics.width;
  }
});
LabelView$1.metricsCache = {};
LabelView$1.toMeasure = [];

LabelView$1.prototype.measure = function () {
  var value = this.value;
  var cls = "sb3-" + this.cls;
  this.el = draw$1.text(0, 13, value, {
    class: "sb3-label " + cls
  });
  var cache = LabelView$1.metricsCache[cls];

  if (!cache) {
    cache = LabelView$1.metricsCache[cls] = Object.create(null);
  }

  if (Object.hasOwnProperty.call(cache, value)) {
    this.metrics = cache[value];
  } else {
    var font = /comment-label/.test(this.cls) ? commentFont : defaultFont;
    this.metrics = cache[value] = LabelView$1.measure(value, font); // TODO: word-spacing? (fortunately it seems to have no effect!)
  }
};

LabelView$1.measure = function (value, font) {
  var context = LabelView$1.measuring;
  context.font = font;
  var textMetrics = context.measureText(value);
  var width = textMetrics.width + 0.5 | 0;
  return {
    width: width
  };
};
/* Icon */


var IconView$1 = function IconView(icon) {
  _extends(this, icon);

  var info = IconView.icons[this.name];

  if (!info) {
    throw new Error("no info for icon: " + this.name);
  }

  _extends(this, info);
};

IconView$1.prototype.isIcon = true;

IconView$1.prototype.draw = function () {
  return draw$1.symbol("#sb3-" + this.name, {
    width: this.width,
    height: this.height
  });
};

IconView$1.icons = {
  greenFlag: {
    width: 20,
    height: 21,
    dy: -2
  },
  turnLeft: {
    width: 24,
    height: 24
  },
  turnRight: {
    width: 24,
    height: 24
  },
  loopArrow: {
    width: 24,
    height: 24
  },
  addInput: {
    width: 4,
    height: 8
  },
  delInput: {
    width: 4,
    height: 8
  },
  musicBlock: {
    width: 40,
    height: 40
  },
  penBlock: {
    width: 40,
    height: 40
  },
  videoBlock: {
    width: 40,
    height: 40,
    dy: 10
  },
  ttsBlock: {
    width: 40,
    height: 40
  },
  translateBlock: {
    width: 40,
    height: 40
  },
  wedoBlock: {
    width: 40,
    height: 40
  },
  ev3Block: {
    width: 40,
    height: 40
  },
  microbitBlock: {
    width: 40,
    height: 40
  },
  makeymakeyBlock: {
    width: 40,
    height: 40
  }
};
/* Line */

var LineView = function LineView() {
  this.width = 1;
  this.height = 40;
  this.x = 0;
};

LineView.prototype.isLine = true;

LineView.prototype.measure = function () {};

LineView.prototype.draw = function (parent) {
  var category = parent.info.category;
  return draw$1.el("line", {
    class: "sb3-" + category + "-line",
    "stroke-linecap": "round",
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 40
  });
};
/* Input */


var InputView$1 = function InputView(input) {
  _extends(this, input);

  if (input.label) {
    this.label = newView$1(input.label);
  }

  this.isBoolean = this.shape === "boolean";
  this.isDropdown = this.shape === "dropdown";
  this.isRound = !(this.isBoolean || this.isDropdown);
  this.x = 0;
};

InputView$1.prototype.isInput = true;

InputView$1.prototype.measure = function () {
  if (this.hasLabel) this.label.measure();
};

InputView$1.shapes = {
  string: draw$1.pillRect,
  number: draw$1.pillRect,
  "number-dropdown": draw$1.pillRect,
  color: draw$1.pillRect,
  dropdown: draw$1.roundRect,
  boolean: draw$1.pointedRect,
  stack: draw$1.stackRect,
  reporter: draw$1.pillRect
};

InputView$1.prototype.draw = function (parent) {

  if (this.isBoolean) {
    var w = 48;
  } else if (this.isColor) {
    var w = 40;
  } else if (this.hasLabel) {
    var label = this.label.draw(); // Minimum padding of 11
    // Minimum width of 40, at which point we center the label

    var px = this.label.width >= 18 ? 11 : (40 - this.label.width) / 2;
    var w = this.label.width + 2 * px;
    label = draw$1.move(px, 9, label);
  } else {
    var w = this.isInset ? 30 : null;
  }

  if (this.hasArrow) w += 20;
  this.width = w;
  var h = this.height = 32;
  var el = InputView$1.shapes[this.shape](w, h);
  draw$1.setProps(el, {
    class: [this.isColor ? "" : "sb3-" + parent.info.category, "sb3-input", "sb3-input-" + this.shape].join(" ")
  });

  if (this.isColor) {
    draw$1.setProps(el, {
      fill: this.value
    });
  } else if (this.shape === "dropdown") {
    // custom colors
    if (parent.info.color) {
      draw$1.setProps(el, {
        fill: parent.info.color,
        stroke: "rgba(0, 0, 0, 0.2)"
      });
    }
  } else if (this.shape === "number-dropdown") {
    el.classList.add("sb3-" + parent.info.category + "-alt"); // custom colors

    if (parent.info.color) {
      draw$1.setProps(el, {
        fill: "rgba(0, 0, 0, 0.1)",
        stroke: "rgba(0, 0, 0, 0.15)" // combines with fill...

      });
    }
  } else if (this.shape === "boolean") {
    el.classList.remove("sb3-" + parent.info.category);
    el.classList.add("sb3-" + parent.info.category + "-dark"); // custom colors

    if (parent.info.color) {
      draw$1.setProps(el, {
        fill: "rgba(0, 0, 0, 0.15)"
      });
    }
  }

  var result = draw$1.group([el]);

  if (this.hasLabel) {
    result.appendChild(label);
  }

  if (this.hasArrow) {
    result.appendChild(draw$1.move(w - 24, 13, draw$1.symbol("#sb3-dropdownArrow", {})));
  }

  return result;
};
/* Block */


var BlockView$1 = function BlockView(block) {
  _extends(this, block);

  this.children = block.children.map(newView$1);
  this.comment = this.comment ? newView$1(this.comment) : null;
  this.isRound = this.isReporter; // Avoid accidental mutation

  this.info = _extends({}, block.info);

  switch (this.info.category) {
    case "music":
      this.children.unshift(new LineView());
      this.children.unshift(new IconView$1({
        name: "musicBlock"
      }));
      this.info.category = "extension";
      break;

    case "pen":
      this.children.unshift(new LineView());
      this.children.unshift(new IconView$1({
        name: "penBlock"
      }));
      this.info.category = "extension";
      break;

    case "video":
      this.children.unshift(new LineView());
      this.children.unshift(new IconView$1({
        name: "videoBlock"
      }));
      this.info.category = "extension";
      break;

    case "tts":
    case "translate":
    case "wedo":
    case "ev3":
    case "microbit":
    case "makeymakey":
      this.children.unshift(new LineView());
      this.children.unshift(new IconView$1({
        name: this.info.category + "Block"
      }));
      this.info.category = "extension";
      break;
  }

  this.x = 0;
  this.width = null;
  this.height = null;
  this.firstLine = null;
  this.innerWidth = null;
};

BlockView$1.prototype.isBlock = true;

BlockView$1.prototype.measure = function () {
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if (child.measure) child.measure();
  }

  if (this.comment) this.comment.measure();
};

BlockView$1.shapes = {
  stack: draw$1.stackRect,
  "c-block": draw$1.stackRect,
  "if-block": draw$1.stackRect,
  celse: draw$1.stackRect,
  cend: draw$1.stackRect,
  cap: draw$1.capRect,
  reporter: draw$1.pillRect,
  boolean: draw$1.pointedRect,
  hat: draw$1.hatRect,
  cat: draw$1.catHat,
  "define-hat": draw$1.procHatRect,
  ring: draw$1.pillRect
};

BlockView$1.prototype.drawSelf = function (w, h, lines) {
  // mouths
  if (lines.length > 1) {
    return draw$1.mouthRect(w, h, this.isFinal, lines, {
      class: ["sb3-" + this.info.category].join(" ")
    });
  } // outlines


  if (this.info.shape === "outline") {
    return draw$1.setProps(draw$1.stackRect(w, h), {
      class: ["sb3-" + this.info.category, "sb3-" + this.info.category + "-alt"].join(" ")
    });
  } // rings


  if (this.isRing) {
    var child = this.children[0];

    if (child && (child.isInput || child.isBlock || child.isScript)) {
      var shape = child.isScript ? "stack" : child.isInput ? child.shape : child.info.shape;
      return draw$1.roundRect(w, h, {
        class: ["sb3-" + this.info.category].join(" ")
      });
    }
  }

  var func = BlockView$1.shapes[this.info.shape];

  if (!func) {
    throw new Error("no shape func: " + this.info.shape);
  }

  return func(w, h, {
    class: ["sb3-" + this.info.category].join(" ")
  });
};

BlockView$1.padding = {
  hat: [24, 8],
  cat: [24, 8],
  "define-hat": [20, 16],
  null: [4, 4]
};

BlockView$1.prototype.horizontalPadding = function (child) {
  if (this.isRound) {
    if (child.isIcon) {
      return 16;
    } else if (child.isLabel) {
      return 12; // text in circle: 3 units
    } else if (child.isDropdown) {
      return 12; // square in circle: 3 units
    } else if (child.isBoolean) {
      return 12; // hexagon in circle: 3 units
    } else if (child.isRound) {
      return 4; // circle in circle: 1 unit
    }
  } else if (this.isBoolean) {
    if (child.isIcon) {
      return 24; // icon in hexagon: ???
    } else if (child.isLabel) {
      return 20; // text in hexagon: 5 units
    } else if (child.isDropdown) {
      return 20; // square in hexagon: 5 units
    } else if (child.isRound && child.isBlock) {
      return 24; // circle in hexagon: 5 + 1 units
    } else if (child.isRound) {
      return 20; // circle in hexagon: 5 units
    } else if (child.isBoolean) {
      return 8; // hexagon in hexagon: 2 units
    }
  }

  return 8; // default: 2 units
};

BlockView$1.prototype.marginBetween = function (a, b) {
  // Consecutive labels should be rendered as a single text element.
  // For now, approximate the size of one space
  if (a.isLabel && b.isLabel) {
    return 5;
  }

  return 8; // default: 2 units
};

BlockView$1.prototype.draw = function () {
  var isDefine = this.info.shape === "define-hat";
  var children = this.children;
  var isCommand = this.isCommand;
  var padding = BlockView$1.padding[this.info.shape] || BlockView$1.padding[null];
  var pt = padding[0],
      pb = padding[1];

  var y = this.info.shape === "cat" ? 16 : 0;

  var Line = function Line(y) {
    this.y = y;
    this.width = 0;
    this.height = isCommand ? 40 : 32;
    this.children = [];
  };

  var innerWidth = 0;
  var scriptWidth = 0;
  var line = new Line(y);

  function pushLine() {
    if (lines.length === 0) {
      line.height += pt + pb;
    } else {
      line.height -= 11;
      line.y -= 2;
    }

    y += line.height;
    lines.push(line);
  }

  if (this.info.isRTL) {
    var start = 0;

    var flip = function () {
      children = children.slice(0, start).concat(children.slice(start, i).reverse()).concat(children.slice(i));
    }.bind(this);

    for (var i = 0; i < children.length; i++) {
      if (children[i].isScript) {
        flip();
        start = i + 1;
      }
    }

    if (start < i) {
      flip();
    }
  }

  var lines = [];
  var previousChild;
  var lastChild;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    child.el = child.draw(this);

    if (child.isScript && this.isCommand) {
      this.hasScript = true;
      pushLine();
      child.y = y - 1;
      lines.push(child);
      scriptWidth = Math.max(scriptWidth, Math.max(1, child.width));
      child.height = Math.max(29, child.height + 3) - 2;
      y += child.height;
      line = new Line(y);
      previousChild = null;
    } else if (child.isArrow) {
      line.children.push(child);
      previousChild = child;
    } else {
      // Remember the last child on the first line
      if (!lines.length) {
        lastChild = child;
      } // Leave space between inputs


      if (previousChild) {
        line.width += this.marginBetween(previousChild, child);
      } // Align first input with right of notch


      var cmw = 48 - this.horizontalPadding(children[0]);

      if ((this.isCommand || this.isOutline) && !child.isLabel && !child.isIcon && line.width < cmw) {
        line.width = cmw;
      } // Align extension category icons below notch


      if (child.isIcon && i === 0 && this.isCommand) {
        line.height = Math.max(line.height, child.height + 8);
      }

      child.x = line.width;
      line.width += child.width;
      innerWidth = Math.max(innerWidth, line.width);

      if (!child.isLabel) {
        line.height = Math.max(line.height, child.height);
      }

      line.children.push(child);
      previousChild = child;
    }
  }

  pushLine();
  var padLeft = children.length ? this.horizontalPadding(children[0]) : 0;
  var padRight = children.length ? this.horizontalPadding(lastChild) : 0;
  innerWidth += padLeft + padRight; // Commands have a minimum width
  // The hat min-width is arbitrary (not sure of Scratch 3 value)
  // Outline min-width is deliberately higher (because Scratch 3 looks silly)

  var originalInnerWidth = innerWidth;
  innerWidth = Math.max(this.hasScript ? 160 : this.isHat ? 108 : this.isCommand || this.isOutline ? 64 : this.isReporter ? 48 : 0, innerWidth); // Center the label text inside small reporters.

  if (this.isReporter) {
    padLeft += (innerWidth - originalInnerWidth) / 2;
  }

  this.height = y;
  this.width = scriptWidth ? Math.max(innerWidth, 15 + scriptWidth) : innerWidth;
  this.firstLine = lines[0];
  this.innerWidth = innerWidth;
  var objects = [];

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];

    if (line.isScript) {
      objects.push(draw$1.move(16, line.y, line.el));
      continue;
    }

    var h = line.height;

    for (var j = 0; j < line.children.length; j++) {
      var child = line.children[j];

      if (child.isArrow) {
        objects.push(draw$1.move(innerWidth - 32, this.height - 28, child.el));
        continue;
      }

      var y = pt + (h - child.height - pt - pb) / 2;

      if (child.isLabel && i === 0) {
        // We only do this for the first line so that the `else` label is
        // correctly aligned
        y -= 1;
      } else if (isDefine && child.isLabel) {
        y += 3;
      } else if (child.isIcon) {
        y += child.dy | 0;

        if (this.isCommand && i === 0 && j === 0) {
          y += 4;
        }
      }

      var x = padLeft + child.x;

      if (child.dx) {
        x += child.dx;
      }

      objects.push(draw$1.move(x, line.y + y | 0, child.el));
    }
  }

  var el = this.drawSelf(innerWidth, this.height, lines);
  objects.splice(0, 0, el);

  if (this.info.color) {
    draw$1.setProps(el, {
      fill: this.info.color,
      stroke: "rgba(0, 0, 0, 0.2)"
    });
  }

  return draw$1.group(objects);
};
/* Comment */


var CommentView$1 = function CommentView(comment) {
  _extends(this, comment);

  this.label = newView$1(comment.label);
  this.width = null;
};

CommentView$1.prototype.isComment = true;
CommentView$1.lineLength = 12;
CommentView$1.prototype.height = 20;

CommentView$1.prototype.measure = function () {
  this.label.measure();
};

CommentView$1.prototype.draw = function () {
  var labelEl = this.label.draw();
  this.width = this.label.width + 16;
  return draw$1.group([draw$1.commentLine(this.hasBlock ? CommentView$1.lineLength : 0, 6), draw$1.commentRect(this.width, this.height, {
    class: "sb3-comment"
  }), draw$1.move(8, 4, labelEl)]);
};
/* Glow */


var GlowView$1 = function GlowView(glow) {
  _extends(this, glow);

  this.child = newView$1(glow.child);
  this.width = null;
  this.height = null;
  this.y = 0;
};

GlowView$1.prototype.isGlow = true;

GlowView$1.prototype.measure = function () {
  this.child.measure();
};

GlowView$1.prototype.drawSelf = function () {
  var c = this.child;
  var el;
  var w = this.width;
  var h = this.height - 1;

  if (c.isScript) {
    if (!c.isEmpty && c.blocks[0].isHat) {
      el = draw$1.hatRect(w, h);
    } else if (c.isFinal) {
      el = draw$1.capRect(w, h);
    } else {
      el = draw$1.stackRect(w, h);
    }
  } else {
    var el = c.drawSelf(w, h, []);
  }

  return draw$1.setProps(el, {
    class: "sb3-diff sb3-diff-ins"
  });
}; // TODO how can we always raise Glows above their parents?


GlowView$1.prototype.draw = function () {
  var c = this.child;
  var el = c.isScript ? c.draw(true) : c.draw();
  this.width = c.width;
  this.height = c.isBlock && c.firstLine.height || c.height; // encircle

  return draw$1.group([el, this.drawSelf()]);
};
/* Script */


var ScriptView$1 = function ScriptView(script) {
  _extends(this, script);

  this.blocks = script.blocks.map(newView$1);
  this.y = 0;
};

ScriptView$1.prototype.isScript = true;

ScriptView$1.prototype.measure = function () {
  for (var i = 0; i < this.blocks.length; i++) {
    this.blocks[i].measure();
  }
};

ScriptView$1.prototype.draw = function (inside) {
  var children = [];
  var y = 1;
  this.width = 0;

  for (var i = 0; i < this.blocks.length; i++) {
    var block = this.blocks[i];
    var x = inside ? 0 : 2;
    var child = block.draw();
    children.push(draw$1.move(x, y, child));
    this.width = Math.max(this.width, block.width);
    var diff = block.diff;

    if (diff === "-") {
      var dw = block.width;
      var dh = block.firstLine.height || block.height;
      children.push(draw$1.move(x, y + dh / 2 + 1, draw$1.strikethroughLine(dw)));
      this.width = Math.max(this.width, block.width);
    }

    y += block.height;
    var comment = block.comment;

    if (comment) {
      var line = block.firstLine;
      var cx = block.innerWidth + 2 + CommentView$1.lineLength;
      var cy = y - block.height + line.height / 2;
      var el = comment.draw();
      children.push(draw$1.move(cx, cy - comment.height / 2, el));
      this.width = Math.max(this.width, cx + comment.width);
    }
  }

  this.height = y + 1;

  if (!inside && !this.isFinal) {
    this.height += block.hasPuzzle ? 44 : 36;
  }

  if (!inside && block.isGlow) {
    this.height += 2; // TODO unbreak this
  }

  return draw$1.group(children);
};
/* Document */


var DocumentView$1 = function DocumentView(doc) {
  _extends(this, doc);

  this.scripts = doc.scripts.map(newView$1);
  this.width = null;
  this.height = null;
  this.el = null;
  this.defs = null;
};

DocumentView$1.prototype.measure = function () {
  this.scripts.forEach(function (script) {
    script.measure();
  });
};

DocumentView$1.prototype.render = function (cb) {
  if (typeof ocbptions === "function") {
    throw new Error("render() no longer takes a callback");
  } // measure strings


  this.measure(); // TODO: separate layout + render steps.
  // render each script

  var width = 0;
  var height = 0;
  var elements = [];

  for (var i = 0; i < this.scripts.length; i++) {
    var script = this.scripts[i];
    if (height) height += 10;
    script.y = height;
    elements.push(draw$1.move(0, height, script.draw()));
    height += script.height;
    width = Math.max(width, script.width + 4);
  }

  this.width = width;
  this.height = height; // return SVG

  var svg = draw$1.newSVG(width, height);
  svg.appendChild(this.defs = draw$1.withChildren(draw$1.el("defs"), makeIcons$1()));
  svg.appendChild(draw$1.group(elements));
  this.el = svg;
  return svg;
};
/* Export SVG image as XML string */


DocumentView$1.prototype.exportSVGString = function () {
  if (this.el == null) {
    throw new Error("call draw() first");
  }

  var style = makeStyle$1();
  this.defs.appendChild(style);
  var xml = new draw$1.XMLSerializer().serializeToString(this.el);
  this.defs.removeChild(style);
  return xml;
};
/* Export SVG image as data URI */


DocumentView$1.prototype.exportSVG = function () {
  var xml = this.exportSVGString();
  return "data:image/svg+xml;utf8," + xml.replace(/[#]/g, encodeURIComponent);
};

DocumentView$1.prototype.toCanvas = function (cb, scale) {
  scale = scale || 1.0;
  var canvas = draw$1.makeCanvas();
  canvas.width = this.width * scale;
  canvas.height = this.height * scale;
  var context = canvas.getContext("2d");
  var image = new Image();
  image.src = this.exportSVG();

  image.onload = function () {
    context.save();
    context.scale(scale, scale);
    context.drawImage(image, 0, 0);
    context.restore();
    cb(canvas);
  };
};

DocumentView$1.prototype.exportPNG = function (cb, scale) {
  this.toCanvas(function (canvas) {
    if (URL && URL.createObjectURL && Blob && canvas.toBlob) {
      var blob = canvas.toBlob(function (blob) {
        cb(URL.createObjectURL(blob));
      }, "image/png");
    } else {
      cb(canvas.toDataURL("image/png"));
    }
  }, scale);
};
/* view */


var viewFor$1 = function viewFor(node) {
  switch (node.constructor) {
    case Label$4:
      return LabelView$1;

    case Icon$4:
      return IconView$1;

    case Input$4:
      return InputView$1;

    case Block$4:
      return BlockView$1;

    case Comment$4:
      return CommentView$1;

    case Glow$4:
      return GlowView$1;

    case Script$4:
      return ScriptView$1;

    case Document$4:
      return DocumentView$1;

    default:
      throw new Error("no view for " + node.constructor.name);
  }
};

var newView$1 = function newView(node) {
  return new (viewFor$1(node))(node);
};

var blocks$2 = {
  newView: newView$1,
  LabelView: LabelView$1
};

function init$1(window) {
  draw$1.init(window);

  blocks$2.LabelView.measuring = function () {
    var canvas = draw$1.makeCanvas();
    return canvas.getContext("2d");
  }();
}

var scratch3 = {
  init: init$1,
  newView: blocks$2.newView,
  makeStyle: style$1.makeStyle
};

var draw$2 = createCommonjsModule(function (module) {
  /* for constucting SVGs */
  function extend(src, dest) {
    return _extends({}, src, dest);
  }


  var document;
  var xml;
  var directProps = {
    textContent: true
  };
  var SVG = module.exports = {
    init: function init(window) {
      document = window.document;
      var DOMParser = window.DOMParser;
      xml = new DOMParser().parseFromString("<xml></xml>", "application/xml");
      SVG.XMLSerializer = window.XMLSerializer;
    },
    makeCanvas: function makeCanvas() {
      return document.createElement("canvas");
    },
    cdata: function cdata(content) {
      return xml.createCDATASection(content);
    },
    el: function el(name, props) {
      var el = document.createElementNS("http://www.w3.org/2000/svg", name);
      return SVG.setProps(el, props);
    },
    setProps: function setProps(el, props) {
      for (var key in props) {
        var value = "" + props[key];

        if (directProps[key]) {
          el[key] = value;
        } else if (/^xlink:/.test(key)) {
          el.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value);
        } else if (props[key] !== null && props.hasOwnProperty(key)) {
          el.setAttributeNS(null, key, value);
        }
      }

      return el;
    },
    withChildren: function withChildren(el, children) {
      for (var i = 0; i < children.length; i++) {
        el.appendChild(children[i]);
      }

      return el;
    },
    group: function group(children) {
      return SVG.withChildren(SVG.el("g"), children);
    },
    newSVG: function newSVG(width, height) {
      return SVG.el("svg", {
        version: "1.1",
        width: width,
        height: height
      });
    },
    polygon: function polygon(props) {
      return SVG.el("polygon", extend(props, {
        points: props.points.join(" ")
      }));
    },
    path: function path(props) {
      return SVG.el("path", extend(props, {
        path: null,
        d: props.path.join(" ")
      }));
    },
    text: function text(x, y, content, props) {
      var text = SVG.el("text", extend(props, {
        x: x,
        y: y,
        textContent: content
      }));
      return text;
    },
    symbol: function symbol(href) {
      return SVG.el("use", {
        "xlink:href": href
      });
    },
    move: function move(dx, dy, el) {
      SVG.setProps(el, {
        transform: ["translate(", dx, " ", dy, ")"].join("")
      });
      return el;
    },

    /* shapes */
    rect: function rect(w, h, props) {
      return SVG.el("rect", extend(props, {
        x: 0,
        y: 0,
        width: w,
        height: h
      }));
    },
    roundRect: function roundRect(w, h, props) {
      return SVG.rect(w, h, extend(props, {
        rx: 4,
        ry: 4
      }));
    },
    pillRect: function pillRect(w, h, props) {
      var r = h / 2;
      return SVG.rect(w, h, extend(props, {
        rx: r,
        ry: r
      }));
    },
    pointedPath: function pointedPath(w, h) {
      var r = h / 2;
      return [["M", r, 0].join(" "), ["L", w - r, 0, w, r].join(" "), ["L", w, r, w - r, h].join(" "), ["L", r, h, 0, r].join(" "), ["L", 0, r, r, 0].join(" "), "Z"];
    },
    pointedRect: function pointedRect(w, h, props) {
      return SVG.path(extend(props, {
        path: SVG.pointedPath(w, h)
      }));
    },
    topNotch: function topNotch(w, y) {
      return ["c 2 0 3 1 4 2", "l 4 4", "c 1 1 2 2 4 2", "h 12", "c 2 0 3 -1 4 -2", "l 4 -4", "c 1 -1 2 -2 4 -2", ["L", w - 4, y].join(" "), "a 4 4 0 0 1 4 4"].join(" ");
    },
    getTop: function getTop(w) {
      return ["M 0 4", "A 4 4 0 0 1 4 0", "H 12", SVG.topNotch(w, 0)].join(" ");
    },
    getRingTop: function getRingTop(w) {
      return ["M", 0, 3, "L", 3, 0, "L", 7, 0, "L", 10, 3, "L", 16, 3, "L", 19, 0, "L", w - 3, 0, "L", w, 3].join(" ");
    },
    getRightAndBottom: function getRightAndBottom(w, y, hasNotch, inset) {
      if (typeof inset === "undefined") {
        inset = 0;
      }

      var arr = [["L", w, y - 4].join(" "), ["a", 4, 4, 0, 0, 1, -4, 4].join(" ")];

      if (hasNotch) {
        arr = arr.concat([["L", inset + 48, y].join(" "), "c -2 0 -3 1 -4 2", "l -4 4", "c -1 1 -2 2 -4 2", "h -12", "c -2 0 -3 -1 -4 -2", "l -4 -4", "c -1 -1 -2 -2 -4 -2"]);
      }

      if (inset === 0) {
        arr.push("L", inset + 4, y);
        arr.push("a 4 4 0 0 1 -4 -4");
      } else {
        arr.push("L", inset + 4, y);
        arr.push("a 4 4 0 0 0 -4 4");
      }

      return arr.join(" ");
    },
    getArm: function getArm(w, armTop) {
      return [["L", 16, armTop - 4].join(" "), "a 4 4 0 0 0 4 4", ["L", 28, armTop].join(" "), SVG.topNotch(w, armTop)].join(" ");
    },
    getArmNoNotch: function getArmNoNotch(w, armTop) {
      return [["L", 16, armTop - 4].join(" "), "a 4 4 0 0 0 4 4", ["L", 28, armTop].join(" "), ["L", w - 4, armTop].join(" "), "a 4 4 0 0 1 4 4"].join(" ");
    },
    stackRect: function stackRect(w, h, props) {
      return SVG.path(extend(props, {
        path: [SVG.getTop(w), SVG.getRightAndBottom(w, h, true, 0), "Z"]
      }));
    },
    capPath: function capPath(w, h) {
      return [SVG.getTop(w), SVG.getRightAndBottom(w, h, false, 0), "Z"];
    },
    ringCapPath: function ringCapPath(w, h) {
      return [SVG.getRingTop(w), SVG.getRightAndBottom(w, h, false, 0), "Z"];
    },
    capRect: function capRect(w, h, props) {
      return SVG.path(extend(props, {
        path: SVG.capPath(w, h)
      }));
    },
    getHatTop: function getHatTop(w) {
      return ["M 0 16", "c 25,-22 71,-22 96,0", ["L", w - 4, 16].join(" "), "a 4 4 0 0 1 4 4"].join(" ");
    },
    getCatTop: function getCatTop(w) {
      return ["M 0 32", "c2.6,-2.3 5.5,-4.3 8.5,-6.2c-1,-12.5 5.3,-23.3 8.4,-24.8c3.7,-1.8 16.5,13.1 18.4,15.4c8.4,-1.3 17,-1.3 25.4,0c1.9,-2.3 14.7,-17.2 18.4,-15.4c3.1,1.5 9.4,12.3 8.4,24.8c3,1.8 5.9,3.9 8.5,6.1", ["L", w - 4, 32].join(" "), "a 4 4 0 0 1 4 4"].join(" ");
    },
    hatRect: function hatRect(w, h, props) {
      return SVG.path(extend(props, {
        path: [SVG.getHatTop(w), SVG.getRightAndBottom(w, h, true, 0), "Z"]
      }));
    },
    catHat: function catHat(w, h, props) {
      return SVG.group([SVG.path(extend(props, {
        path: [SVG.getCatTop(w), SVG.getRightAndBottom(w, h, true, 0), "Z"]
      })), SVG.move(0, 32, SVG.setProps(SVG.group([SVG.el("circle", {
        cx: 29.1,
        cy: -3.3,
        r: 3.4
      }), SVG.el("circle", {
        cx: 59.2,
        cy: -3.3,
        r: 3.4
      }), SVG.el("path", {
        d: "M45.6,0.1c-0.9,0-1.7-0.3-2.3-0.9c-0.6,0.6-1.3,0.9-2.2,0.9c-0.9,0-1.8-0.3-2.3-0.9c-1-1.1-1.1-2.6-1.1-2.8c0-0.5,0.5-1,1-1l0,0c0.6,0,1,0.5,1,1c0,0.4,0.1,1.7,1.4,1.7c0.5,0,0.7-0.2,0.8-0.3c0.3-0.3,0.4-1,0.4-1.3c0-0.1,0-0.1,0-0.2c0-0.5,0.5-1,1-1l0,0c0.5,0,1,0.4,1,1c0,0,0,0.1,0,0.2c0,0.3,0.1,0.9,0.4,1.2C44.8-2.2,45-2,45.5-2s0.7-0.2,0.8-0.3c0.3-0.4,0.4-1.1,0.3-1.3c0-0.5,0.4-1,0.9-1.1c0.5,0,1,0.4,1.1,0.9c0,0.2,0.1,1.8-0.8,2.8C47.5-0.4,46.8,0.1,45.6,0.1z"
      })]), {
        fill: "#000",
        "fill-opacity": 0.6
      })), SVG.move(0, 32, SVG.el("path", {
        d: "M73.1-15.6c1.7-4.2,4.5-9.1,5.8-8.5c1.6,0.8,5.4,7.9,5,15.4c0,0.6-0.7,0.7-1.1,0.5c-3-1.6-6.4-2.8-8.6-3.6C72.8-12.3,72.4-13.7,73.1-15.6z",
        fill: "#FFD5E6",
        transform: "translate(0, 32)"
      })), SVG.move(0, 32, SVG.el("path", {
        d: "M22.4-15.6c-1.7-4.2-4.5-9.1-5.8-8.5c-1.6,0.8-5.4,7.9-5,15.4c0,0.6,0.7,0.7,1.1,0.5c3-1.6,6.4-2.8,8.6-3.6C22.8-12.3,23.2-13.7,22.4-15.6z",
        fill: "#FFD5E6",
        transform: "translate(0, 32)"
      }))]);
    },
    getProcHatTop: function getProcHatTop(w) {
      return ["M 0 20", "a 20 20 0 0 1 20 -20", ["L", w - 20, 0].join(" "), "a 20,20 0 0,1 20,20"].join(" ");
    },
    procHatRect: function procHatRect(w, h, props) {
      return SVG.path(extend(props, {
        path: [SVG.getProcHatTop(w), SVG.getRightAndBottom(w, h, true, 0), "Z"]
      }));
    },
    mouthRect: function mouthRect(w, h, isFinal, lines, props) {
      var y = lines[0].height;
      var p = [SVG.getTop(w), SVG.getRightAndBottom(w, y, true, 16)];

      for (var i = 1; i < lines.length; i += 2) {
        var isLast = i + 2 === lines.length;
        var line = lines[i];
        y += line.height - 3;

        if (line.isFinal) {
          p.push(SVG.getArmNoNotch(w, y));
        } else {
          p.push(SVG.getArm(w, y));
        }

        var hasNotch = !(isLast && isFinal);
        var inset = isLast ? 0 : 16;
        y += lines[i + 1].height + 3;
        p.push(SVG.getRightAndBottom(w, y, hasNotch, inset));
      }

      p.push("Z");
      return SVG.path(extend(props, {
        path: p
      }));
    },
    commentRect: function commentRect(w, h, props) {
      return SVG.roundRect(w, h, extend(props, {
        class: "sb3bw-comment"
      }));
    },
    commentLine: function commentLine(width, props) {
      return SVG.move(-width, 9, SVG.rect(width, 2, extend(props, {
        class: "sb3bw-comment-line"
      })));
    },
    strikethroughLine: function strikethroughLine(w, props) {
      return SVG.path(extend(props, {
        path: ["M", 0, 0, "L", w, 0],
        class: "sb3bw-diff sb3bw-diff-del"
      }));
    }
  };
});
var draw_1$2 = draw$2.init;
var draw_2$2 = draw$2.makeCanvas;
var draw_3$2 = draw$2.cdata;
var draw_4$2 = draw$2.el;
var draw_5$2 = draw$2.setProps;
var draw_6$2 = draw$2.withChildren;
var draw_7$2 = draw$2.group;
var draw_8$2 = draw$2.newSVG;
var draw_9$2 = draw$2.polygon;
var draw_10$2 = draw$2.path;
var draw_11$2 = draw$2.text;
var draw_12$2 = draw$2.symbol;
var draw_13$2 = draw$2.move;
var draw_14$2 = draw$2.rect;
var draw_15$2 = draw$2.roundRect;
var draw_16$2 = draw$2.pillRect;
var draw_17$2 = draw$2.pointedPath;
var draw_18$2 = draw$2.pointedRect;
var draw_19$2 = draw$2.topNotch;
var draw_20$2 = draw$2.getTop;
var draw_21$2 = draw$2.getRingTop;
var draw_22$2 = draw$2.getRightAndBottom;
var draw_23$2 = draw$2.getArm;
var draw_24$2 = draw$2.getArmNoNotch;
var draw_25$2 = draw$2.stackRect;
var draw_26$2 = draw$2.capPath;
var draw_27$2 = draw$2.ringCapPath;
var draw_28$2 = draw$2.capRect;
var draw_29$2 = draw$2.getHatTop;
var draw_30$2 = draw$2.getCatTop;
var draw_31$2 = draw$2.hatRect;
var draw_32$2 = draw$2.catHat;
var draw_33$2 = draw$2.getProcHatTop;
var draw_34$2 = draw$2.procHatRect;
var draw_35$2 = draw$2.mouthRect;
var draw_36$2 = draw$2.commentRect;
var draw_37$2 = draw$2.commentLine;
var draw_38$2 = draw$2.strikethroughLine;

var style$2 = createCommonjsModule(function (module) {
  var Style = module.exports = {
    cssContent: "\n    .sb3bw-label {\n      font: 500 12pt Sarabun, Helevetica Neue, Helvetica, sans-serif;\n      fill: #000000;\n      word-spacing: +1pt;\n    }\n\n    .sb3bw-motion { fill: #ffffff; stroke: #000000; }\n    .sb3bw-motion-alt { fill: #ffffff; }\n    .sb3bw-motion-dark { fill: #ffffff; }\n    .sb3bw-looks { fill: #ffffff; stroke: #000000; }\n    .sb3bw-looks-alt { fill: #ffffff; }\n    .sb3bw-looks-dark { fill: #ffffff; }\n    .sb3bw-sound { fill: #ffffff; stroke: #000000; }\n    .sb3bw-sound-alt { fill: #ffffff; }\n    .sb3bw-sound-dark { fill: #ffffff; }\n    .sb3bw-control { fill: #ffffff; stroke: #000000; }\n    .sb3bw-control-alt { fill: #ffffff; }\n    .sb3bw-control-dark { fill: #ffffff; }\n    .sb3bw-events { fill: #ffffff; stroke: #000000; }\n    .sb3bw-events-alt { fill: #ffffff; }\n    .sb3bw-events-dark { fill: #ffffff; }\n    .sb3bw-sensing { fill: #ffffff; stroke: #000000; }\n    .sb3bw-sensing-alt { fill: #ffffff; }\n    .sb3bw-sensing-dark { fill: #ffffff; }\n    .sb3bw-operators { fill: #ffffff; stroke: #000000; }\n    .sb3bw-operators-alt { fill: #ffffff; }\n    .sb3bw-operators-dark { fill: #ffffff; }\n    .sb3bw-variables { fill: #ffffff; stroke: #000000; }\n    .sb3bw-variables-alt { fill: #ffffff; }\n    .sb3bw-variables-dark { fill: #ffffff; }\n    .sb3bw-list { fill: #ffffff; stroke: #000000; }\n    .sb3bw-list-alt { fill: #ffffff; }\n    .sb3bw-list-dark { fill: #ffffff; }\n    .sb3bw-custom { fill: #ffffff; stroke: #000000; }\n    .sb3bw-custom-alt { fill: #ffffff; }\n    .sb3bw-custom-dark { fill: #ffffff; }\n    .sb3bw-custom-arg { fill: #ffffff; stroke: #000000; }\n\n    /* extension blocks, e.g. pen */\n    .sb3bw-extension { fill: #ffffff; stroke: #000000; }\n    .sb3bw-extension-alt { fill: #ffffff; }\n    .sb3bw-extension-line { stroke: #000000; }\n    .sb3bw-extension-dark { fill: #ffffff; }\n\n    /* obsolete colors: chosen by hand, indicates invalid blocks */ \n    .sb3bw-obsolete { fill: #ffffff; stroke: #000000; }\n    .sb3bw-obsolete-alt { fill: #ffffff; }\n    .sb3bw-obsolete-dark { fill: #ffffff; }\n\n    /* grey: special color from the Scratch 3.0 design mockups */\n    .sb3bw-grey { fill: #ffffff; stroke: #000000; }\n    .sb3bw-grey-alt { fill: #ffffff; }\n    .sb3bw-grey-dark { fill: #ffffff; }\n\n    .sb3bw-input-color {\n      stroke: #000000;\n    }\n\n    .sb3bw-input-number,\n    .sb3bw-input-string {\n      fill: #ffffff;\n    }\n    .sb3bw-literal-number,\n    .sb3bw-literal-string,\n    .sb3bw-literal-number-dropdown,\n    .sb3bw-literal-dropdown {\n      word-spacing: 0;\n    }\n    .sb3bw-literal-number,\n    .sb3bw-literal-string {\n      fill: #000000;\n    }\n\n    .sb3bw-comment {\n      fill: #ffffff;\n      stroke: #000000;\n      stroke-width: 1;\n    }\n    .sb3bw-comment-line {\n      fill: #ffffff;\n    }\n    .sb3bw-comment-label {\n      font: 400 12pt Helevetica Neue, Helvetica, sans-serif;\n      fill: #000000;\n      word-spacing: 0;\n    }\n\n    .sb3bw-diff {\n      fill: none;\n      stroke: #000000;\n    }\n    .sb3bw-diff-ins {\n      stroke-width: 2px;\n    }\n    .sb3bw-diff-del {\n      stroke-width: 3px;\n    }\n  ".replace(/[ \n]+/, " "),
    makeIcons: function makeIcons() {
      return [draw$2.setProps(draw$2.group([draw$2.el("path", {
        d: "M20.8 3.7c-.4-.2-.9-.1-1.2.2-2 1.6-4.8 1.6-6.8 0-2.3-1.9-5.6-2.3-8.3-1v-.4c0-.6-.5-1-1-1s-1 .4-1 1v18.8c0 .5.5 1 1 1h.1c.5 0 1-.5 1-1v-6.4c1-.7 2.1-1.2 3.4-1.3 1.2 0 2.4.4 3.4 1.2 2.9 2.3 7 2.3 9.8 0 .3-.2.4-.5.4-.9V4.7c0-.5-.3-.9-.8-1zm-.3 10.2C18 16 14.4 16 11.9 14c-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2l.1.1-.1 9.2z",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M20.6 4.8l-.1 9.1v.1c-2.5 2-6.1 2-8.6 0-1.1-.9-2.5-1.4-4-1.4-1.2.1-2.3.5-3.4 1.1V4c2.5-1.4 5.5-1.1 7.7.6 2.4 1.9 5.7 1.9 8.1 0h.2c0 .1.1.1.1.2z",
        fill: "#000000"
      })]), {
        id: "sb3bw-greenFlag"
      }), draw$2.setProps(draw$2.group([draw$2.el("path", {
        d: "M12.71 2.44A2.41 2.41 0 0 1 12 4.16L8.08 8.08a2.45 2.45 0 0 1-3.45 0L.72 4.16A2.42 2.42 0 0 1 0 2.44 2.48 2.48 0 0 1 .71.71C1 .47 1.43 0 6.36 0s5.39.46 5.64.71a2.44 2.44 0 0 1 .71 1.73z",
        fill: "#000000",
        opacity: ".1"
      }), draw$2.el("path", {
        d: "M6.36 7.79a1.43 1.43 0 0 1-1-.42L1.42 3.45a1.44 1.44 0 0 1 0-2c.56-.56 9.31-.56 9.87 0a1.44 1.44 0 0 1 0 2L7.37 7.37a1.43 1.43 0 0 1-1.01.42z",
        fill: "#000000"
      })]), {
        id: "sb3bw-dropdownArrow",
        transform: "scale(0.944)"
      }), draw$2.setProps(draw$2.group([draw$2.el("path", {
        d: "M22.68 12.2a1.6 1.6 0 0 1-1.27.63h-7.69a1.59 1.59 0 0 1-1.16-2.58l1.12-1.41a4.82 4.82 0 0 0-3.14-.77 4.31 4.31 0 0 0-2 .8A4.25 4.25 0 0 0 7.2 10.6a5.06 5.06 0 0 0 .54 4.62A5.58 5.58 0 0 0 12 17.74a2.26 2.26 0 0 1-.16 4.52A10.25 10.25 0 0 1 3.74 18a10.14 10.14 0 0 1-1.49-9.22 9.7 9.7 0 0 1 2.83-4.14A9.92 9.92 0 0 1 9.66 2.5a10.66 10.66 0 0 1 7.72 1.68l1.08-1.35a1.57 1.57 0 0 1 1.24-.6 1.6 1.6 0 0 1 1.54 1.21l1.7 7.37a1.57 1.57 0 0 1-.26 1.39z",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M21.38 11.83h-7.61a.59.59 0 0 1-.43-1l1.75-2.19a5.9 5.9 0 0 0-4.7-1.58 5.07 5.07 0 0 0-4.11 3.17A6 6 0 0 0 7 15.77a6.51 6.51 0 0 0 5 2.92 1.31 1.31 0 0 1-.08 2.62 9.3 9.3 0 0 1-7.35-3.82 9.16 9.16 0 0 1-1.4-8.37A8.51 8.51 0 0 1 5.71 5.4a8.76 8.76 0 0 1 4.11-1.92 9.71 9.71 0 0 1 7.75 2.07l1.67-2.1a.59.59 0 0 1 1 .21L22 11.08a.59.59 0 0 1-.62.75z",
        fill: "#000000"
      })]), {
        id: "sb3bw-turnRight"
      }), draw$2.setProps(draw$2.group([draw$2.el("path", {
        d: "M20.34 18.21a10.24 10.24 0 0 1-8.1 4.22 2.26 2.26 0 0 1-.16-4.52 5.58 5.58 0 0 0 4.25-2.53 5.06 5.06 0 0 0 .54-4.62A4.25 4.25 0 0 0 15.55 9a4.31 4.31 0 0 0-2-.8 4.82 4.82 0 0 0-3.15.8l1.12 1.41A1.59 1.59 0 0 1 10.36 13H2.67a1.56 1.56 0 0 1-1.26-.63A1.54 1.54 0 0 1 1.13 11l1.72-7.43A1.59 1.59 0 0 1 4.38 2.4a1.57 1.57 0 0 1 1.24.6L6.7 4.35a10.66 10.66 0 0 1 7.72-1.68A9.88 9.88 0 0 1 19 4.81 9.61 9.61 0 0 1 21.83 9a10.08 10.08 0 0 1-1.49 9.21z",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M19.56 17.65a9.29 9.29 0 0 1-7.35 3.83 1.31 1.31 0 0 1-.08-2.62 6.53 6.53 0 0 0 5-2.92 6.05 6.05 0 0 0 .67-5.51 5.32 5.32 0 0 0-1.64-2.16 5.21 5.21 0 0 0-2.48-1A5.86 5.86 0 0 0 9 8.84L10.74 11a.59.59 0 0 1-.43 1H2.7a.6.6 0 0 1-.6-.75l1.71-7.42a.59.59 0 0 1 1-.21l1.67 2.1a9.71 9.71 0 0 1 7.75-2.07 8.84 8.84 0 0 1 4.12 1.92 8.68 8.68 0 0 1 2.54 3.72 9.14 9.14 0 0 1-1.33 8.36z",
        fill: "#000000"
      })]), {
        id: "sb3bw-turnLeft"
      }), draw$2.el("path", {
        d: "M0 0L4 4L0 8Z",
        fill: "#000000",
        id: "sb3bw-addInput"
      }), draw$2.el("path", {
        d: "M4 0L4 8L0 4Z",
        fill: "#000000",
        id: "sb3bw-delInput"
      }), draw$2.setProps(draw$2.group([draw$2.el("path", {
        d: "M23.3 11c-.3.6-.9 1-1.5 1h-1.6c-.1 1.3-.5 2.5-1.1 3.6-.9 1.7-2.3 3.2-4.1 4.1-1.7.9-3.6 1.2-5.5.9-1.8-.3-3.5-1.1-4.9-2.3-.7-.7-.7-1.9 0-2.6.6-.6 1.6-.7 2.3-.2H7c.9.6 1.9.9 2.9.9s1.9-.3 2.7-.9c1.1-.8 1.8-2.1 1.8-3.5h-1.5c-.9 0-1.7-.7-1.7-1.7 0-.4.2-.9.5-1.2l4.4-4.4c.7-.6 1.7-.6 2.4 0L23 9.2c.5.5.6 1.2.3 1.8z",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M21.8 11h-2.6c0 1.5-.3 2.9-1 4.2-.8 1.6-2.1 2.8-3.7 3.6-1.5.8-3.3 1.1-4.9.8-1.6-.2-3.2-1-4.4-2.1-.4-.3-.4-.9-.1-1.2.3-.4.9-.4 1.2-.1 1 .7 2.2 1.1 3.4 1.1s2.3-.3 3.3-1c.9-.6 1.6-1.5 2-2.6.3-.9.4-1.8.2-2.8h-2.4c-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.4l4.4-4.4c.3-.3.7-.3.9 0L22 9.8c.3.3.4.6.3.9s-.3.3-.5.3z",
        fill: "#000000"
      })]), {
        id: "sb3bw-loopArrow"
      }), draw$2.setProps(draw$2.group([draw$2.el("path", {
        d: "M28.456 21.675c-.009-.312-.087-.825-.256-1.702-.096-.495-.612-3.022-.753-3.73-.395-1.98-.76-3.92-1.142-6.113-.732-4.223-.693-6.05.344-6.527.502-.23 1.06-.081 1.842.35.413.227 2.181 1.365 2.07 1.296 1.993 1.243 3.463 1.775 4.928 1.549 1.527-.237 2.505-.06 2.877.618.348.635.015 1.416-.729 2.18-1.473 1.516-3.976 2.514-5.849 2.023-.822-.218-1.238-.464-2.38-1.266a9.737 9.737 0 0 0-.095-.066c.047.593.264 1.74.717 3.803.294 1.336 2.079 9.187 2.637 11.674l.002.012c.529 2.637-1.872 4.724-5.235 4.724-3.29 0-6.363-1.988-6.862-4.528-.53-2.64 1.873-4.734 5.233-4.734a8.411 8.411 0 0 1 2.65.437zM11.46 27.666c-.01-.319-.091-.84-.266-1.738-.09-.46-.595-2.937-.753-3.727-.39-1.96-.752-3.892-1.131-6.07-.732-4.224-.692-6.052.344-6.527.502-.23 1.06-.082 1.841.349.414.228 2.181 1.365 2.07 1.296 1.992 1.243 3.461 1.775 4.925 1.549 1.525-.24 2.504-.064 2.876.614.348.635.015 1.415-.728 2.18-1.474 1.517-3.977 2.513-5.847 2.017-.822-.218-1.237-.463-2.38-1.266a9.729 9.729 0 0 0-.094-.065c.047.593.264 1.74.717 3.802.294 1.337 2.078 9.19 2.636 11.675l.003.013c.517 2.638-1.884 4.732-5.234 4.732-3.286 0-6.359-1.993-6.87-4.54-.518-2.639 1.885-4.73 5.242-4.73.904 0 1.802.15 2.65.436z",
        stroke: "#000000",
        "stroke-opacity": 1
      }), draw$2.el("path", {
        d: "M32.18 25.874C32.636 28.157 30.512 30 27.433 30c-3.07 0-5.923-1.843-6.372-4.126-.458-2.285 1.665-4.136 4.743-4.136.647 0 1.283.084 1.89.234a7 7 0 0 1 .938.302c.87-.02-.104-2.294-1.835-12.229-2.134-12.303 3.06-1.87 8.768-2.753 5.708-.885.076 4.82-3.65 3.844-3.724-.987-4.65-7.153.263 14.738zm-16.998 5.99C15.63 34.148 13.507 36 10.439 36c-3.068 0-5.92-1.852-6.379-4.136-.448-2.284 1.674-4.135 4.751-4.135 1.002 0 1.974.197 2.854.544.822-.055-.15-2.377-1.862-12.228-2.133-12.303 3.059-1.87 8.764-2.753 5.706-.894.076 4.821-3.648 3.834-3.723-.987-4.648-7.152.263 14.738z",
        fill: "#000000"
      })]), {
        id: "sb3bw-musicBlock",
        fill: "none"
      }), draw$2.setProps(draw$2.group([draw$2.el("path", {
        d: "M8.753 34.602l-4.251 1.779 1.784-4.236c1.218-2.892 2.907-5.423 5.03-7.538L31.066 4.93c.846-.842 2.65-.41 4.032.967 1.38 1.375 1.816 3.173.97 4.015L16.318 29.59c-2.123 2.116-4.664 3.799-7.565 5.012",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M29.41 6.111s-4.45-2.379-8.202 5.771c-1.734 3.766-4.35 1.546-4.35 1.546"
      }), draw$2.el("path", {
        d: "M36.42 8.825c0 .463-.14.873-.432 1.164l-9.335 9.301c.282-.29.41-.668.41-1.12 0-.874-.507-1.963-1.406-2.868-1.362-1.358-3.147-1.8-4.002-.99L30.99 5.01c.844-.84 2.65-.41 4.035.96.898.904 1.396 1.982 1.396 2.855M10.515 33.774a23.74 23.74 0 0 1-1.764.83L4.5 36.382l1.786-4.235c.258-.604.529-1.186.833-1.757.69.183 1.449.625 2.109 1.282.659.658 1.102 1.412 1.287 2.102",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M36.498 8.748c0 .464-.141.874-.433 1.165l-19.742 19.68c-2.131 2.111-4.673 3.793-7.572 5.01L4.5 36.381l.974-2.317 1.925-.808c2.899-1.218 5.441-2.899 7.572-5.01l19.742-19.68c.292-.292.432-.702.432-1.165 0-.647-.27-1.4-.779-2.123.249.172.498.377.736.614.898.905 1.396 1.983 1.396 2.856",
        fill: "#000000",
        opacity: ".15"
      }), draw$2.el("path", {
        d: "M18.45 12.831a.904.904 0 1 1-1.807 0 .904.904 0 0 1 1.807 0z",
        fill: "#000000"
      })]), {
        id: "sb3bw-penBlock",
        stroke: "#000000",
        fill: "none",
        "stroke-linejoin": "round"
      }), draw$2.setProps(draw$2.group([draw$2.el("circle", {
        opacity: 0.25,
        cx: 32,
        cy: 16,
        r: 4.5
      }), draw$2.el("circle", {
        opacity: 0.5,
        cx: 32,
        cy: 12,
        r: 4.5
      }), draw$2.el("circle", {
        opacity: 0.75,
        cx: 32,
        cy: 8,
        r: 4.5
      }), draw$2.el("circle", {
        cx: 32,
        cy: 4,
        r: 4.5
      }), draw$2.el("path", {
        d: "M22.672 4.42l-6.172 4V6.1c0-2.01-1.563-3.6-3.5-3.6H4.1C2.076 2.5.5 4.076.5 6.1V14c0 1.927 1.584 3.512 3.6 3.6H13c1.902 0 3.5-1.653 3.5-3.6v-2.283l6.257 3.754.097.075c.02.02.098.054.146.054.267 0 .5-.217.5-.5V4.8c0 .037-.056-.094-.129-.243-.145-.242-.43-.299-.7-.137z",
        fill: "#000000",
        "stroke-linejoin": "round"
      })]), {
        id: "sb3bw-videoBlock",
        stroke: "#000000",
        fill: "#00000",
        "stroke-opacity": 1
      }), draw$2.setProps(draw$2.group([draw$2.el("path", {
        d: "M25.644 20.5c-1.667 1.937-4.539 3.429-5.977 3.429a1.25 1.25 0 0 1-.557-.137c-.372-.186-.61-.542-.61-1.03 0-.105.017-.207.05-.308.076-.236.624-.986.727-1.173.27-.484.462-1.075.566-1.865A8.5 8.5 0 0 1 24 3.5h4a8.5 8.5 0 1 1 0 17h-2.356z",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M15.5 21.67c0-1.016-1.494-1.586-2.387-.782l-2.7 2.163A5.958 5.958 0 0 1 6.7 24.33h-.4c-1.035 0-1.8.69-1.8 1.573v4.235c0 .883.765 1.572 1.8 1.572h.4c1.458 0 2.754.423 3.82 1.287l2.598 2.161c.908.75 2.382.188 2.382-.876V21.67z",
        fill: "#000000"
      })]), {
        id: "sb3bw-ttsBlock",
        stroke: "#000000",
        "stroke-opacity": 1
      }), draw$2.el("image", {
        id: "sb3bw-translateBlock",
        width: "40px",
        height: "40px",
        href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAABTVBMVEX///8AAAAAAAAAAAAAAABqamoAAAAAAAAAAAAAAACurq7Ly8vV1dXZ2dnS0tLDw8MAAAAAAAAAAAAAAADb29vq6urz8/P6+vr////9/f319fXx8fHl5eXPz89HR0e2trbu7u7X19ekpKTe3t74+Pjn5+fg4ODi4uIAAACEhISWlpa9vb0AAAAAAADH3v/0+P8AAADHx8e41f9Rmf9WnP/p8v+Pvv9Nl/9Ynf/S5f9ho/9Smv+82P9PmP9Ml/+Rv/9uqv9mpf9coP+MvP9an/9zrf9Qmf+rzf+Dtv9op/+10/+bxP/d6/96sf9jpP+5ubkAAABrqf92r/9/tP9GieeOrtnW19mgx/96otnZ4u5Znv/q6+5XXnXV19ygpLGWmqhhZ3309fbKzNTAwsuLkKBtbW3s7OxMTEy1uMJ2fI5rcobf4eVFRUWBhperrrqQI7PpAAAAbXRSTlMADBUdJkERBQIfeLzl/9ehGA4aJP///////////8kyhf/yav//////E09ckwcK//8hrv///////////////////////////////////////0b//////////////////////////z//L/////80bccdAQAABJxJREFUeAHtmOd/qkoTgDELVhZLiKwRseuRA5Y00uT03nvvvf7/H++CmVzNsvvD+74f85ie8DCzO2EGpFOiOSWxgmRFRiiZ+r/o0plsTsUULa8UhMp0sbQqc1ktFdNSQCmnr5UNUlmvmrimJPm+pFXXsACtboVHy7hBjjDMZqvA8xVazXajQ7h0Gu3Z0TLukmMaOFvg+LJwYh5wdCGPe/1+wyAhVZw9E5lvC1dFLji6lZTSaGC3zmpw/mpTidiZtNVskBg0mhbdGcd1i6jVPMq8X4tIulhvk1i060U4ZNCc5WRgJeGcFJa0iACHo4gQtZIU4ozt/FEQ5sS2x4lF4Spm93djc2ub3Wu8KgWkLI1uzWxjyv0eVgfuglDGhGHH290jDFieFUVOn8+prKul/02IcJnMY2CLJxzte8ABfLE/YoWLVVbGMk94OPUZpodMypN2Zc5X6dX4KZ87f/6C5108H3Lgb144f/4Sk3La0nqVOZ9mOaI1HHn+ZfjiIHINJQeMkT5mU674V8MNuTb1rkcKwcjxMcK9q96NIMBd/+o2RwhG8ImFZN+7epOQW1PvfHTZgNFgfBzh3tQ/2L7t+d52pBCMOdzHNfCJC/sOrb4Df3orurDBOFbqyhh8YiFdPlrRdwlHCLiuKwFiITn0fEiYIwTiCa9d9egKHgyDbayaOgbu3ed0Q7Hw9oOrPl1Dz58+3G6ATdQNxcK9R1ep6vpodHfqe4+fPI3XDbnCm/tTqtsdEsqzzcfP43ZDnnC4STdj89aIhLx4Ersb8lrA8ODqy2tw/avoOH435DWp7dvzp166G4rbqBkrQOiGMRq9jvn7y3bDGKMIxiQmWOYPS2Lhq9eUNwIhO86JhW8D4TuOkB0458LsBv+5rPB9IHz/QSyEkRgp2Dj2NQeyfJ8Rfnwd8imGMOy2JlS02RwUo65Cn2l4NMjPsYSuDVXSaWtfqI8VfggW8B398CqOMKOtzcL7ivPfHClK+J26PgZpf48jlHEn1OmqXUpLkcIfr1//DDfmZxzheGKul7u6moXxkRH+orG9JSTI+VcMYfK3htVJa1zkXsnfzkwfoRR5QqBYQmjFEbQGmivwPoYQuiJX+AlsUIoiIfTtjCDCz9TzJ+Q1lKJI6Fg13Mc5y4kSwnXhBwn5CaXIFcI0ZcDsEyH8/m/9vYUvuUJ2OmOEEBbUz0+hkJ0fWeHfv3+/z339ly/kTrirS7cAxgfGNNMNl2pSpdrMB8b2pPBfbyphrconRgG0/G3vPBY2TtwYoaVvzBdAqj4fYkPPFZZ9dLCIO1Bxrz9zGv0e1qzU0g83FkmMbRsaSjtvjx3h45fuXHDMwAk4CWh5VdqfhA+IBs1jo4EVxIzEQKHWhw7aQkXXdSQOxUHThCozaYHxSCnNKiSinbXtAUrzjF+0NvRHbLtc45ks1IjR6NOtyXNP7nzL46+zINe0jBQJWyNdwT1JumSreqjs8P4KasQ0QNgQ/mlinFX1bnndnIwlAUmlhs3qeoUY5TU9V5JEFMetiYq130lJRKqg5MOyU3PZTFoS46wgVIIezlcmEZIHMlrh/OUpp/wDfCaVjn0YjrEAAAAASUVORK5CYII="
      }), draw$2.el("image", {
        id: "sb3bw-microbitBlock",
        width: "40px",
        height: "40px",
        href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAKQElEQVR4AeybBVAcSxeF4+4OwcND4hV3fB1NFuLu7i5IXLCHS9wV97cQd3d3d/e9/9wh6YI/AwOT2dqF2q46leb07e7b3/RMr2RLaIu2aIu2aIu2aIu2aIu2aIu2aIu2aIv6SuSG1I3ha5NOb9ihOJt58MyV/5di/5mr4RtSTkZtTL0Wvi59bJFZGACUbN68eWUzM7M6TY2N6zcxMmqgCvkGbVakpe+HjMxDkLn3CKPSFQchLeMALF21doWq8sA1WlhY1LY2sq7ACzwcTDA5Lkqy/MEnWehPpSwUoGBSgnDijjzbhRP+bJMsvga2soFgI/RQm2yFHh9thO77O9pIhaamptX+CqC5uXlVwbSkraywGOA5DA8DW5fRecHDZNUMjwWkyONLZyupDQWxPGeAuJ2lAW9+cIGHSRCADPBQGgqPyFogj2nWrFlNzrdvl74+1lzhEYDM8FAaDI/oBj77OQPsOsBPyhUeAcgMD6XZ8FAC9wfULVxXNQBZ4BGAzPBQf8KTDQLBiAgQjN3IoE1gP9gfbEQ9iwVAFngEIIHHJju38SBZ8RCkfq9BNP84iOcezC3PMyAL+gLiBSfAVtK/uAAk8P5aIs9TIPV9DjaOQ8FG3PfPiyHpA3Yes3BO3I3FASB/8FBSv5cgmr3vV/017l7ShvOIZmVhnYYsmnOwqAPkFx5K4n2OgvMCbJ2G5b0De82h5xeM316UAfIPD2UnnwoSahdK/d+CmLqdRfOP5pLY5wLIgr6CZOFlPGyKEEDVwyOydR4BgnFbQTglDoSTY3MJPcHI1bgTi+opTOAVG9n38QSJ1zkQe1PyOY+i63buU/kDWFzhoRyGBILr7FRw8TySvUmCPoOQPF95A0jgFUuAzkuugvOK+wQePiJ4A9it33KJKuD1GzwBho2eDiKnfsTr2X8s7Tm6DSJejz6jaM/FfSjxsE552EY87IMejlFIgLjzmOHxAbBdZ4c2qrjyp89egEePn8CUGT7Ey9x3iPaW+4YSLzY+lfai124hHtYpD9uIh33QwzEKC1D6LwM8TQd46MhxesGjxs8mXkJyGu15+awi3qYtu2gvICiSeFinPGwjHvZBD8co1CHSbxEIJu4m8FQO0FrgDlb2bmBlx6xu9t0xhjXxLtaO0MlKClYOPYjX1cY526PGIJ6tC3rUuG7EwzrlYRvxsA96OEbe8zLkL6A95vx5BogfLoJH37GwYHEoeC0NY9Qc7zAQyPpq2mHBPX8+AXazc4Ulvuvg/oNHcP8hs67duAuTZizFnaVJhwj3/HkFaOsKq4I20s8a1M1btyEtIwsUmfvh3v0H2d7tezB19gqwJgDVf4hwyl/VAK9evQ4jxs4EsXN/cJEPBe/FfvDg4SN2gOo5RLjnzwdAqetAuHTlOqzwDSYJ7IlJAntJbyC3Wq+RcOjwMXaAajxEEGBB8w8MjqLXLHMd+PCvAcqpZ83Xr99g+44YksCumEQqgV4kAfe+o1kAql8IsKD5xyek0Wvu2W/0I15uYdyFORO4efMW9fzyBrHzAHDuPhh8FrHcwuo/RAqbP65ZtYfI1es3yEP4/oOHmnuIcM+f/5cxS/3W4suAPHXtxh2YMtsXrDTrEOGeP/8vpMfBgsXh4L00jFGzvYJA6NhPw96JcM9f9W/lRH3Y38qpX1zeiqr+wwRb2WAQLziO3+dq9MdZHKR6gAhPNHsvSAI/4JdBmv9xlgYBJPDwk2ppwDsEqPEfZ6kfIAM856XX2AGq/xDRGID4oSOBhx+Du02PAadFlwhADZf6ATqMigLJwosg9j6fLa+z1N8X8Ltc7SFSjL4TKdYAtYcIR2kPkWIi9QMc1EcIkZ5NH0V5Nb20eGr7r7ai/N+22YnlsHmJ5bcz6+s+PbGm3rt54zqTNrZ+GxY3+XEgUuexIkTvWUH7oQJmt1KeWFvvxaEonWe+M1sr2XJ0dnGB/4INPp1aW/dJ6r+GHwb0FqsGYH9q4ORAg6M4YEujljX8ppv3ifZu+iW/5OJ8G31d5204GOOFXevonFxT99qMUd1YIcT7N/oRMe+fqfgTA/xf8on+hskF6RcyrwUkB+itb9KkSS3U1iWmwcFzW+YZ7yDpAafX1n23YoxR+5ZGRjUWjarX/Oz6Oq+cnF34B7h9mRlMHWHREX1sb21iUn1feMMb9mI5Y3J45Y9G17/5+9c+np6epYJnGDumBRnmCwH7nV1X5yUC+J1H++YN9RIDTL6zAEQYH3MuGOuKEIN3ecVPGmZNbQr9mI4dO1b8FV8+ZqVhpNfEjvwDVITow6rJZh7W1tZlsA0XeH5jned4CzAlJ5J1h/Mbaj/DOIxv3bp1Wf8Zlv2PRTfIFwL2u7Oz6ifcedhPLpeXHjPIstWR6AZKNoC3dlT7bk3BxouFsjQ01Dm3ofa3vOLnj+8M6UH6mVSOVXDNVI6V9qw03uo/u5VqAF7ZUvON1xgzO9wRu1ca74CsEsr8AGJ7zEqjLd2a6urPHW0quLq15tuCAITMEpAapL9X2sXAZFJ/s3an1tV9zNYP9SS2EuyP0Lkk6mxu3q2l5T/JgYZn0MsP4MfUMspoT7OZ+Kus4Dlmo5/HV/jBK0APuQz2rDSFa1tr4MJoKTNLKH/Xz66vDVmhenBsdX04EtUADkbqwFGqfiBChzH+ZUJ5OI6x0Q2oGF28zWFfuC7dnzpoICusYe5+Wdl9X1H9MGY/3acBNUY9+qKeXlcXzqyvQ9e/ppci/X7+mvML5eF8CipH6kJgPMbS3vVt1chcv+NRCf7GGMMPwCH9hHhlKVXMTk5REj6nlcN6Lr1NLkvqb5Jyt3/PKJPr7/cpzLEfUnPG4eLLwY//SgOJTSyXYwwSCwSCIvvfj6kV8pzvh4LMReb4llEWPqWVh1eJVeBDSkU4HN0A21QD8PQGE9gf1aRQAFNCWnECeGajCZzfZFhogNtWdYUD0Y3hWXx1VoDpYS0hNqA9hPqIIWKhEDJCW/IDEEvT1q0bUQCVBCC94Mpwc4dOYQBSfWtyAnh5qx5CKDTAsxuN4fp2XapekhXgje06cHGzAf0vbo5LW/QJQCuB/Cz+XpozQOw8ZrDdyZwAiQoOEMUJIFHhAOYWC0AGEYDU15sr8TfTnAFSx3u50QNaCKgH7uf/tXPWCBFDURSdEnd3Ghxa1kiPu7trh7tHx911DbybLTAV3BNPniX5kh9L/rMDqK1W54a6hzpxOWT7Dfh3AC4J7mYaLpSVakf0oDiRPinIYpo6Kcgoq9WOm6mmr4/FGrvUvvrTTIP6vlBrv5+u/87I9sxpQTZ2WJTENHNWkPVsl4c+IbtQpz9MN6gfIns33aC8z9ean0s19uvJps+syGGIix58pY4LMv6dkgh83M80KK/zdQZkryaaP5XlGsf3crUT85JL0ogpcVyYgm8swzf8XYndb0u2xpKFLWO9wgtZ+JBpOnlcmEmeFKR2RtrHhgfq6nHNa8sHOAu4WscF518f8IMNtEisFhchhBBCCCGEEEJIPvkBF5B61BH0sY4AAAAASUVORK5CYII="
      }), draw$2.setProps(draw$2.group([draw$2.el("path", {
        d: "M23.513 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M24.91 11.17h-.73c-.319 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z"
      }), draw$2.el("path", {
        d: "M9.54 11.17h-.728c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M10.938 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.257-.479-.577-.479z"
      }), draw$2.el("path", {
        d: "M26.305 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M27.702 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z"
      }), draw$2.el("path", {
        d: "M29.101 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M30.498 11.17h-.73c-.318 0-.576.213-.576.478v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z"
      }), draw$2.el("path", {
        d: "M17.925 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M19.322 11.17h-.73c-.319 0-.577.213-.577.478v1.08h1.883v-1.08c0-.265-.258-.479-.576-.479z"
      }), draw$2.el("path", {
        d: "M20.717 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M22.114 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z"
      }), draw$2.el("path", {
        d: "M15.129 11.17H14.4c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M16.526 11.17h-.729c-.32 0-.576.213-.576.478v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z"
      }), draw$2.el("path", {
        d: "M12.335 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.882v-1.08c0-.265-.26-.479-.577-.479",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M13.732 11.17h-.73c-.319 0-.575.213-.575.478v1.08h1.883v-1.08c0-.265-.26-.479-.578-.479z"
      }), draw$2.el("path", {
        d: "M31.893 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M33.29 11.17h-.73c-.318 0-.574.213-.574.478v1.08h1.882v-1.08c0-.265-.26-.479-.578-.479z"
      }), draw$2.el("path", {
        d: "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992",
        fill: "#000"
      }), draw$2.el("path", {
        d: "M33.647 28.407H15.765V12.533h17.882c.52 0 .941.445.941.992v13.89c0 .547-.421.992-.94.992z",
        stroke: "#000000",
        "stroke-width": ".893"
      }), draw$2.el("path", {
        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
        fill: "#000"
      }), draw$2.el("path", {
        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
        stroke: "#000000",
        "stroke-width": ".893"
      }), draw$2.el("path", {
        d: "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M12.941 12.533H11.06c-1.559 0-2.824 1.334-2.824 2.977v1.986c0 .547.422.992.941.992H12c.52 0 .941-.445.941-.992V15.51c0-1.643 1.265-2.977 2.824-2.977h.94-3.764z",
        stroke: "#000000",
        "stroke-width": ".893"
      }), draw$2.el("path", {
        stroke: "#000000",
        "stroke-width": ".893",
        d: "M4.47 20.474h27.961l2.157 2.974"
      }), draw$2.el("path", {
        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V16.502c0-2.19 1.686-3.969 3.764-3.969h15.06-3.766c-2.078 0-3.764 1.778-3.764 3.969v11.905z",
        stroke: "#000000",
        "stroke-width": ".893"
      }), draw$2.el("path", {
        d: "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M21.307 18.964h-.73c-.319 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.576-.479z"
      }), draw$2.el("path", {
        d: "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M24.178 18.964h-.728c-.32 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.258-.479-.578-.479z"
      }), draw$2.el("path", {
        d: "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M27.051 18.964h-.73c-.318 0-.576.214-.576.479v1.08h1.882v-1.08c0-.265-.257-.479-.576-.479z"
      }), draw$2.el("path", {
        d: "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M29.923 18.964h-.729c-.32 0-.576.214-.576.479v1.08h1.883v-1.08c0-.265-.258-.479-.578-.479z"
      }), draw$2.el("path", {
        d: "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M33.647 28.407H15.765V20.47H32.43l2.157 2.978v3.966c0 .548-.421.993-.94.993z",
        stroke: "#000000",
        "stroke-width": ".893"
      }), draw$2.el("path", {
        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z",
        fill: "#000000"
      }), draw$2.el("path", {
        d: "M15.765 28.407H5.412c-.52 0-.941-.445-.941-.993V20.47h11.294v7.937z",
        stroke: "#000000",
        "stroke-width": ".893"
      }), draw$2.el("path", {
        fill: "#000000",
        d: "M19.53 24.438h11.294V20.47H19.529z"
      }), draw$2.el("path", {
        stroke: "#000000",
        "stroke-width": ".893",
        d: "M19.53 24.438h11.294V20.47H19.529zm12.902-3.964l2.157-2.794"
      })]), {
        id: "sb3bw-wedoBlock",
        fill: "none"
      }), draw$2.setProps(draw$2.group([draw$2.el("rect", {
        stroke: "#000000",
        fill: "#000",
        x: ".5",
        y: "3.59",
        width: "28",
        height: "25.81",
        rx: "1"
      }), draw$2.el("rect", {
        stroke: "#000000",
        fill: "#000000",
        x: "2.5",
        y: ".5",
        width: "24",
        height: "32",
        rx: "1"
      }), draw$2.el("path", {
        stroke: "#000000",
        fill: "#000",
        d: "M2.5 14.5h24v13h-24z"
      }), draw$2.el("path", {
        d: "M14.5 10.5v4",
        stroke: "#000000",
        fill: "#000000"
      }), draw$2.el("rect", {
        fill: "#000000",
        x: "4.5",
        y: "2.5",
        width: "20",
        height: "10",
        rx: "1"
      }), draw$2.el("rect", {
        fill: "#000000",
        opacity: ".5",
        x: "13.5",
        y: "20.13",
        width: "2",
        height: "2",
        rx: ".5"
      }), draw$2.el("path", {
        d: "M9.06 20.13h1.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1.5a1 1 0 0 1 0-2zM19.93 22.13h-1.51a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1.5a1 1 0 0 1 .01 2zM8.23 17.5H5a.5.5 0 0 1-.5-.5v-2.5h6l-1.85 2.78a.51.51 0 0 1-.42.22zM18.15 18.85l-.5.5a.49.49 0 0 0-.15.36V20a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5H12a.5.5 0 0 1-.5-.5v-.29a.49.49 0 0 0-.15-.36l-.5-.5a.51.51 0 0 1 0-.71l1.51-1.49a.47.47 0 0 1 .35-.15h3.58a.47.47 0 0 1 .35.15l1.51 1.49a.51.51 0 0 1 0 .71zM10.85 23.45l.5-.5a.49.49 0 0 0 .15-.36v-.29a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v.29a.49.49 0 0 0 .15.36l.5.5a.5.5 0 0 1 0 .7l-1.51 1.5a.47.47 0 0 1-.35.15h-3.58a.47.47 0 0 1-.35-.15l-1.51-1.5a.5.5 0 0 1 0-.7z",
        fill: "#000000",
        opacity: ".5"
      }), draw$2.el("path", {
        d: "M21.5 27.5h5v4a1 1 0 0 1-1 1h-4v-5z",
        stroke: "#000000",
        fill: "#000000"
      })]), {
        transform: "translate(5.5 3.5)",
        id: "sb3bw-ev3Block"
      }), draw$2.setProps(draw$2.group([draw$2.el("path", {
        d: "M35 28H5a1 1 0 0 1-1-1V12c0-.6.4-1 1-1h30c.5 0 1 .4 1 1v15c0 .5-.5 1-1 1z",
        fill: "#000"
      }), draw$2.el("path", {
        fill: "red",
        d: "M4 25h32v2.7H4zm9-1h-2.2a1 1 0 0 1-1-1v-9.7c0-.6.4-1 1-1H13c.6 0 1 .4 1 1V23c0 .6-.5 1-1 1z"
      }), draw$2.el("path", {
        fill: "red",
        d: "M6.1 19.3v-2.2c0-.5.4-1 1-1h9.7c.5 0 1 .5 1 1v2.2c0 .5-.5 1-1 1H7.1a1 1 0 0 1-1-1z"
      }), draw$2.el("circle", {
        fill: "red",
        cx: "22.8",
        cy: "18.2",
        r: "3.4"
      }), draw$2.el("circle", {
        fill: "red",
        cx: "30.6",
        cy: "18.2",
        r: "3.4"
      }), draw$2.el("path", {
        fill: "red",
        d: "M4.2 27h31.9v.7H4.2z"
      }), draw$2.el("circle", {
        fill: "#000000",
        cx: "22.8",
        cy: "18.2",
        r: "2.3"
      }), draw$2.el("circle", {
        fill: "#000000",
        cx: "30.6",
        cy: "18.2",
        r: "2.3"
      }), draw$2.el("path", {
        fill: "#000000",
        d: "M12.5 22.9h-1.2c-.3 0-.5-.2-.5-.5V14c0-.3.2-.5.5-.5h1.2c.3 0 .5.2.5.5v8.4c0 .3-.2.5-.5.5z"
      }), draw$2.el("path", {
        fill: "#000000",
        d: "M7.2 18.7v-1.2c0-.3.2-.5.5-.5h8.4c.3 0 .5.2.5.5v1.2c0 .3-.2.5-.5.5H7.7c-.3 0-.5-.2-.5-.5zM4 26h32v2H4z"
      }), draw$2.el("path", {
        stroke: "#666",
        "stroke-width": ".5",
        d: "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z"
      }), draw$2.el("path", {
        stroke: "#000",
        "stroke-width": ".5",
        d: "M35.2 27.9H4.8a1 1 0 0 1-1-1V12.1c0-.6.5-1 1-1h30.5c.5 0 1 .4 1 1V27a1 1 0 0 1-1.1.9z"
      })]), {
        id: "sb3bw-makeymakeyBlock",
        fill: "none"
      })];
    },
    makeStyle: function makeStyle() {
      var style = draw$2.el("style");
      style.appendChild(draw$2.cdata(Style.cssContent));
      return style;
    },
    defaultFont: "500 12pt Sarabun, Helevetica Neue, Helvetica, sans-serif",
    commentFont: "400 12pt Sarabun, Helevetica Neue, Helvetica, sans-serif"
  };
});
var style_1$2 = style$2.cssContent;
var style_2$2 = style$2.makeIcons;
var style_3$2 = style$2.makeStyle;
var style_4$2 = style$2.defaultFont;
var style_5$2 = style$2.commentFont;

var Label$5 = syntax$1.Label,
    Icon$5 = syntax$1.Icon,
    Input$5 = syntax$1.Input,
    Block$5 = syntax$1.Block,
    Comment$5 = syntax$1.Comment,
    Glow$5 = syntax$1.Glow,
    Script$5 = syntax$1.Script,
    Document$5 = syntax$1.Document;
var defaultFont$1 = style$2.defaultFont,
    commentFont$1 = style$2.commentFont,
    makeStyle$2 = style$2.makeStyle,
    makeIcons$2 = style$2.makeIcons;
/* Label */

var LabelView$2 = function LabelView(label) {
  _extends(this, label);

  this.el = null;
  this.height = 12;
  this.metrics = null;
  this.x = 0;
};

LabelView$2.prototype.isLabel = true;

LabelView$2.prototype.draw = function () {
  return this.el;
};

Object.defineProperty(LabelView$2.prototype, "width", {
  get: function get() {
    return this.metrics.width;
  }
});
LabelView$2.metricsCache = {};
LabelView$2.toMeasure = [];

LabelView$2.prototype.measure = function () {
  var value = this.value;
  var cls = "sb3bw-" + this.cls;
  this.el = draw$2.text(0, 13, value, {
    class: "sb3bw-label " + cls
  });
  var cache = LabelView$2.metricsCache[cls];

  if (!cache) {
    cache = LabelView$2.metricsCache[cls] = Object.create(null);
  }

  if (Object.hasOwnProperty.call(cache, value)) {
    this.metrics = cache[value];
  } else {
    var font = /comment-label/.test(this.cls) ? commentFont$1 : defaultFont$1;
    this.metrics = cache[value] = LabelView$2.measure(value, font); // TODO: word-spacing? (fortunately it seems to have no effect!)
  }
};

LabelView$2.measure = function (value, font) {
  var context = LabelView$2.measuring;
  context.font = font;
  var textMetrics = context.measureText(value);
  var width = textMetrics.width + 0.5 | 0;
  return {
    width: width
  };
};
/* Icon */


var IconView$2 = function IconView(icon) {
  _extends(this, icon);

  var info = IconView.icons[this.name];

  if (!info) {
    throw new Error("no info for icon: " + this.name);
  }

  _extends(this, info);
};

IconView$2.prototype.isIcon = true;

IconView$2.prototype.draw = function () {
  return draw$2.symbol("#sb3bw-" + this.name, {
    width: this.width,
    height: this.height
  });
};

IconView$2.icons = {
  greenFlag: {
    width: 20,
    height: 21,
    dy: -2
  },
  turnLeft: {
    width: 24,
    height: 24
  },
  turnRight: {
    width: 24,
    height: 24
  },
  loopArrow: {
    width: 24,
    height: 24
  },
  addInput: {
    width: 4,
    height: 8
  },
  delInput: {
    width: 4,
    height: 8
  },
  musicBlock: {
    width: 40,
    height: 40
  },
  penBlock: {
    width: 40,
    height: 40
  },
  videoBlock: {
    width: 40,
    height: 40,
    dy: 10
  },
  ttsBlock: {
    width: 40,
    height: 40
  },
  translateBlock: {
    width: 40,
    height: 40
  },
  wedoBlock: {
    width: 40,
    height: 40
  },
  ev3Block: {
    width: 40,
    height: 40
  },
  microbitBlock: {
    width: 40,
    height: 40
  },
  makeymakeyBlock: {
    width: 40,
    height: 40
  }
};
/* Line */

var LineView$1 = function LineView() {
  this.width = 1;
  this.height = 40;
  this.x = 0;
};

LineView$1.prototype.isLine = true;

LineView$1.prototype.measure = function () {};

LineView$1.prototype.draw = function (parent) {
  var category = parent.info.category;
  return draw$2.el("line", {
    class: "sb3bw-" + category + "-line",
    "stroke-linecap": "round",
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 40
  });
};
/* Input */


var InputView$2 = function InputView(input) {
  _extends(this, input);

  if (input.label) {
    this.label = newView$2(input.label);
  }

  this.isBoolean = this.shape === "boolean";
  this.isDropdown = this.shape === "dropdown";
  this.isRound = !(this.isBoolean || this.isDropdown);
  this.x = 0;
};

InputView$2.prototype.isInput = true;

InputView$2.prototype.measure = function () {
  if (this.hasLabel) this.label.measure();
};

InputView$2.shapes = {
  string: draw$2.pillRect,
  number: draw$2.pillRect,
  "number-dropdown": draw$2.pillRect,
  color: draw$2.pillRect,
  dropdown: draw$2.roundRect,
  boolean: draw$2.pointedRect,
  stack: draw$2.stackRect,
  reporter: draw$2.pillRect
};

InputView$2.prototype.draw = function (parent) {

  if (this.isBoolean) {
    var w = 48;
  } else if (this.isColor) {
    var w = 40;
  } else if (this.hasLabel) {
    var label = this.label.draw(); // Minimum padding of 11
    // Minimum width of 40, at which point we center the label

    var px = this.label.width >= 18 ? 11 : (40 - this.label.width) / 2;
    var w = this.label.width + 2 * px;
    label = draw$2.move(px, 9, label);
  } else {
    var w = this.isInset ? 30 : null;
  }

  if (this.hasArrow) w += 20;
  this.width = w;
  var h = this.height = 32;
  var el = InputView$2.shapes[this.shape](w, h);
  draw$2.setProps(el, {
    class: [this.isColor ? "" : "sb3bw-" + parent.info.category, "sb3bw-input", "sb3bw-input-" + this.shape].join(" ")
  });

  if (this.isColor) {
    draw$2.setProps(el, {
      fill: this.value
    });
  } else if (this.shape === "dropdown") {
    // custom colors
    if (parent.info.color) {
      draw$2.setProps(el, {
        fill: parent.info.color,
        stroke: "rgba(0, 0, 0, 0.2)"
      });
    }
  } else if (this.shape === "number-dropdown") {
    el.classList.add("sb3bw-" + parent.info.category + "-alt"); // custom colors

    if (parent.info.color) {
      draw$2.setProps(el, {
        fill: "rgba(0, 0, 0, 0.1)",
        stroke: "rgba(0, 0, 0, 0.15)" // combines with fill...

      });
    }
  } else if (this.shape === "boolean") {
    el.classList.remove("sb3bw-" + parent.info.category);
    el.classList.add("sb3bw-" + parent.info.category + "-dark"); // custom colors

    if (parent.info.color) {
      draw$2.setProps(el, {
        fill: "rgba(0, 0, 0, 0.15)"
      });
    }
  }

  var result = draw$2.group([el]);

  if (this.hasLabel) {
    result.appendChild(label);
  }

  if (this.hasArrow) {
    result.appendChild(draw$2.move(w - 24, 13, draw$2.symbol("#sb3bw-dropdownArrow", {})));
  }

  return result;
};
/* Block */


var BlockView$2 = function BlockView(block) {
  _extends(this, block);

  this.children = block.children.map(newView$2);
  this.comment = this.comment ? newView$2(this.comment) : null;
  this.isRound = this.isReporter; // Avoid accidental mutation

  this.info = _extends({}, block.info);

  switch (this.info.category) {
    case "music":
      this.children.unshift(new LineView$1());
      this.children.unshift(new IconView$2({
        name: "musicBlock"
      }));
      this.info.category = "extension";
      break;

    case "pen":
      this.children.unshift(new LineView$1());
      this.children.unshift(new IconView$2({
        name: "penBlock"
      }));
      this.info.category = "extension";
      break;

    case "video":
      this.children.unshift(new LineView$1());
      this.children.unshift(new IconView$2({
        name: "videoBlock"
      }));
      this.info.category = "extension";
      break;

    case "tts":
    case "translate":
    case "wedo":
    case "ev3":
    case "microbit":
    case "makeymakey":
      this.children.unshift(new LineView$1());
      this.children.unshift(new IconView$2({
        name: this.info.category + "Block"
      }));
      this.info.category = "extension";
      break;
  }

  this.x = 0;
  this.width = null;
  this.height = null;
  this.firstLine = null;
  this.innerWidth = null;
};

BlockView$2.prototype.isBlock = true;

BlockView$2.prototype.measure = function () {
  for (var i = 0; i < this.children.length; i++) {
    var child = this.children[i];
    if (child.measure) child.measure();
  }

  if (this.comment) this.comment.measure();
};

BlockView$2.shapes = {
  stack: draw$2.stackRect,
  "c-block": draw$2.stackRect,
  "if-block": draw$2.stackRect,
  celse: draw$2.stackRect,
  cend: draw$2.stackRect,
  cap: draw$2.capRect,
  reporter: draw$2.pillRect,
  boolean: draw$2.pointedRect,
  hat: draw$2.hatRect,
  cat: draw$2.catHat,
  "define-hat": draw$2.procHatRect,
  ring: draw$2.pillRect
};

BlockView$2.prototype.drawSelf = function (w, h, lines) {
  // mouths
  if (lines.length > 1) {
    return draw$2.mouthRect(w, h, this.isFinal, lines, {
      class: ["sb3bw-" + this.info.category].join(" ")
    });
  } // outlines


  if (this.info.shape === "outline") {
    return draw$2.setProps(draw$2.stackRect(w, h), {
      class: ["sb3bw-" + this.info.category, "sb3bw-" + this.info.category + "-alt"].join(" ")
    });
  } // rings


  if (this.isRing) {
    var child = this.children[0];

    if (child && (child.isInput || child.isBlock || child.isScript)) {
      var shape = child.isScript ? "stack" : child.isInput ? child.shape : child.info.shape;
      return draw$2.roundRect(w, h, {
        class: ["sb3bw-" + this.info.category].join(" ")
      });
    }
  }

  var func = BlockView$2.shapes[this.info.shape];

  if (!func) {
    throw new Error("no shape func: " + this.info.shape);
  }

  return func(w, h, {
    class: ["sb3bw-" + this.info.category].join(" ")
  });
};

BlockView$2.padding = {
  hat: [24, 8],
  cat: [24, 8],
  "define-hat": [20, 16],
  null: [4, 4]
};

BlockView$2.prototype.horizontalPadding = function (child) {
  if (this.isRound) {
    if (child.isIcon) {
      return 16;
    } else if (child.isLabel) {
      return 12; // text in circle: 3 units
    } else if (child.isDropdown) {
      return 12; // square in circle: 3 units
    } else if (child.isBoolean) {
      return 12; // hexagon in circle: 3 units
    } else if (child.isRound) {
      return 4; // circle in circle: 1 unit
    }
  } else if (this.isBoolean) {
    if (child.isIcon) {
      return 24; // icon in hexagon: ???
    } else if (child.isLabel) {
      return 20; // text in hexagon: 5 units
    } else if (child.isDropdown) {
      return 20; // square in hexagon: 5 units
    } else if (child.isRound && child.isBlock) {
      return 24; // circle in hexagon: 5 + 1 units
    } else if (child.isRound) {
      return 20; // circle in hexagon: 5 units
    } else if (child.isBoolean) {
      return 8; // hexagon in hexagon: 2 units
    }
  }

  return 8; // default: 2 units
};

BlockView$2.prototype.marginBetween = function (a, b) {
  // Consecutive labels should be rendered as a single text element.
  // For now, approximate the size of one space
  if (a.isLabel && b.isLabel) {
    return 5;
  }

  return 8; // default: 2 units
};

BlockView$2.prototype.draw = function () {
  var isDefine = this.info.shape === "define-hat";
  var children = this.children;
  var isCommand = this.isCommand;
  var padding = BlockView$2.padding[this.info.shape] || BlockView$2.padding[null];
  var pt = padding[0],
      pb = padding[1];

  var y = this.info.shape === "cat" ? 16 : 0;

  var Line = function Line(y) {
    this.y = y;
    this.width = 0;
    this.height = isCommand ? 40 : 32;
    this.children = [];
  };

  var innerWidth = 0;
  var scriptWidth = 0;
  var line = new Line(y);

  function pushLine() {
    if (lines.length === 0) {
      line.height += pt + pb;
    } else {
      line.height -= 11;
      line.y -= 2;
    }

    y += line.height;
    lines.push(line);
  }

  if (this.info.isRTL) {
    var start = 0;

    var flip = function () {
      children = children.slice(0, start).concat(children.slice(start, i).reverse()).concat(children.slice(i));
    }.bind(this);

    for (var i = 0; i < children.length; i++) {
      if (children[i].isScript) {
        flip();
        start = i + 1;
      }
    }

    if (start < i) {
      flip();
    }
  }

  var lines = [];
  var previousChild;
  var lastChild;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    child.el = child.draw(this);

    if (child.isScript && this.isCommand) {
      this.hasScript = true;
      pushLine();
      child.y = y - 1;
      lines.push(child);
      scriptWidth = Math.max(scriptWidth, Math.max(1, child.width));
      child.height = Math.max(29, child.height + 3) - 2;
      y += child.height;
      line = new Line(y);
      previousChild = null;
    } else if (child.isArrow) {
      line.children.push(child);
      previousChild = child;
    } else {
      // Remember the last child on the first line
      if (!lines.length) {
        lastChild = child;
      } // Leave space between inputs


      if (previousChild) {
        line.width += this.marginBetween(previousChild, child);
      } // Align first input with right of notch


      var cmw = 48 - this.horizontalPadding(children[0]);

      if ((this.isCommand || this.isOutline) && !child.isLabel && !child.isIcon && line.width < cmw) {
        line.width = cmw;
      } // Align extension category icons below notch


      if (child.isIcon && i === 0 && this.isCommand) {
        line.height = Math.max(line.height, child.height + 8);
      }

      child.x = line.width;
      line.width += child.width;
      innerWidth = Math.max(innerWidth, line.width);

      if (!child.isLabel) {
        line.height = Math.max(line.height, child.height);
      }

      line.children.push(child);
      previousChild = child;
    }
  }

  pushLine();
  var padLeft = children.length ? this.horizontalPadding(children[0]) : 0;
  var padRight = children.length ? this.horizontalPadding(lastChild) : 0;
  innerWidth += padLeft + padRight; // Commands have a minimum width
  // The hat min-width is arbitrary (not sure of Scratch 3 value)
  // Outline min-width is deliberately higher (because Scratch 3 looks silly)

  var originalInnerWidth = innerWidth;
  innerWidth = Math.max(this.hasScript ? 160 : this.isHat ? 108 : this.isCommand || this.isOutline ? 64 : this.isReporter ? 48 : 0, innerWidth); // Center the label text inside small reporters.

  if (this.isReporter) {
    padLeft += (innerWidth - originalInnerWidth) / 2;
  }

  this.height = y;
  this.width = scriptWidth ? Math.max(innerWidth, 15 + scriptWidth) : innerWidth;
  this.firstLine = lines[0];
  this.innerWidth = innerWidth;
  var objects = [];

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];

    if (line.isScript) {
      objects.push(draw$2.move(16, line.y, line.el));
      continue;
    }

    var h = line.height;

    for (var j = 0; j < line.children.length; j++) {
      var child = line.children[j];

      if (child.isArrow) {
        objects.push(draw$2.move(innerWidth - 32, this.height - 28, child.el));
        continue;
      }

      var y = pt + (h - child.height - pt - pb) / 2;

      if (child.isLabel && i === 0) {
        // We only do this for the first line so that the `else` label is
        // correctly aligned
        y -= 1;
      } else if (isDefine && child.isLabel) {
        y += 3;
      } else if (child.isIcon) {
        y += child.dy | 0;

        if (this.isCommand && i === 0 && j === 0) {
          y += 4;
        }
      }

      var x = padLeft + child.x;

      if (child.dx) {
        x += child.dx;
      }

      objects.push(draw$2.move(x, line.y + y | 0, child.el));
    }
  }

  var el = this.drawSelf(innerWidth, this.height, lines);
  objects.splice(0, 0, el);

  if (this.info.color) {
    draw$2.setProps(el, {
      fill: this.info.color,
      stroke: "rgba(0, 0, 0, 0.2)"
    });
  }

  return draw$2.group(objects);
};
/* Comment */


var CommentView$2 = function CommentView(comment) {
  _extends(this, comment);

  this.label = newView$2(comment.label);
  this.width = null;
};

CommentView$2.prototype.isComment = true;
CommentView$2.lineLength = 12;
CommentView$2.prototype.height = 20;

CommentView$2.prototype.measure = function () {
  this.label.measure();
};

CommentView$2.prototype.draw = function () {
  var labelEl = this.label.draw();
  this.width = this.label.width + 16;
  return draw$2.group([draw$2.commentLine(this.hasBlock ? CommentView$2.lineLength : 0, 6), draw$2.commentRect(this.width, this.height, {
    class: "sb3bw-comment"
  }), draw$2.move(8, 4, labelEl)]);
};
/* Glow */


var GlowView$2 = function GlowView(glow) {
  _extends(this, glow);

  this.child = newView$2(glow.child);
  this.width = null;
  this.height = null;
  this.y = 0;
};

GlowView$2.prototype.isGlow = true;

GlowView$2.prototype.measure = function () {
  this.child.measure();
};

GlowView$2.prototype.drawSelf = function () {
  var c = this.child;
  var el;
  var w = this.width;
  var h = this.height - 1;

  if (c.isScript) {
    if (!c.isEmpty && c.blocks[0].isHat) {
      el = draw$2.hatRect(w, h);
    } else if (c.isFinal) {
      el = draw$2.capRect(w, h);
    } else {
      el = draw$2.stackRect(w, h);
    }
  } else {
    var el = c.drawSelf(w, h, []);
  }

  return draw$2.setProps(el, {
    class: "sb3bw-diff sb3bw-diff-ins"
  });
}; // TODO how can we always raise Glows above their parents?


GlowView$2.prototype.draw = function () {
  var c = this.child;
  var el = c.isScript ? c.draw(true) : c.draw();
  this.width = c.width;
  this.height = c.isBlock && c.firstLine.height || c.height; // encircle

  return draw$2.group([el, this.drawSelf()]);
};
/* Script */


var ScriptView$2 = function ScriptView(script) {
  _extends(this, script);

  this.blocks = script.blocks.map(newView$2);
  this.y = 0;
};

ScriptView$2.prototype.isScript = true;

ScriptView$2.prototype.measure = function () {
  for (var i = 0; i < this.blocks.length; i++) {
    this.blocks[i].measure();
  }
};

ScriptView$2.prototype.draw = function (inside) {
  var children = [];
  var y = 1;
  this.width = 0;

  for (var i = 0; i < this.blocks.length; i++) {
    var block = this.blocks[i];
    var x = inside ? 0 : 2;
    var child = block.draw();
    children.push(draw$2.move(x, y, child));
    this.width = Math.max(this.width, block.width);
    var diff = block.diff;

    if (diff === "-") {
      var dw = block.width;
      var dh = block.firstLine.height || block.height;
      children.push(draw$2.move(x, y + dh / 2 + 1, draw$2.strikethroughLine(dw)));
      this.width = Math.max(this.width, block.width);
    }

    y += block.height;
    var comment = block.comment;

    if (comment) {
      var line = block.firstLine;
      var cx = block.innerWidth + 2 + CommentView$2.lineLength;
      var cy = y - block.height + line.height / 2;
      var el = comment.draw();
      children.push(draw$2.move(cx, cy - comment.height / 2, el));
      this.width = Math.max(this.width, cx + comment.width);
    }
  }

  this.height = y + 1;

  if (!inside && !this.isFinal) {
    this.height += block.hasPuzzle ? 44 : 36;
  }

  if (!inside && block.isGlow) {
    this.height += 2; // TODO unbreak this
  }

  return draw$2.group(children);
};
/* Document */


var DocumentView$2 = function DocumentView(doc) {
  _extends(this, doc);

  this.scripts = doc.scripts.map(newView$2);
  this.width = null;
  this.height = null;
  this.el = null;
  this.defs = null;
};

DocumentView$2.prototype.measure = function () {
  this.scripts.forEach(function (script) {
    script.measure();
  });
};

DocumentView$2.prototype.render = function (cb) {
  if (typeof ocbptions === "function") {
    throw new Error("render() no longer takes a callback");
  } // measure strings


  this.measure(); // TODO: separate layout + render steps.
  // render each script

  var width = 0;
  var height = 0;
  var elements = [];

  for (var i = 0; i < this.scripts.length; i++) {
    var script = this.scripts[i];
    if (height) height += 10;
    script.y = height;
    elements.push(draw$2.move(0, height, script.draw()));
    height += script.height;
    width = Math.max(width, script.width + 4);
  }

  this.width = width;
  this.height = height; // return SVG

  var svg = draw$2.newSVG(width, height);
  svg.appendChild(this.defs = draw$2.withChildren(draw$2.el("defs"), makeIcons$2()));
  svg.appendChild(draw$2.group(elements));
  this.el = svg;
  return svg;
};
/* Export SVG image as XML string */


DocumentView$2.prototype.exportSVGString = function () {
  if (this.el == null) {
    throw new Error("call draw() first");
  }

  var style = makeStyle$2();
  this.defs.appendChild(style);
  var xml = new draw$2.XMLSerializer().serializeToString(this.el);
  this.defs.removeChild(style);
  return xml;
};
/* Export SVG image as data URI */


DocumentView$2.prototype.exportSVG = function () {
  var xml = this.exportSVGString();
  return "data:image/svg+xml;utf8," + xml.replace(/[#]/g, encodeURIComponent);
};

DocumentView$2.prototype.toCanvas = function (cb, scale) {
  scale = scale || 1.0;
  var canvas = draw$2.makeCanvas();
  canvas.width = this.width * scale;
  canvas.height = this.height * scale;
  var context = canvas.getContext("2d");
  var image = new Image();
  image.src = this.exportSVG();

  image.onload = function () {
    context.save();
    context.scale(scale, scale);
    context.drawImage(image, 0, 0);
    context.restore();
    cb(canvas);
  };
};

DocumentView$2.prototype.exportPNG = function (cb, scale) {
  this.toCanvas(function (canvas) {
    if (URL && URL.createObjectURL && Blob && canvas.toBlob) {
      var blob = canvas.toBlob(function (blob) {
        cb(URL.createObjectURL(blob));
      }, "image/png");
    } else {
      cb(canvas.toDataURL("image/png"));
    }
  }, scale);
};
/* view */


var viewFor$2 = function viewFor(node) {
  switch (node.constructor) {
    case Label$5:
      return LabelView$2;

    case Icon$5:
      return IconView$2;

    case Input$5:
      return InputView$2;

    case Block$5:
      return BlockView$2;

    case Comment$5:
      return CommentView$2;

    case Glow$5:
      return GlowView$2;

    case Script$5:
      return ScriptView$2;

    case Document$5:
      return DocumentView$2;

    default:
      throw new Error("no view for " + node.constructor.name);
  }
};

var newView$2 = function newView(node) {
  return new (viewFor$2(node))(node);
};

var blocks$3 = {
  newView: newView$2,
  LabelView: LabelView$2
};

function init$2(window) {
  draw$2.init(window);

  blocks$3.LabelView.measuring = function () {
    var canvas = draw$2.makeCanvas();
    return canvas.getContext("2d");
  }();
}

var scratch3Bw = {
  init: init$2,
  newView: blocks$3.newView,
  makeStyle: style$2.makeStyle
};

/*
 * scratchblocks
 * http://scratchblocks.github.io/
 *
 * Copyright 2013-2016, Tim Radvan
 * @license MIT
 * http://opensource.org/licenses/MIT
 */

var scratchblocks = function scratchblocks(window) {

  var document = window.document;
  /* utils */

  /*****************************************************************************/

  var syntax = syntax$1;
  var allLanguages = syntax.allLanguages,
      loadLanguages = syntax.loadLanguages,
      Label = syntax.Label,
      Icon = syntax.Icon,
      Input = syntax.Input,
      Block = syntax.Block,
      Comment = syntax.Comment,
      Script = syntax.Script,
      Document = syntax.Document;
  /*****************************************************************************/

  var scratch2$$1 = scratch2;
  scratch2$$1.init(window);
  var scratch3$$1 = scratch3;
  scratch3$$1.init(window);
  var scratch3bw = scratch3Bw;
  scratch3bw.init(window);

  function appendStyles() {
    document.head.appendChild(scratch2$$1.makeStyle());
    document.head.appendChild(scratch3$$1.makeStyle());
    document.head.appendChild(scratch3bw.makeStyle());
  }

  function parse(code, options) {
    return syntax.parse(code, options);
  }

  function newView(doc, options) {
    var options = _extends({
      style: "scratch2"
    }, options);

    switch (options.style) {
      case "scratch2":
        return scratch2$$1.newView(doc);

      case "scratch3":
        return scratch3$$1.newView(doc);

      case "scratch3-bw":
        return scratch3bw.newView(doc);

      default:
        throw new Error("Unknown style: " + options.style);
    }
  }

  function render(doc, options) {
    if (typeof options === "function") {
      throw new Error("render() no longer takes a callback");
    }

    var view = newView(doc, options);
    var svg = view.render();
    return svg;
  }
  /*****************************************************************************/

  /*** Render ***/
  // read code from a DOM element


  function readCode(el, options) {
    var options = _extends({
      inline: false
    }, options);

    var html = el.innerHTML.replace(/<br>\s?|\n|\r\n|\r/gi, "\n");
    var pre = document.createElement("pre");
    pre.innerHTML = html;
    var code = pre.textContent;

    if (options.inline) {
      code = code.replace("\n", "");
    }

    return code;
  } // insert 'svg' into 'el', with appropriate wrapper elements


  function replace(el, svg, doc, options) {
    if (options.inline) {
      var container = document.createElement("span");
      var cls = "scratchblocks scratchblocks-inline";

      if (doc.scripts[0] && !doc.scripts[0].isEmpty) {
        cls += " scratchblocks-inline-" + doc.scripts[0].blocks[0].shape;
      }

      container.className = cls;
      container.style.display = "inline-block";
      container.style.verticalAlign = "middle";
    } else {
      var container = document.createElement("div");
      container.className = "scratchblocks";
    }

    container.appendChild(svg);
    el.innerHTML = "";
    el.appendChild(container);
  }
  /* Render all matching elements in page to shiny scratch blocks.
   * Accepts a CSS selector as an argument.
   *
   *  scratchblocks.renderMatching("pre.blocks");
   *
   * Like the old 'scratchblocks2.parse().
   */


  var renderMatching = function renderMatching(selector, options) {
    var selector = selector || "pre.blocks";

    var options = _extends({
      style: "scratch2",
      inline: false,
      languages: ["en"],
      read: readCode,
      // function(el, options) => code
      parse: parse,
      // function(code, options) => doc
      render: render,
      // function(doc) => svg
      replace: replace // function(el, svg, doc, options)

    }, options); // find elements


    var results = [].slice.apply(document.querySelectorAll(selector));
    results.forEach(function (el) {
      var code = options.read(el, options);
      var doc = options.parse(code, options);
      var svg = options.render(doc, options);
      options.replace(el, svg, doc, options);
    });
  };

  return {
    allLanguages: allLanguages,
    // read-only
    loadLanguages: loadLanguages,
    stringify: function stringify(doc) {
      return doc.stringify();
    },
    Label: Label,
    Icon: Icon,
    Input: Input,
    Block: Block,
    Comment: Comment,
    Script: Script,
    Document: Document,
    newView: newView,
    read: readCode,
    parse: parse,
    replace: replace,
    render: render,
    renderMatching: renderMatching,
    appendStyles: appendStyles
  };
};

var browser = createCommonjsModule(function (module) {
  var scratchblocks$$1 = window.scratchblocks = module.exports = scratchblocks(window); // add our CSS to the page

  scratchblocks$$1.appendStyles();
});

export default browser;
//# sourceMappingURL=scratchblocks.min.es.js.map
