// //--створити масив з:
// // - з 5 числових значень
// let mas1 = [11, 22, 33, 44, 55];
// console.log(mas1);
// // - з 5 стічкових значень
// let mas2 = ['info', 'info', 'info', 'info', 'info'];
// console.log(mas2);
// // - з 5 значень стрічкового, числового та булевого типу
// let mas3 = [11, 22, 33, 44, 55, 'info', 'info', 'info', 'info', 'info', true, false, true, false, true];
// console.log(mas3);
// // - та вивести його в консоль


// //-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let q = [];
// console.log(q[0] = 11);


// //- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> info</div>`);
// }


// //- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> info${i}</div>`);
// }


// //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20) {
//     document.write(`<h1>Info</h1>`);
//     i++;
// }


// //- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// i = 0;
// while (i < 20) {
//     document.write(`<h1>Info${i}</h1>`);
//     i++;
// }


// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let number = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// for (let i = 0; i < number.length; i++) {
//     console.log(number[i]);
// }


// //- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let string = ["info","main","info","main","info","main","info","main","info","main"];
// let i = 0;
// while (i < string.length) {
//     console.log(string[i]);
//     i++;
// }


// //- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mix = [11, 12, 13, 14, 15, 16, "string", "row", true, false];
// for (let i = 0; i < mix.length; i++) {
//     console.log(mix[a])
// }


// //- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let mix = [11, 12, 13, 14, 15, 16, "string", "row", true, false];
// for (let i = 0; i < mix.length; i++) {
//     if (typeof mix[i] === "boolean") {
//         console.log(mix[i]);
//     }
// }


// //- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let mix = [11, 12, 13, 14, 15, 16, "string", "row", true, false];
// for (let i = 0; i < mix.length; i++) {
//     if (typeof mix[i] === "number") {
//         console.log(mix[i]);
//     }
// }


// //- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let mix = [11, 12, 13, 14, 15, 16, "string", "row", true, false];
// for (let i = 0; i < mix.length; i++) {
//     if (typeof mix[i] === "string") {
//         console.log(mix[i]);
//     }
// }


// //- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// // Вивести в консоль всі його елементи в циклі.
// let mas = [];
// console.log(mas[0]=11);
// console.log(mas[1]=12);
// console.log(mas[2]=13);
// console.log(mas[3]=14);
// console.log(mas[4]=14);
// console.log(mas[5]=true);
// console.log(mas[6]=false);
// console.log(mas[7]="string");
// console.log(mas[8]="main");
// console.log(mas[9]="element");


// //- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(`${i}`)
//     document.write(`${i}`)
// }


// //- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(`${i}`)
//     document.write(`${i}`)
// }


// //- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i=i+2) {
//     console.log(`${i}`)
//     document.write(`${i}`)
// }


// //- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i%2===0) {
//         console.log(`${i}`)
//         document.write(`${i}`)
//     }
//
// }


// //- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(`${i}`)
//         document.write(`${i}`)
//     }
//
// }