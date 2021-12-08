// //- створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// // Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// // Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let formElement1 = document.createElement('form');
// let inputElement1 = document.createElement('input');
// inputElement1.type = 'text';
// inputElement1.name  ='input1';
// let inputElement2 = document.createElement('input');
// inputElement2.type = 'text';
// inputElement2.name  ='input2';
// let formElement2 = document.createElement('form');
// let inputElement3 = document.createElement('input');
// inputElement3.type = 'text';
// inputElement3.name  ='input3';
// let inputElement4 = document.createElement('input');
// inputElement4.type = 'text';
// inputElement4.name  ='input4';
//
// let buttonElement = document.createElement('button');
// buttonElement.innerText = 'Console log value';
//
// buttonElement.addEventListener('click', function (){
//         console.log(inputElement1.value);
//         console.log(inputElement2.value);
//         console.log(inputElement3.value);
//         console.log(inputElement4.value);
//     })
//
//
// formElement1.append(inputElement1,inputElement2);
// formElement2.append(inputElement3,inputElement4);
// document.body.append(formElement1,formElement2,buttonElement);


// //- Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// //При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//
// let inputElement1 = document.createElement('input');
// let inputElement2 = document.createElement('input');
// let inputElement3 = document.createElement('input');
// let buttonElement = document.createElement('button');
// buttonElement.innerText = 'create table'
// buttonElement.addEventListener('click', function () {
//     let tr = inputElement1.value;
//     let td = inputElement2.value;
//     let text = inputElement3.value;
//
//     function generationTable(tr, td, text) {
//         let table = document.createElement('table');
//         document.body.append(table)
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid silver';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid silver';
//                 td.innerText = `${text}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//
//     generationTable(td, tr, text);
//
// })
//
// document.body.append(inputElement1, inputElement2, inputElement3, buttonElement);


// //- Сворити масив не цензцрних слів.
// //Сворити інпут текстового типу.
// //Якщо людина вводить слово і воно міститься в масиві не цензурних слів кинути алерт з попередженням.
// // Перевірку робити при натисканні на кнопку
// let mas = ['гавнюк', 'бидло', 'комерсант', 'вискочка', 'гомик'];
// let inputElement = document.createElement('input');
// let buttonElement = document.createElement('button');
// buttonElement.innerText = 'Check'
// buttonElement.addEventListener('click', function () {
//     for (const masElements of mas) {
//         if (masElements === inputElement.value) {
//             alert('bad boy');
//             return;
//         }
//     }
//     if (inputElement.value){
//         alert('good boy');
//     }
// })
//
// document.body.append(inputElement, buttonElement);