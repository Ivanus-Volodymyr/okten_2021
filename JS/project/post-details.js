let mainOfPost = document.createElement('div');
mainOfPost.classList.add('userMainBlock');
let backBlock = document.createElement('div');
let homeButton = document.createElement('button');
let usersLink = document.createElement('a');
usersLink.innerText = 'Back to User List';
usersLink.href = 'index.html';
homeButton.classList.add('home');

let urlPost = new URL(location.href);
let idOFPost = urlPost.searchParams.get('id');
fetch('https://jsonplaceholder.typicode.com/posts/' + idOFPost)
    .then(resolve => resolve.json())
    .then(post => {
        let postBlock = document.createElement('div');
        postBlock.classList.add('postBlock');
        postBlock.innerHTML = `
        <h3>Post id: ${post.id} </h3>
        <h3>User id: ${post.userId} </h3>
        <h3>Post title: <p>${post.title}</p> </h3>
        <h3>Post body: <p>${post.body}</p> </h3>
        <h2>All comments of this post:</h2>
        `

        let commentsBlockMain = document.createElement('div');
        commentsBlockMain.classList.add('commentsBlockMain');
        fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
            .then(resolve => resolve.json())
            .then(comments => {
                for (const comment of comments) {
                    let commentBlock = document.createElement("div");
                    commentBlock.classList.add('commentBlock');
                    commentBlock.innerHTML = `
                                <h4>Post id: ${comment.postId}</h4>
                                <h4>Comment id: ${comment.id}</h4>
                                <h4>Email: ${comment.email}</h4>
                                <h4>Comment body:</h4>
                                <p>${comment.body}</p>
                                `

                    commentsBlockMain.appendChild(commentBlock);
                }
            })
        postBlock.appendChild(commentsBlockMain);
        mainOfPost.append(postBlock);
    })

homeButton.appendChild(usersLink);
backBlock.append(homeButton);
mainOfPost.append(backBlock);
document.body.appendChild(mainOfPost);
