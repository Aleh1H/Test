const divusers = document.createElement('div');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(value => {
        for (const user of value) {
            const userblock = document.createElement('div');

            userblock.innerHTML = `<p><b>id</b>: ${user.id}</p> 
        <p><b>name</b>: ${user.name}</p>`

            const button = document.createElement('div');
            button.innerText = 'click'
            button.addEventListener('click', () => {
                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`)
                    .then(value => value.json())
                    .then(value =>{
                        const divElement = document.createElement('div');
                        userblock.append(divElement);
                        for (const user in value){
                            const userinfordiv = document.createElement('div');
                            userinfordiv.innerHTML =`<p><b>username</b>: ${user.username}</p>
                            <p><b>email</b>: ${user.email}</p>`
                            divElement.append(userinfordiv)
                        }
                    })
            })


            userblock.appendChild(button);
            button.style.width = '10%';
            button.style.height = '30px';
            button.style.border = '1px solid black';
            button.style.background = 'silver';
            button.style.textAlign = 'center';
            button.style.marginLeft = '40%';
            divusers.append(userblock);
            document.body.appendChild(divusers);

            userblock.style.width = '49%';
            userblock.style.margin = '0px';
            userblock.style.border = '1px solid grey'
        }

    })
divusers.style.display = 'flex'
divusers.style.flexWrap = 'wrap'