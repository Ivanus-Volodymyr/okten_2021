//В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let mainDiv = document.createElement('div');
mainDiv.classList.add('main')
fetch('https://jsonplaceholder.typicode.com/users')
    .then(resolve => resolve.json())
    .then(users => {
        for (const user of users) {
            let userDiv = document.createElement('div');
            let details = document.createElement('button');
            details.classList.add('details');
            let detailsLink = document.createElement('a');
            detailsLink.innerText = 'Details about this user';
            detailsLink.href = 'user-details.html?id=' + user.id;

            userDiv.classList.add('user');
            userDiv.innerHTML = `
            <h3>user id = ${user.id}</h3>
            <p>User name is <h2>${user.name}</h2></p>
            `

            details.appendChild(detailsLink);
            userDiv.appendChild(details);
            mainDiv.appendChild(userDiv);
        }
    })
document.body.appendChild(mainDiv);