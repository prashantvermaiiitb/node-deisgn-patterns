/**
 * Car base-class
 * @param {*} model 
 * @param {*} color 
 * @returns 
 */
function Car(model = 'white', color = 'fiat') {
    // should be called when new is not used
    this.model = model;
    this.color = color;
}
/**
 * Describe function for car
 */
Car.prototype.describe = function () {
    console.log(`This is ${this.model} with ${this.color} color.`)
}

module.exports = new Car();
module.exports.Car = Car;