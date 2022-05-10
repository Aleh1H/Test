// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }
//
// const user1 = new User(1, 'Vasya', 'Popov', 'cvcdsvdf@gmail.com', 456);
// const user2 = new User(2, 'Olya', 'Azkfvf', 'vcdsvdf@gmail.com', 556);
// const user3 = new User(3, 'Katya', 'Gknds', 'fvcdsvdf@gmail.com', 756);
// const user4 = new User(4, 'Zhenya', 'Dslod', 'tvcdsvdf@gmail.com', 656);
// const user5 = new User(5, 'Igor', 'Popov', 'dvcdsvdf@gmail.com', 449);
// const user6 = new User(6, 'Vanya', 'Popov', 'kcdsvdf@gmail.com', 892);
// const user7 = new User(7, 'Seruy', 'Popov', 'asvcdsvdf@gmail.com', 356);
// const user8 = new User(8, 'Zoriana', 'Popov', 'locdsvdf@gmail.com', 2356);
// const user9 = new User(9, 'Ira', 'Popov', 'gecdsvdf@gmail.com', 4678);
// const user10 = new User(10, 'Marta', 'Popov', 'mgvcdsvdf@gmail.com', 159);
//
// let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];

// console.log(users);
// console.log(user1);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(users.filter(item => item.id %2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((n1, n2) => n2.id - n1.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
//     constructor(id, name, surname, email, phone, order = []) {
//         this.id = id
//         this.name = name
//         this.surname = surname
//         this.email = email
//         this.phone = phone
//         this.order = order
//     }
// }
// const client1 = new Client(1, 'Vasya', 'Popov', 'cvcdsvdf@gmail.com', 456, ['apples', 'milk', 'bananas'] );
// const client2 = new Client(2, 'Olya', 'Popov', 'cvcdsvdf@gmail.com', 456, ['onion', 'milk', 'bread', 'water', 'oranges']);
// const client3 = new Client(3, 'Katya', 'Popov', 'cvcdsvdf@gmail.com', 456, ['milk']);
// const client4 = new Client(4, 'Zhenya', 'Popov', 'cvcdsvdf@gmail.com', 456, ['apples', 'milk', 'bananas','bread', 'water', 'oranges']);
// const client5 = new Client(5, 'Igor', 'Popov', 'cvcdsvdf@gmail.com', 456, ['milk', 'water']);
// const client6 = new Client(6, 'Vanya', 'Popov', 'cvcdsvdf@gmail.com', 456, ['pineapple', 'coffee', 'apples', 'milk', 'bananas','bread', 'water', 'oranges']);
// const client7 = new Client(7, 'Vasya', 'Popov', 'cvcdsvdf@gmail.com', 456, ['apples', 'milk', 'bananas','bread']);
// const client8 = new Client(8, 'Vasya', 'Popov', 'cvcdsvdf@gmail.com', 456, ['coffee', 'whisky']);
// const client9 = new Client(9, 'Vasya', 'Popov', 'cvcdsvdf@gmail.com', 456, ['coffee', 'whisky', 'cigars']);
// const client10 = new Client(10, 'Vasya', 'Popov', 'cvcdsvdf@gmail.com', 456, ['bread']);
//
// let clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
// console.log(client1.order);
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clients.sort((n1, n2) => n1.order.length - n2.order.length));


// Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
//
// function Car (model, producer, yearofintro, maxvelocity, engvolume){
//     this.model = model
//     this.producer = producer
//     this.yearofintro = yearofintro
//     this.maxvelocity = maxvelocity
//     this.engvolume = engvolume
//     this.drive = function () {
//          return (`їдемо зі швидкістю ${this.maxvelocity} на годину`)
//     };
//     this.info = function () {
//         return (`model - ${this.model}
//         producer - ${this.producer}
//         yearofintro - ${this.yearofintro}
//         maxvelocity - ${this.maxvelocity}
//         engvolume - ${this.engvolume}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         newvelocity = this.maxvelocity + newSpeed;
//         return newvelocity
//     }
//     this.changeYear = function (newValue){
//         this.yearofintro = newValue;
//         return newValue;
//     }
//     this.addDriver = function (driver){
//         this.driver = driver;
//         return driver
//     }
// }
// const redcar = new Car('Q4', 'Audi', 2020, 230, 2)
// const whitecar = new Car('A7', 'Audi', 2020, 250, 2.9)
// //
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // console.log(redcar.drive());
// //
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // // console.log(whitecar.drive());
// // console.log(whitecar.info());
// // console.log(whitecar.info());
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // console.log(whitecar.increaseMaxSpeed(70));
// // console.log(redcar.increaseMaxSpeed(20));
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // console.log(whitecar.changeYear(2021));
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// console.log(whitecar.addDriver('Vanya'))

//     -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footsize) {
        this.name = name
        this.age = age
        this.footsize = footsize
    }
}
let cinderellas = [new Cinderella('Stefa', 18, 25),
new Cinderella('Zoya', 17, 26),
new Cinderella('Marta', 19, 27),
new Cinderella('Vasya', 25, 41),
new Cinderella('Olya', 21, 23),
new Cinderella('Ira', 20, 22),
new Cinderella('Nina', 21, 25),
new Cinderella('Kate', 18, 24),
new Cinderella('Oksana', 17, 26),
 new Cinderella('Federica', 19, 29)];
// console.log(cinderellas);

class Prince {
    constructor(name, age, shoe) {
        this.name = name
        this.age = age
        this.shoe = shoe;
    }
}
let prince = new Prince('David', 28, 27);

for (const item in cinderellas){
    if (item.footsize === item.shoe) {
        console.log(cinderella[item]);
    }
}









