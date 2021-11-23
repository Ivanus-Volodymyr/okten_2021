// //- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let numberMin = (a, b, c) =>{
//     if (a < b && a < c) {
//         return a;
//     } else if (b < a && b < c) {
//         return b;
//     } else if (c < a && c < b) {
//         return c;
//     } else {
//         console.log('error')
//     }
// }
//
// console.log(numberMin(12, 1, 2));

// //- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let numberMax = (a, b, c) => {
//     if (a > b && a > c) {
//         return a;
//     } else if (b > a && b > c) {
//         return b;
//     } else if (c > a && c > b) {
//         return c;
//     } else {
//         console.log('error')
//     }
// }
// console.log(numberMax(12, 13, 14));


let massif = [2, 111, 12, 15, 20, 17, 39, 40, 12, 11, 43];

// //- створити функцію яка повертає найбільше число з масиву
// let maxMassif = (arr) => {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
// console.log(maxMassif(massif));

// //- створити функцію яка повертає найменьше число з масиву
// let minMassif = (arr) => {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(minMassif(massif));

// //- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let massifSum = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(massifSum(massif));

// //- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arithmeticMean= (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i] / arr.length;
//     }
//     return sum;
// }
// console.log(arithmeticMean(massif));

// //- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let minReturnMaxOut = (arr) => {
//     let maxNumber = arr[0];
//     let minNumber = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (minNumber >= arr[i]) {
//             minNumber = arr[i];
//         } else if (maxNumber <= arr[i]) {
//             maxNumber = arr[i];
//         } else {
//             console.error();
//         }
//     }
//     console.log(maxNumber);
//     return minNumber;
// }
// minReturnMaxOut(massif);

// //- створити функцію яка заповнює масив рандомними числами
// let masRandom = (arr) => {
//     let num = [];
//     for (let i = 0; i < arr; i++) {
//         num.push(Math.floor(Math.random() * 100));
//     }
//     return num;
// }
// console.log(masRandom(5));

// //- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// // limit - аргумент, який характеризує кінцеве значення діапазону.
// let masRandom = (limit, arr) => {
//     let num = [];
//     for (let i = 0; i < arr; i++) {
//         num.push(Math.floor(Math.random() * limit));
//     }
//     return num;
// }
// console.log(masRandom(40, 13));

// //- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let masRevers = (arr) => {
//     let mas = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         mas.push(arr[i])
//     }
//     return mas;
// }
//
// console.log(masRevers(massif));