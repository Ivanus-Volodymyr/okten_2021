//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function numberChecker(a, b, c) {
    if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
        return true;

    }
}

// //- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numberMin(a, b, c) {
//     if (a < b && a < c && numberChecker(a, b, c)) {
//         return a;
//     } else if (b < a && b < c && numberChecker(a, b, c)) {
//         return b;
//     } else if (c < a && c < b && numberChecker(a, b, c)) {
//         return c;
//     } else {
//         console.log('error')
//     }
// }
//
// let resultMin = numberMin(11, 8, 5);
// console.log(resultMin);

// //- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numberMax(a, b, c) {
//     if (a > b && a > c && numberChecker(a, b, c)) {
//         return a;
//     } else if (b > a && b > c && numberChecker(a, b, c)) {
//         return b;
//     } else if (c > a && c > b && numberChecker(a, b, c)) {
//         return c;
//     } else {
//         console.log('error')
//     }
// }
//
// let resultMAx = numberMax(11, 8, 5);
// console.log(resultMAx);


let massif = [2, 111, 12, 15, 20, 17, 39];

// //- створити функцію яка повертає найбільше число з масиву
// function maxMassif(arr) {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;
// }
//
// let maxNumberIs = maxMassif(massif);
// console.log(maxNumberIs)

// //- створити функцію яка повертає найменьше число з масиву
// function minMassif(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min
// }
// let minNumberIs = minMassif(massif);
// console.log(minNumberIs)

// //- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function massifSum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
//
// let sumMassif = massifSum(massif);
// console.log(sumMassif)

// //- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function arithmeticMean(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i] / arr.length;
//     }
//     return sum;
// }
//
// let arithmetic = arithmeticMean(massif);
// console.log(arithmetic);


// //- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minReturnMaxOut() {
//     let maxNumber = arguments[0];
//     let minNumber = arguments[0];
//     for (let number of arguments) {
//         if (number > arguments[0]) {
//             maxNumber =number;
//         } else if (number < arguments[0]) {
//             minNumber = number;
//         }
//
//     }console.log(maxNumber)
//     return minNumber;
//
// }
// let xxx = minReturnMaxOut(1,2,3,4,5,6);

// //- створити функцію яка заповнює масив рандомними числами
// function masRandom(arr) {
//     let num = [];
//     for (let i = 0; i < arr; i++) {
//         // num[i] = Math.floor(Math.random()*100);
//         num.push(Math.floor(Math.random()*100));
//     }
//     return num;
// }
// console.log(masRandom(10));

// //- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// // limit - аргумент, який характеризує кінцеве значення діапазону.
// function masRandom(limit) {
//     let num = [];
//     for (let i = 0; i < 10; i++) {
//         // num[i] = Math.floor(Math.random()*limit);
//         num.push(Math.floor(Math.random()*limit));
//     }
//     return num;
// }
// console.log(masRandom(40));

// //- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// function masRevers(arr){
//    let mas =[];
//     for (let i=arr.length - 1; i >= 0; i--) {
//         mas.push(arr[i])
//     }
//     return mas;
// }
//
// console.log(masRevers(massif));








