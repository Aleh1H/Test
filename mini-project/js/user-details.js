const userdiv = document.getElementById('post');
const jsondiv = document.createElement('div');
jsondiv.setAttribute('class', 'jsondiv');

const data = JSON.parse((localStorage.getItem('userkey')))
const button = document.createElement('button');
button.setAttribute('class', 'postbutton')
button.innerHTML = 'Posts of current user'

for (const element in data) {
    const elementdiv = document.createElement('div');
    if (typeof data[element] !== 'object') {
        elementdiv.innerText = `${element}: ${data[element]}`
    } else {
        elementdiv.innerText = `${element} :`
        for (const elementKey in data[element]) {
            const elementKeydiv = document.createElement('div');
            if (typeof data[element][elementKey] !== 'object') {
                elementKeydiv.innerText = `${elementKey}: ${data[element][elementKey]}`
            } else {
                elementKeydiv.innerText = `${elementKey} :`
                for (const innekey in data[element][elementKey]) {
                    const innekeydiv = document.createElement('div');
                    innekeydiv.innerText = `${innekey}: ${data[element][elementKey][innekey]}`;
                    elementKeydiv.append(innekeydiv)
                }
            }
            elementdiv.append(elementKeydiv);
        }
    }
    jsondiv.append(elementdiv);
    userdiv.append(jsondiv);
    userdiv.append(button);
}
button.addEventListener('click', () => {
    const postsdiv = document.createElement('div');
    postsdiv.setAttribute('class', 'block');
    fetch(`https://jsonplaceholder.typicode.com/users/${data.id}/posts`)
        .then(response => response.json())
        .then(value => {
            for (const post of value) {
                const {userId, id, title, body} = post;


                const button = document.createElement('button');
                button.setAttribute('class', 'postdetailbutton');
                button.innerHTML = '<a href = "../html/post-detail.html">Post Details</a>';

                const postdiv = document.createElement('div');
                postdiv.setAttribute('class', 'innerblock');

                const idtitlediv = document.createElement('div');
                idtitlediv.setAttribute('class', 'content')
                idtitlediv.innerHTML = `${post.title}`

                button.addEventListener('click', () => {
                    const postkey = 'post';
                    localStorage.setItem('postkey', JSON.stringify(post))

                })


                postdiv.append(idtitlediv);
                postdiv.append(button);
                postsdiv.append(postdiv);
                userdiv.append(postsdiv);
            }
        })
})