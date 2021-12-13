//1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(post => {
        let mainDiv = document.createElement('div');
        for (const postElement of post) {
            let postDiv = document.createElement('div');
            postDiv.classList.add('post')
            let h1 = document.createElement('h1');
            h1.innerText = postElement.userId;
            let h2 = document.createElement('h2');
            h2.innerText = postElement.id;
            let title = document.createElement('div');
            title.innerText = postElement.title;
            let body = document.createElement('div');
            body.innerText = postElement.body;
            let buttonElement = document.createElement('button');
            buttonElement.innerText = 'Some comments'

            buttonElement.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts/' + postElement.id + '/comments')
                    .then(response => response.json())
                    .then(comments => {
                        let mainComments = document.createElement('div');
                        mainComments.classList.add('comment')
                        for (const comment of comments) {
                            if (postElement.id === comment.postId) {
                                let commentDiv = document.createElement('div');
                                commentDiv.innerHTML = `
                                <div>
                                <h1>${comment.id}</h1>
                                <h2>${comment.name}</h2>
                                <p>${comment.email}</p>
                                <p>${comment.body}</p>
                                </div>
                                `
                                mainComments.appendChild(commentDiv);

                            }
                        }
                        postDiv.appendChild(mainComments)
                    })

            }

            postDiv.append(h1, h2, title, body, buttonElement)
            mainDiv.appendChild(postDiv)
        }
        document.body.appendChild(mainDiv);
        mainDiv.classList.add('main')

    })