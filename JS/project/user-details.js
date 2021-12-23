// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//


let back = document.createElement('div');
let homeButton = document.createElement('button');
homeButton.classList.add('home')
let homeLink = document.createElement('a');
homeLink.href = 'index.html'
homeLink.innerText = 'Back to User List';
let linkDiv = document.createElement('div');
fetch('https://jsonplaceholder.typicode.com/users' + users.id + '/users/id')
    .then(user => user.json())
    .then(block => {
        for (const blockElement of block) {
            let blockDiv = document.createElement('div');


        }
    })


homeButton.appendChild(homeLink)
back.appendChild(homeButton)
document.body.append(back, linkDiv)