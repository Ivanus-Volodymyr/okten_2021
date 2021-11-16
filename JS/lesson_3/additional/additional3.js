//1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr = [];

// //a. заповнити його 50 парними числами за допомоги циклу.
// for (let i = 2, j = 0; i <= 100; i += 2, j++) {
//     arr[j] = i;
// }
// console.log(arr);

// //b. заповнити його 50 непарними числами за допомоги циклу.
// for (let i = 1, j = 0; i <= 100; i += 2, j++) {
//     arr[j] = i;
// }
// console.log(arr)

// //c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     arr[i] = Math.random();
// }
// console.log(arr)

//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
for (let i = 0; i < 20; i++) {
    let x = Math.floor(Math.random() * (732 - 8) + 8);
    arr.push(x)
    // arr[i] = x;
}
console.log(arr)