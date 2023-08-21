const logEvents = require('./logEvents');

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {};

//initialize object
const myEnitter = new MyEmitter();

// add listener to the log event
myEnitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
    //Emit event
    myEnitter.emit("log", "log event emitted!");
},2000);