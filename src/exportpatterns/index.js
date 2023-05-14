//named export example
const { info, warn } = require('./named-export');
info(`INFORMATION !!`);
warn('WARNING !!! ');

//export a function example, verbose is not default export because {} is not default value returned
const { verbose } = require('./exporting-function');
verbose('VERBOSE !!!');

//export a constructor
const Logger = require('./exporting-constructor');
const myLogger = new Logger('DEFAULT');
myLogger.error('ERROR !!!');
Logger().error('Error!! ');

//exporting an object
const car = require('./exporting-instance');
car.describe();
