const EventEmitter = require('events');
const myEmitter = new EventEmitter();

const maximumNumberlistner = {
    listner : 10
};
const updatedlistner = (input) => {
    console.log(`The updated maximum number of event listners are ${input}`);
}
console.log(`The default maximum number of event listener are ${maximumNumberlistner.listner}`);

myEmitter.on('listner', updatedlistner);
myEmitter.emit('listner', `${maximumNumberlistner.listner = 5}`);