// //- Дано натуральное число n. Выведите все числа от 1 до n.
// let nan = (n) => {
//     for (let i=1; i<=n;i++){
//         console.log(`${i}`)
//     }
// }
// nan(10);

// //- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// // если A < B, или в порядке убывания в противном случае.
// let nam = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(`${i}`)
//         }
//     } else if (a > b) {
//         for (let i = a; i >= b; i--) {
//             console.log(`${i}`);
//         }
//     }
//
//
// }
// nam(31, 12);

// //-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// //   EXAMPLE:
// //   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
// //   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
// //   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let mas = [9, 8, 0, 4]
// let obj = (arr, i) => {
//     for (let j = 0; j < arr.length; j++) {
//         if (i === j) {
//             let xxx = arr[i];
//             arr[i] = arr[j+1];
//             arr[j+1] = xxx;
//         }
//     }
//     console.log(arr)
// }
// obj(mas,0)

// //- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// // Двожина масиву від 2 до 100
// // EXAMPLE:
// // [1,0,6,0,3] => [1,6,3,0,0]
// // [0,1,2,3,4] => [1,2,3,4,0]
// // [0,0,1,0]   => [1,0,0,0]
// let mas = [1, 0, 6, 0, 3]
// let end = (arr) => {
//     for (let i = 0, j = 0; i < arr.length; i++) {
//         if (arr[i] !== 0)
//         {
//             let item = arr[i];
//             arr[i] = arr[j];
//             arr[j] = item;
//             j++;
//         }
//     }
//     console.log(arr);
// }
// end(mas);
