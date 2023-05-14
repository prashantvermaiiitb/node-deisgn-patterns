// count of log thread
let count = 0;
/**
 * Logger constructor
 * @param {*} name 
 */
function Logger(name) {
    if (!(this instanceof Logger)) {
        return new Logger('CALL_W/O_NEW')
    }
    this.name = name;
    count++;
}

// ! if we use arrow function then it will attach this name to window reference
Logger.prototype.error = function (msg) { console.log(`This is error message from ${this.name}...`, msg) }
module.exports = Logger;