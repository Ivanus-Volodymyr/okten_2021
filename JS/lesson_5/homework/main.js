// //- створити функцію яка обчислює та повертає площу прямокутника висотою
// let summary = (a,b) => a*b;
// console.log(summary(10,10));

// //- створити функцію яка обчислює та повертає площу кола
// let circle = (r) => {
//     const PI = 3.14;
//     return PI * (r ** 2)
// };
// console.log(circle(2));

// //- створити функцію яка обчислює та повертає площу циліндру(2π𝑅2 + 2πRH)
// let cylinder = (r, h) => {
//     const PI = 3.14;
//     return 2 * PI * (r ** 2) + 2 * PI * r * h
// }
// console.log(cylinder(2, 4));

// //- створити функцію яка приймає масив та виводить кожен його елемент
// let massif = ['qwerty', 111, {name: "qwerty"}, true];
// let mas = (arr) => console.log(arr)
// mas(massif);

// // - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let fop = (text) => document.write(`<p>${text}</p>`);
// fop("qwerty");

// // - створити функцію яка  створює ul з трьома елементами li.
// // Текст li задати через аргумент всім однаковий
// let list = (text) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// list("qwerty");

// //- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let list = (text, limit) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < limit; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// list("qwerty", 10);

// //- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let mas = [11, 'qwerty', true]
// let masList = (arr) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${mas[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// masList(mas);

// //- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let mas = [
//     {
//         id: 111,
//         name: 'Robert',
//         age: 24
//     },
//     {
//         id: 122,
//         name: 'Ben',
//         age: 32
//     },
//     {
//         id: 123,
//         name: 'Alan',
//         age: 28
//     }
// ];
//
// let masObject = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<div>${mas[i].id + '' + `<br>` + mas[i].name + '' + `<br>` + mas[i].age}</div>`)
//     }
// }
// masObject(mas);