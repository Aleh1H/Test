const commentsdiv = document.getElementById('comment');
const postdata = JSON.parse(localStorage.getItem('postkey'))
const commentblock = document.createElement('div');
commentblock.setAttribute('class', 'commentblock');

for (const post in postdata) {
    commentblock.innerHTML = `<h2><b>userId</b>: ${postdata.userId}</h2>
<h2><b>id</b>: ${postdata.id}</h2>
<p><b>title</b>: ${postdata.title}</p>
<p><b>body</b>: ${postdata.body}</p>`
    commentsdiv.append(commentblock);
}

fetch(`https://jsonplaceholder.typicode.com/posts/${postdata.id}/comments`)
    .then(respose => respose.json())
    .then(item =>
        {
        const htmlDivElement = document.createElement('div');
        htmlDivElement.setAttribute('class', 'htmlDivElement')
        for (const comment of item) {
            const arraycomments = document.createElement('div');
            arraycomments.setAttribute('class', 'arraycomments');
            const {postId, id, name, email, body} = comment

            arraycomments.innerHTML = `<p><b>post</b>: ${comment.postId}</p>
                    <p><b>id</b>: ${comment.id}</p>
                    <p><b>name</b>: ${comment.name}</p>
                    <p><b>email</b>: ${comment.email}</p>
                    <p><b>body</b>: ${comment.body}</p>`

            htmlDivElement.append(arraycomments)
            commentblock.append(htmlDivElement);
        }
    });
