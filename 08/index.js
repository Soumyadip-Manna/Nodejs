const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const welcomeUser = (input) =>{
    console.log(`Thanks For Subscribing to ${input}`);
}

myEmitter.on('subscribe', welcomeUser);
myEmitter.emit('subscribe', "Collecge Wallah");