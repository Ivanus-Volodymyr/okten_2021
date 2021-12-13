//є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// // створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку
// // об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// // Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
// let favorites = [];
// for (const user of users) {
//     let divElement = document.createElement('div');
//     let elementName = document.createElement('div')
//     elementName.innerText = user.name;
//     let elementAge = document.createElement('div');
//     elementAge.innerText = user.age;
//     let elementStatus = document.createElement('div');
//     elementStatus.innerText = user.status;
//     let buttonElement = document.createElement('button');
//     buttonElement.innerText = 'додати до улюблених';
//     buttonElement.addEventListener('click', function () {
//         favorites.push(user);
//         localStorage.setItem('user', JSON.stringify(favorites))
//         console.log(favorites)
//
//     });
//
//     divElement.append(elementName, elementAge, elementStatus, buttonElement);
//     divElement.classList.add('mainBlock');
//     document.body.append(divElement);
// }
//
//
// let htmlButtonElement = document.createElement('button');
// let anchorElement = document.createElement('a');
// anchorElement.innerText = 'go to favorites';
// anchorElement.href = 'favorites.html';
//
//
// htmlButtonElement.append(anchorElement);
// htmlButtonElement.classList.add('button');
// document.body.appendChild(htmlButtonElement);

