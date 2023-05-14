/**
 * Monkey patch to update the instance of car to sub-class of car
 */
const { Car } = require('./carsubclass');
const myCar = new Car();
myCar.describe();