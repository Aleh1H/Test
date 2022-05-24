// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//
// const elementById = document.getElementById('text');
// const button = document.createElement('button')
// button.innerText = 'Click me'
// document.body.appendChild(button);
//
// button.addEventListener('click', () => {
//     elementById.remove()
// })

// - створити інпут який приймає вік людини та кнопку яка підтверджує дію
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи
// меньше він ніж 18, та повідомити про це користувача
// const button = document.createElement('button')
// button.innerText = 'Confirm'
// document.body.appendChild(button);
// const input = document.getElementById('age');
//
// button.addEventListener('click', () => {
//     const value = input.value;
//     if( value >= 18){
//         alert('you can go on')
//     } else if (value < 18){
//         alert('you are too young')
//     }
// })

// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// const users = document.forms.user;
// const userinfo = document.forms.userinfo;
// const button = document.getElementsByTagName('button')[0];
// button.addEventListener('click', () => {
//
//     const logvalue = users.login.value;
//     const pasvalue = users.password.value;
//     const namevalue = userinfo.name.value;
//     const agevalue = userinfo.age.value;
//
//     let user = {
//         name: namevalue,
//         age: agevalue,
//         username: logvalue,
//         password: pasvalue,
//     }
//     console.log(user);
// })


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
