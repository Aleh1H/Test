// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let rectangle = (a, b) => a * b;
// console.log(rectangle(4, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let p = Math.PI;
// let circle = (r) => p * r ** 2;
// console.log(circle(3));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let p = Math.PI;
// let cylinder = (r, h) => (2 * p * r ** 2) + 2 * p * r * h;
// console.log(cylinder(4, 11));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let list = (arrey) => {
//     for (const item of arrey){
//         console.log(item);
//     }
// }
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// list(listOfItems)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraph = (text) => {
//     document.write(`<p>${text}</p>`);
// }
//   console.log(paragraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis, voluptatum.'));

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ulli = (list) =>{
//     document.write(`<ul>`);
//     document.write(`<li>${list}</li>`);
//     document.write(`<li>${list}</li>`);
//     document.write(`<li>${list}</li>`);
//     document.write(`</ul>`);
// }
// ulli('lorem5');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ullig = (text, num) => {
//     document.write(`<ul>`);
//     for (let i= 0; i < num; i++){
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// ullig('lorem',7);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let list = (arrey) => {
//     document.write(`<ul>`);
//     for (const item of arrey) {
//         document.write(`<li>${item}</li>`)
//     }
//     document.write(`</ul>`);
// }
// let listOfItems = ['jhfg', 5, true, 'three', 25, 'react', 'text', false];
// list(listOfItems);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let list = (arrey) =>{
//     for (const item of arrey) {
//         document.write(`<div> ID: ${item.id} name: ${item.name} age: ${item.age}</div>`);
//     }
//     return list;
// }
// let listOfItems = [{id:5, name: 'Vasya', age: 25}, {id:6, name: 'Anya', age: 23}, {id:7, name: 'Olya', age: 24}];
// console.log(list(listOfItems));

// - створити функцію яка повертає найменьше число з масиву
// let minnum = (arrey) => {
//     let min = arrey[0];
//     for (const item of arrey) {
//         if (item < min) {
//             min = item;
//         }
//     }
//     return min;
// }
// let arnum = [2, 5, -3, 7, 8, -1000];
// console.log(minnum(arnum));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arsum = (arrey) =>{
//     let sum = 0;
//     for (const item of arrey) {
//         sum += item;
//     }
//     return sum;
// }
// let arrey = [1, 7, 12, 14, 15, 100];
// console.log(arsum(arrey));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arsum = (arrey) =>{
//     let sum = 0;
//     for (const item of arrey) {
//         sum += item;
//             }
//     return sum / arrey.length;
// }
// let arrey = [2, 4, 6];
// console.log(arsum(arrey));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let minnum = (arrey) => {
//     let min = arrey[0];
//     let max = arrey[0];
//     for (const item of arrey) {
//             if (item > max) {
//             max = item;
//         } else if (item < min)
//             min = item;
//         }
//     document.write(max);
//     return min;
// }
// let arnum = [2, 5, -3, 7, 8, -1000, 200];
// console.log(minnum(arnum));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let random = () =>{
//     let container = [];
//     for (let i = 0; i < 5; i++) {
//         let x = Math.round(Math.random()* 100);
//         container.push(x);
//     }
//     return container;
// }
// console.log(random(10));

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let random = (max) =>{
//     let container = [];
//     for (let i = 0; i < max; i++) {
//         let x = Math.round(Math.random()* 100);
//         container.push(x);
//     }
//     return container;
// }
// console.log(random(20));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = (arrey) =>{
//     let revarr = [];
//     for (let i = arrey.length-1; i>=0; i--){
//        revarr.push(arrey[i]);
//     }
//     return revarr;
// }
// let arnum = [2, 5, -3, 7, 8, -1000, 200];
// console.log(arr(arnum));

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
let arr = (arrey) => {
    let num = arrey[0];
    arrey [0] = arrey [1];
    arrey [1] = num;
    return arrey;
}
let arnum = [{name: 'Vasya', age: 25},
    {name: 'Anya', age: 23},
    ];
console.log(arr(arnum));