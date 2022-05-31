// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// // https://jsonplaceholder.typicode.com/posts
//
// const divposts = document.createElement('div');
//
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(value => {
//     for (const post of value) {
//         const postdiv = document.createElement('div');
//         for (const element in post){
//             const divElement = document.createElement('div');
//             divElement.innerText = element + `: ${post[element]}`;
//             postdiv.append(divElement);
//
//             postdiv.style.width = '19.7%';
//             postdiv.style.margin = '0.05%';
//
//             postdiv.style.border = '1px solid black';
//             postdiv.style.background = 'silver';
//
//         }
//         divposts.append(postdiv);
//         document.body.appendChild(divposts);
//
//     }
// });
//
// divposts.style.width = '100%';
// divposts.style.display = 'flex';
// divposts.style.flexWrap = 'wrap';

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

const divcomments = document.createElement('div');

fetch('https://jsonplaceholder.typicode.com/comments')
.then(response => response.json())
.then(comments =>{
    for (const comment of comments) {
        const commentdiv = document.createElement('ul');
        for (const element in comment){
            const divelemnt = document.createElement('li');
            const paragraph = document.createElement('p');
            paragraph.innerHTML = `<b>${element}</b>: ${comment[element]}`

            divelemnt.append(paragraph);
            commentdiv.append(divelemnt);
        }
        divcomments.append(commentdiv);
        document.body.appendChild(divcomments);

        commentdiv.style.width = '30%'
        commentdiv.style.background = 'lightgrey'

    }
})