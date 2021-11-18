// //- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function rectangle(a, b) {
//     return a * b;
// }
//
// let result = rectangle(10, 12);
// console.log(result)

// //- створити функцію яка обчислює та повертає площу кола з радіусом r
// function circle(r) {
//     const PI = 3.14;
//     return r * r * PI;
// }
// let result = circle(5);
// console.log(result)

// //- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function cylinder(h, r) {
//     const PI = 3.14;
//     return (r * r * PI) + (2 * PI * r * h);
// }
//
// let result = cylinder(2, 4);
// console.log(result);

// //- створити функцію яка приймає масив та виводить кожен його елемент
// let mas = [1, 2, 3, 4,5];
// function funInput(arr) {
//     console.log(arr)
// }
// funInput(mas);

// //- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph (arr){
//     let p =(`<p>${arr}</p>`);
//     document.write(p);
//     return p;
// }
// let p1 = paragraph('hello okten');

// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function listCreator(arr) {
//     document.write(`<ul>`)
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li> ${arr}</li>`)
//     }
//     document.write(`</ul>`)
//     return arr;
// }
//
// let li = listCreator(`helo okten`)

// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function listCreator(arr, limit) {
//     document.write(`<ul>`);
//     for (let i = 0; i < limit; i++) {
//         document.write(`<li> ${arr}</li>`);
//     }
//     document.write(`</ul>`);
//     return arr;
// }
//
// let li = listCreator(`helo okten`, 5);

// //- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let mas = [11, 12, 'string', true];
//
// function masList(arr) {
//     document.write(`<ul>`)
//     for (let i = 0; i < mas.length; i++) {
//         document.write(`<li>${mas[i]}</li>`)
//     }
//     document.write(`</ul>`)
//     return arr;
// }
//
// let result = masList(mas)

// //- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// // Для кожного об'єкту окремий блок.
// let mas = [
//     {
//         id: 'nickname',
//         name: 'Robert',
//         age: 24
//     },
//     {
//         id: 'nickname',
//         name: 'Ben',
//         age: 32
//     },
//     {
//         id: 'nickname',
//         name: 'Alan',
//         age: 28
//     }
// ];
//
// function masObject(arr) {
//     for (let i = 0; i < mas.length; i++) {
//         document.write(`<div>`)
//         document.write(`${mas[i].id + '' + `<br>` + mas[i].name + '' + `<br>` + mas[i].age}`)
//         document.write(`</div>`)
//     }
//     return arr;
// }
//
// let result = masObject(mas);