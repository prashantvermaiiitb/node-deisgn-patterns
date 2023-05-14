const util = require('util');
const { Car } = require('../exportpatterns/exporting-instance');
/**
 * Car subclass created via monley patching
 * @param {*} model 
 * @param {*} color 
 * @param {*} year 
 */
function CarSubClass(model = 'ferrari', color = 'peach', year = '2023') {
    Car.call(this, model, color);
    this.year = year;
}
util.inherits(CarSubClass, Car);

// exporting subclass for the car 
module.exports.Car = CarSubClass;