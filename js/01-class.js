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
