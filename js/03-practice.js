//  1) Напиши клас User для створення користувача з наступними властивостями:
// // username - імя, строка
// // age -вік, число
// // numberOfPosts - кількість постів, число
// // Клас очікує 1 параметр - обєкт налаштувань з одноіменими властивостями.
// class User {
//     constructor({ name, age, numberOfPosts }) {
//         this.name = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//     }

//     getInfo() {
//         return `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts`;
//     }

//     greeting = () => {
//         return `Hello ${this.name}`;
//     };
// }

// class SuperUser extends User {
//     constructor({ name, age, numberOfPosts }) {
//         super({ name, age, numberOfPosts });
//     }
// }

// const mango = new User({
//     name: 'Mango',
//     age: 24,
//     numberOfPosts: 20,
// });

// const bob = new SuperUser({
//     name: 'Bob',
//     age: 43,
//     numberOfPosts: 12,
// });

// console.log(`mango`, mango);

// console.log(mango.getInfo()); // User Mango is 24 years old and has 20 posts
// console.log(mango.greeting());

// console.log(`bob`, bob);

// console.log(bob.getInfo()); // User Mango is 24 years old and has 20 posts
// console.log(bob.greeting());

// const poly = new User({
//     name: 'Poly',
//     age: 19,
//     numberOfPosts: 17,
// });

// 2) Напиши клас Storage який створює обєкти для управління складом товарів.
// При виклику буду отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.

// Добав методи класа:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і добавляє його до поточного.
// removeItem(item) - отримує товар і, якщо він є, удаляє його з поточних.

// class Storage {
//     constructor(items) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(item) {
//         this.items.push(item);
//     }

//     removeItem(item) {
//         const index = this.items.indexOf(item);
//         if (index === -1) {
//             return;
//         } else {
//             this.items.splice(index, 1);
//         }
//     }
// }

// const storage = new Storage(['Яблука', 'Банани', 'Кокоси', 'Ківі']);

// const items = storage.getItems();
// console.table(items);

// storage.addItem('Манго');

// storage.removeItem('Ківі');

// 3) Напиши клас Client який створює обєкт з властивостями login і email.
// Оголоси приватні властивості #login і #email, доступ до яких зроби через геттер і сеттер login і email.

// class Client {
//     #login;
//     #email;
//     constructor({ login, email }) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }

//     get email() {
//         return this.#email;
//     }

//     set login(newLogin) {
//         this.#login = newLogin;
//     }
//     set email(newEmail) {
//         this.#email = newEmail;
//     }
// }

// const mango = new Client({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });

// console.log(`mango`, mango);
// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new Client({
//     login: 'Poly',
//     email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

const Storage = function (items) {
    this.items = items;
};

Storage.prototype.getItems = function () {
    return this.items;
};

Storage.prototype.addItem = function (item) {
    this.items.push(item);
};

Storage.prototype.removeItem = function (item) {
    const index = this.items.indexOf(item);
    if (index === -1) {
        return;
    } else {
        this.items.splice(index, 1);
    }
};

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
