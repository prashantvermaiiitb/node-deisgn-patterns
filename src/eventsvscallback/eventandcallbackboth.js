function helloCb(callback, timer) {
    /**
     * Use switch here for the same function 
     * OR
     * Us if else in the callback
     */
    if (timer === 2000) {
        setTimeout(() => { callback && callback(timer) }, timer);

    } else if (timer === 3000) {
        setTimeout(() => { callback && callback('1 second late', timer) }, timer);

    }
}

helloCb((...all) => {
    // console.log(all, Array.isArray(all));
    console.log(`this line appeared after ${all[0]}`)
}, 2000);
helloCb((...all) => {
    // console.log(all, Array.isArray(all));
    console.log(`this function is called with params [${[...all]}]`)
}, 3000);

var EventEmitter = require('events');
function helloEvent(timer) {
    var eventEmitter = new EventEmitter();
    switch (timer) {
        case 2000: setTimeout(() => {
            eventEmitter.emit('hello', timer);
        }, timer); break;
        case 3000: setTimeout(() => {
            eventEmitter.emit('hello', 'world', timer);
        }, timer);
    }

    return eventEmitter;
}

helloEvent(2000).on('hello', (timer) => { console.log(`this is called from event emitter after ${timer}`); })
helloEvent(3000).on('hello', (msg, timer) => { console.log(`this is called with ${msg} from event emitter after ${timer}`); })
