// // Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// // Вивести кожну змінну за допомогою: console.log , alert, document.write
// let hello = 'hello';
// console.log(hello);
// alert(hello);
// document.write(hello);
//
// hello = 'okten';          // - Переприсвоїти кожній змінній з завдання значення на довільне.
// console.log(hello);
// alert(hello);
// document.write(hello);
//
//
//
// let owu = 'owu';
// console.log(owu);
// alert(owu);
// document.write(owu)
//
// owu = 'owu1';               // - Переприсвоїти кожній змінній з завдання значення на довільне.
// console.log(owu);
// alert(owu);
// document.write(owu);
//
//
//
// let com = 'com';
// console.log(com)
// alert(com);
// document.write(com)
//
// com = '.com1';                // - Переприсвоїти кожній змінній з завдання значення на довільне.
// console.log(com);
// alert(com);
// document.write(com)
//
//
//
// let ua = 'ua';
// console.log(ua);
// alert(ua);
// document.write(ua);
//
// ua = '.ua1'                  // - Переприсвоїти кожній змінній з завдання значення на довільне.
// console.log(ua);
// alert(ua)
// document.write(ua)
//
//
//
// let n = 1;
// console.log(n);
// alert(n);
// document.write(n);
//
// n = 2;                      // - Переприсвоїти кожній змінній з завдання значення на довільне.
// console.log(n);
// alert(n);
// document.write(n)
//
//
//
// let u = 10;
// console.log(u);
// alert(u);
// document.write(u);
//
// u = 11;                      // - Переприсвоїти кожній змінній з завдання значення на довільне.
// console.log(u);
// alert(u);
// document.write(u);
//
//
//
// let m = -999;
// console.log(m);
// alert(m);
// document.write(m);
//
// m = -1000;                   // - Переприсвоїти кожній змінній з завдання значення на довільне.
// console.log(m);
// alert(m);
// document.write(m);
//
//
//
// let b = 123;
// console.log(b);
// alert(b);
// document.write(b);
//
// b = 124;                      // - Переприсвоїти кожній змінній з завдання значення на довільне.
// console.log(b);
// alert(b);
// document.write(b)
//
//
//
// let PI = 3.14;
// console.log(PI);
// alert(PI);
// document.write(PI);
//
// PI = 'constanta';             // - Переприсвоїти кожній змінній з завдання значення на довільне.
// console.log(PI);
// alert(PI);
// document.write(PI);
//
//
//
// let e = 2.7;
// console.log(e);
// alert(e);
// document.write(e);
//
// e = 2.8;                      // - Переприсвоїти кожній змінній з завдання значення на довільне.
// console.log(e);
// alert(e);
// document.write(e);
//
//
//
// let r = 16;
// console.log(r);
// alert(r);
// document.write(r);
//
// r = 17;                      // - Переприсвоїти кожній змінній з завдання значення на довільне.
// console.log(r);
// alert(r);
// document.write(r);
//
//
//
//
// let boolean1 = true;
// console.log(boolean1);
// alert(boolean1);
// document.write(boolean1);
//
// boolean1 = 'tru is true';   // - Переприсвоїти кожній змінній з завдання значення на довільне.
// console.log(boolean1);
// alert(boolean1);
// document.write(boolean1);
//
//
//
// let boolean2 = false;
// console.log(boolean2);
// alert(boolean2);
// document.write(boolean2);
//
// boolean2 = 'false is false';  // - Переприсвоїти кожній змінній з завдання значення на довільне.
// console.log(boolean2);
// alert(boolean2);
// document.write(boolean2);


// //- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
//
// // - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//
// let firstName = 'Ivanus';
// let middleName = 'Volodymyr';
// let lastName = 'Mykolayovych';
//
// // - З'єднати їх в одну змінну person. (Не об'єкт)
// let p = ' ';
// let person = firstName + p + middleName + p + lastName;
// console.log(person);

// // - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років"
//
//
// let firstName = prompt('Імя');
// let lastName = prompt('По батькові');
// let age = prompt('Вік');
// console.log('Вітаю' + ' ' + firstName + ' ' + lastName + ' ' + '.' + ' '+'Тобі' + ' ' + age + ' ' + 'років');


// //- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//
// let a = 100;
// console.log(typeof a);
//
// let b = '100';
// console.log(typeof b);
//
// let c = true;
// console.log(typeof c);


// // - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// //     В однакових виразах не використовувати однакові оператори!!
// //     5 ? 6 -> true
// // 5 ? 6 -> false
// // 5 ? 6 -> false
// // 5 ? 6 -> false
// // 10 ? 10 -> true
// // 10 ? 10 -> true
// // 10 ? 10 -> false
// // 10 ? 10 -> false
// // 10 ? 10 -> false
// // 123 ? '123' -> false
// // 123 ? '123' -> true
//
// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 === 6);
// console.log(5 >= 6);
// console.log(10 === 10);
// console.log(10 <= 10);
// console.log(10 < 10);
// console.log(10 > 10);
// console.log(10 !== 10);
// console.log(123 === '123');
// console.log(123 !== '123');


// // - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// //     let str = "20";
// // let a = 5;
// // document.write(str + a + "<br/>");
// // document.write(str - a + "<br/>");
// // document.write(str * "2" + "<br/>");
// // document.write(str / 2 + "<br/>");
//
//
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>");
// console.log(typeof (str + a))
// //type string
// //тут а приймає тип стрінг
// //конкатинація
//
// document.write(str - a + "<br/>");
// console.log(typeof (str - a))
// // type number
// // немає конкатинації
// //(20-5 = 15)
//
// document.write(str * "2" + "<br/>");
// console.log(typeof (str * 2))
// //type number
// // немає конкатинації
// //(20*2 = 40)
//
//
// document.write(str / 2 + "<br/>");
// console.log(typeof (str / 2))
// //type number
// // немає конкатинації
// //(20/2=10)
