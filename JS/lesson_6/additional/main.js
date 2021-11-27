// //- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// // document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString = (str, limit) => {
//     let n = 0;
//     let mas_1 = [];
//     for (let i = 0; i < str.length; i++) {
//         let qwerty = str.substr(n, limit);
//         n += limit;
//         mas_1.push(qwerty);
//         if (mas_1.includes("") === true) {
//             mas_1.pop();
//         }
//     }
//     console.log(mas_1)
//
// }
// cutString('hello_okten', 3);

//- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com\
let mailValidator = (str) => {
    if (str.includes("@") === true) {
        console.log(str);
    }

}
mailValidator('someeMAIL@gmail.com')