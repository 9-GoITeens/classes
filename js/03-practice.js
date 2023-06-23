//  1) Напиши клас User для створення користувача з наступними властивостями:
// // username - імя, строка
// // age -вік, число
// // numberOfPosts - кількість постів, число
// // Клас очікує 1 параметр - обєкт налаштувань з одноіменими властивостями.

// // Добав метод getInfo(), який повертає строку:
// // User ${ імя } is ${ вік } years old and has ${ кількість постів } posts.

// const poly = new User({
//     name: 'Poly',
//     age: 19,
//     numberOfPosts: 17,
// });

// console.log(poly.getInfo()); // User Poly is 19 years old and has 17 posts

// 2) Напиши клас Storage який створює обєкти для управління складом товарів.
// При виклику буду отримувати один аргумент - початковий масив товарів, і записувати його у властивість items.

// Добав методи класа:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і добавляє його до поточного.
// removeItem(item) - отримує товар і, якщо він є, удаляє його з поточних.

// const storage = new Storage(['Яблука', 'Банани', 'Кокоси', 'Ківі']);

// const items = storage.getItems();
// console.table(items);

// storage.addItem('Манго');

// storage.removeItem('Ківі');

// 3) Напиши клас Client який створює обєкт з властивостями login і email.
// Оголоси приватні властивості #login і #email, доступ до яких зроби через геттер і сеттер login і email.

// const mango = new Client({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });

// console.log(`mango`, mango);
// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

//   const poly = new Client({
//     login: 'Poly',
//     email: 'poly@mail.com',
//   });

//   console.log(poly.login); // Poly
//   poly.login = 'Polycutie';
//   console.log(poly.login); // Polycutie
