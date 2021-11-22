// //- створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
// function get() {
//     if (arguments.length === 1) {
//         console.log(arguments[0])
//     } else if (arguments.length === 2) {
//         console.log(arguments[0] + arguments[1])
//     }
// }
// get('qwerty');
//
//
// //2
// function ge(arg) {
//   return arguments.length === 1 ? arguments[0] : arguments[0] + arguments[1]
// }
//
// console.log(ge(34, 123));

// //- створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// //   EXAMPLE:
// //   [1,2,3,4]
// //   [2,3,4,5]
// //   результат
// //   [3,5,7,9]
// function masSumIndex(arr1, arr2) {
//     let mas = [];
//     for (let i = 0; i < arr1.length; i++) {
//         mas.push(arr1[i] + arr2[i]);
//     }
//     return mas;
//
// }
// console.log(masSumIndex([1, 2, 3, 4], [2, 3, 4, 5]));


let format = [{name: 'Dima', age: 13}, {model: 'Camry'}]

// //- Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// //   EXAMPLE:
// //   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
//
//
// function formatObject(arr) {
//     for (const formatElement of format) {
//         for (const formatElementKey in formatElement) {
//             console.log(formatElementKey)
//         }
//     }
// }
// formatObject(format)

// //- Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// //EXAMPLE:
// //[{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// function formatKey(arr) {
//     for (const formatElement of format) {
//         for (const formatElementKey in formatElement) {
//             console.log(formatElement[formatElementKey])
//         }
//     }
// }
//
//
// formatKey(format)
