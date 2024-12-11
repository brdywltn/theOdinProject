// Demo the capability to show the .on callback function that fires when a file is opened in this case
// ------------------------------------------------------------------------------------------------------------
// let fs = require('fs');
// let rs = fs.createReadStream('./demofile.txt');
// rs.on('open', function () {
//     console.log('Opening...');
// });

// ------------------------------------------------------------------------------------------------------------
let events = require('src/node/url_module/events');
let eventEmitter = new events.EventEmitter();

// Create a new event handler
let myEventHandler = function () {
    console.log("I hear a scream!");
}

// Assign the event handler to an event
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event
eventEmitter.emit('scream');