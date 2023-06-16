/*
 * Классы
 * - оголошення
 * - конструктор
 * - методи
 * - static
 * - приватні властивості
 * - геттери і сеттери
 */

const Car = function ({ brand, model, price } = {}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
    this.price = newPrice;
};

Car.description = 'Клас, який описує автомобіль';

Car.logInfo = function (carObj) {
    console.log('Car.logInfo -> carObj', carObj);
};

const car = new Car({
    brand: 'Audi',
    model: 'A6',
    price: 65000,
});

// ______________________

class Car1 {
    static description = 'Клас, який описує автомобіль';
    static logInfo = function (carObj) {
        console.log('Car.logInfo -> carObj', carObj);
    };

    constructor({ brand, model, price } = {}) {
        this.brand = brand;
        this._model = model;
        this.price = price;
    }

    #test = 'test';

    get model() {
        return this._model;
    }

    set model(newModel) {
        this._model = newModel;
    }
}

console.dir(Car1);

const carInstense = new Car1({
    brand: 'Audi',
    model: 'A6',
    price: 65000,
});

console.log(carInstense);
console.log(carInstense.model);
console.log((carInstense.model = 'Q4'));

// carInstense.changePrice(1000);
// Car1.logInfo(carInstense);

// console.log(carInstense.test);
