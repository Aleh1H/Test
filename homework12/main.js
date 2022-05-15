// // -- отримує текст з параграфа з id "content"
// let contid = document.getElementById('content').innerText
// console.log(contid);
//
// // -- отримує текст з блоку з id "rules"
// let rulid = document.getElementById('rules').innerText
// console.log(rulid);
//
// // -- замініть текст параграфа з id 'content' на будь-який інший
// console.log(contid.innerText = 'Lorem ipsum dolor sit amet.');

// // замініть текст параграфа з id 'rules' на будь-який інший
// console.log(rulid.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit');
//
// // -- змініть кожному елементу колір фону на червоний
// let colcont = document.body.children;
// for (const item of colcont){
//     item.style.background = 'red'
// }
//
// // -- змініть кожному елементу колір тексту на синій
// let queri = document.querySelectorAll('*');
// for (const item of queri) {
//     item.style.color = 'blue'
// }

// // -- отримати весь список класів елемента з id=rules і вивести їх в console.log
// let cllist = document.getElementById('rules').classList;
// console.log(cllist);

// // -- поміняти колір тексту у всіх елементів fc_rules на червоний
// let fclist = document.getElementsByClassName('fc_rules');
// console.log(fclist);
// for (const item of fclist){
//     item.style.color = 'red';
// }


// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
// let header = document.getElementById('main_header');
// header.classList.add('group_name')


// b) робить шириниу елементу ul 400px
// let ullist = document.getElementsByTagName('ul')
// for (const item of ullist){
//     item.style.width = '400px';
// }

// c) робить шириниу всіх елементів з класом linkList шириною 50%
// let cllinklist = document.getElementsByClassName('linkList');
// for (const item of cllinklist){
//     item.style.width = '50%';
// }

// d) отримує текст який зберігається в елементі з класом listElement2
// let cllinklist = document.getElementsByClassName('linkList');
// console.log(cllinklist[1].innerText);

// e) отримує всі елементи li та змінює ім колір фону на сірий
// let lilist = document.getElementsByTagName('li');
// for (const item of lilist){
//     item.style.background = 'grey'
// }

// f) отримує всі елементи 'a' та додає їм клас anchor
// let ullist = document.getElementsByTagName('a');
// for (const item of ullist){
//     item.classList.add('anchor')}


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let ullist = document.getElementsByTagName('a');
// for (const item of ullist){
//     if (item.innerText === 'link3'){
//         item.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let ullist = document.getElementsByTagName('a');
// for (const item of ullist){
//     item.classList.add(`element_${item.innerText}`)
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let backcol = prompt('color');
// let subs = document.getElementsByClassName('sub-header');
// for (const item of subs) {
//     item.style.background = backcol;
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let textcol = prompt('color');
// let subcol = document.getElementsByClassName('sub-header');
// for(const item of subcol){
//     if (item.innerText === 'content 2 segment'){
//         item.style.color = textcol;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let text = prompt('text');
// let cont = document.getElementsByClassName('content_1');
// for (const item of cont) {
//     item.innerText = text;
// }


// l) отримати елементи p та змінити їм padding на 20px
// let ps = document.getElementsByTagName( 'p');
// for (const item of ps){
//     item.style.padding = '20px'
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let getelbyclass = document.getElementsByClassName('text2');
// for (const item of getelbyclass){
//     item.innerText = 'May-2022'
// }


