let users = document.getElementById('users');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
        for (const user of value) {
            const userblock = document.createElement('div');
            userblock.setAttribute('class', 'block');
            const button = document.createElement('button');
            button.innerHTML = '<a href ="../html/user-details.html">click</a>'
            button.addEventListener('click', () => {
                const userkey = 'users';
                localStorage.setItem('userkey', JSON.stringify(user))
            })

            userblock.innerHTML = `<p><b>id</b>: ${user.id}</p>
        <p><b>name</b>: ${user.name}</p>`
            users.append(userblock);
            userblock.append(button)

        }
    })