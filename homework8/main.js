// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function square (a, b){
//     let sqa = a * b;
//     return sqa;
// }
// let answear = square (3,5);
// console.log(answear);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function square (r){
//     let sqa =  PI * r ** 2;
//     return sqa;
// }
// let PI = Math.PI
// let answear = square (6);
// console.log(answear);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function square (r, h){
//     let sqa =  (2 * P * r ** 2)+2 * P * r *h;
//     return sqa;
// }
// let P = Math.PI
// let answear = square (3, 7);
// console.log(answear);

// - створити функцію яка приймає масив та виводить кожен його елемент
// function list(array){
//     for (const item of array){
//         console.log(item);
//     }
// }
// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// list(listOfItems);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function content (text){
//     document.write(`<div>${text}</div>`)
// }
// content('lorem5');
// content('lorem10');
// content('lorem15');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(text){
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// list('lorem10');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list(text, num) {
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('lorem20', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function list(array){
//     document.write(`<ul>`)
//     for (const item of array){
//         document.write(`<li>${}</li>`)
//         console.log(item);
//     }
// }
// let listOfItems = ['jhfg', 5, true, 'three', 25, 'react', 'text', false];
// list(listOfItems);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let listOfItems = [
//     {id:5, name: 'Vasya', age: 25},
//     {id:6, name: 'Anya', age: 23},
//     {id:7, name: 'Olya', age: 24}
// ];
// function list(array){
//     for (const item of array){
//         document.write(`<div>ID: ${item.id} name: ${item.name} age: ${item.age}</div>`);
//     }
// }
//
// list(listOfItems);

// - створити функцію яка повертає найменьше число з масиву
// let arnum = [2, 5, -3, 7, 8, -11];
//
// function smallnum(array){
//     let min = array[0];
//     for (const item of array) {
//         if (item < min){
//             min = item;
//         }
//     }
//     return min;
// }
// document.write(smallnum(arnum));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
let arrey = [2, 5, 3, 7, 8, 11];

function arsum(arrey){
    let sum =0;
    for (const item of arrey) {
        sum += item;
    }
    return sum;
}

document.write(arsum(arrey));