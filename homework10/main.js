// - Знайти та вивести довижину настипних стрінгових значень
// let a = 'hello world';
// console.log(a.length);

// let a = 'lorem ipsum';
// console.log(a.length);

// let a = 'javascript is cool';
// console.log(a.length);

// - Перевести до великого регістру наступні стрінгові значення
// let b = 'hello world';
// console.log(b.toUpperCase());

// let b = 'lorem ipsum';
// console.log(b.toUpperCase());

// let b = 'javascript is cool';
// console.log(b.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// let c = 'HELLO WORLD';
// console.log(c.toLowerCase());

// let c = 'LOREM IPSUM';
// console.log(c.toLowerCase());

// let c = 'JAVASCRIPT IS COOL';
// console.log(c.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// console.log(str.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numarr = [10,8,-7,55,987,-1011,0,1050,0];
// let strarr = numarr.map(function (index){
//     index = index.toString();
//     return index;
// });
// console.log(strarr);


// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
//
// function sortnums (array, direction){
//     if (direction === 'ascending'){
//         array.sort((i1, i2, ) => i1 - i2);
//     } else if (direction === 'descending'){
//         array.sort((i1, i2, ) => i2 - i1);
//     }
//     return array;
// }
// let num = [11,21, 3];
// console.log(sortnums(num, 'descending'));


// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// coursesAndDurationArray.sort((n1, n2) => n2.monthDuration - n1.monthDuration);
// let filter = coursesAndDurationArray.sort().filter(function (item){
//     if (item.monthDuration > 5){
//         return item;
//     }
// })
// console.log(filter);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше

///     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'

let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {value: 'joker', color: 'red'},
    {value: 'joker', color: 'black'},
];

console.log(cards.filter(item => item.value === 'ace' && item.cardSuit === 'spade'));
console.log(cards.filter(item => item.value === '6'));
console.log(cards.filter(item => item.color === 'red'));
console.log(cards.filter(item => item.cardSuit === 'diamond'));
console.log(cards.filter(item => item.cardSuit === 'clubs' && (item.value>='9' || item.value.length > 1)));


