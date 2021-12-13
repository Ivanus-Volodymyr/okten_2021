// //1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// // Для кожного елементу свій блок div.post
// // Всі характеристики повинні мати свої блоки всередені div.post
// // https://jsonplaceholder.typicode.com/posts
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(user => {
//         let mainDiv = document.createElement('div');
//         for (const userElement of user) {
//             let divElement = document.createElement('div');
//             let h1 = document.createElement('h1');
//             h1.innerText =userElement.userId;
//             let h2 = document.createElement('h2');
//             h2.innerText = userElement.id;
//             let h3 = document.createElement('h3');
//             h3.innerText = userElement.title;
//             let p = document.createElement('p');
//             p.innerText = userElement.body;
//
//
//             divElement.append(h1,h2,h3,p)
//             mainDiv.appendChild(divElement)
//             divElement.classList.add('post')
//         }
//         mainDiv.classList.add('mainDivTack1')
//         document.body.appendChild(mainDiv)
//     })

// {
//     "postId": 1,
//     "id": 4,
//     "name": "alias odio sit",
//     "email": "Lew@alysha.tv",
//     "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
//   },
// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(user => {
        let divElement = document.createElement('div');
        for (const element of user) {
            let block = document.createElement('div');
            block.classList.add('block')
            let postId = document.createElement('div');
            postId.innerText = element.postId;
            let id = document.createElement('div');
            id.innerText = element.id;
            let name = document.createElement('div');
            name.innerText = element.name;
            let email = document.createElement('div');
            email.innerText = element.email;
            let body = document.createElement('p');
            body.innerText = element.body


            block.append(postId,id,name,email,body);
            divElement.append(block);
            block.classList.add('comments')
        }
        divElement.classList.add('mainDivTack2');
        document.body.append(divElement);

    });