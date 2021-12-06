// //- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let elementById = document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function () {
//     elementById.style.display = 'none';
// }


// // - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let buttonByClassName = document.getElementsByClassName('button');
// buttonByClassName[0].onclick = function () {
//     buttonByClassName[0].style.display = 'none';
// }

// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// // При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let form = document.forms.form1;
// form.onsubmit = function (e) {
//     e.preventDefault();
//     let age = this.age.value;
//     if (age < 18) {
//         console.log('Вік менше 18')
//     }else {
//         document.write(age)
//     }
// }

// // - Создайте меню, которое раскрывается/сворачивается при клике
// let mas = ['Main', 'About', 'Menu', 'Contact', 'Phone']
// let element = document.createElement('div');
// let divElement = document.createElement('div');
// divElement.innerText = 'List Menu'
// let ul = document.createElement('ul');
//
// for (const liElement of mas) {
//     let li = document.createElement('li');
//     li.innerText = liElement;
//
//     li.classList.add('li_element')
//     ul.append(li)
// }
//
// divElement.onclick = function () {
//     ul.classList.toggle('d-none');
// }
//
//
// divElement.classList.add('header')
// element.append(divElement)
// ul.classList.add('ul_element')
// element.append(ul)
//
// element.classList.add('container')
// document.body.append(element);

// // - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// // Вывести список комментариев в документ, каждый в своем блоке.
// //  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let masComments = [
//     {title: 'Qwerty-1', body: 'lorem ipsum dolo sit ameti,lorem ipsum dolo sit ameti'},
//     {title: 'Qwerty-2', body: 'lorem ipsum dolo sit ameti,lorem ipsum dolo sit ameti'},
//     {title: 'Qwerty-3', body: 'lorem ipsum dolo sit ameti,lorem ipsum dolo sit ameti'},
//     {title: 'Qwerty-4', body: 'lorem ipsum dolo sit ameti,lorem ipsum dolo sit ameti'}
// ]
// let divElementComments = document.createElement('div');
// for (const masComment of masComments) {
//     let div = document.createElement('div');
//     div.classList.add('comment')
//     let h2 = document.createElement('h2');
//     h2.innerText = masComment.title;
//     let p = document.createElement('p');
//     p.innerText= masComment.body;
//     let button = document.createElement('button');
//     button.innerText = 'hide';
//     button.classList.add('button')
//
//     button.onclick = function (){
//         p.classList.toggle('d_none');
//         button.innerText = 'more';
//     }
//
//     div.append(h2,p,button)
//     divElementComments.append(div)
// }
// document.body.append(divElementComments)