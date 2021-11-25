// // - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let length = (str) => console.log(str.length);
// length('hello word');
// length('lorem ipsum');
// length('javascript is cool');

// // - Перевести до великого регістру наступні стрінгові значення
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let upperCase = (str) => console.log(str.toUpperCase());
// upperCase('hello world');
// upperCase('lorem ipsum');
// upperCase('javascript is cool');

// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let lowerCase = (str) => console.log(str.toLowerCase());
// lowerCase('HELLO WORLD');
// lowerCase('LOREM IPSUM');
// lowerCase('JAVASCRIPT IS COOL');
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let trim = (str) => console.log(str.trim());
// trim(' dirty string   ');

// //- Напишіть функцію stringToaArray(str), яка перетворює рядок на масив слів.
// //     let str = 'Каждый охотник желает знать';
// //     let arr = stringToArray(str);
// //     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let stringToArray = (str) => console.log(str.split(' '));
// stringToArray('Каждый охотник желает знать');

// //- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// //     let str = 'Каждый охотник желает знать';
// //     document.writeln(delete_characters(str, 7)); // Каждый
// let delete_characters = (str, length) => console.log(str.slice(0, length));
// delete_characters('Каждый охотник желает знать', 7);

// //- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// //    let str = "HTML JavaScript PHP";
// //    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// let insert_dash = (str) => {
//     console.log(str
//         .toUpperCase()
//         .replaceAll(' ', '-'));
// }
// insert_dash('HTML JavaScript PHP');

// //- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let upperFirstOfString = (str) => console.log(str[0].toUpperCase() + str.slice(1));
// upperFirstOfString('hello ');

// //- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//     let string = str.split(' ');
//     for (let i = 0; i < string.length; i++) {
//         string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
//     }
//     return string.join(' ');
// }
// console.log(capitalize('hello word'));