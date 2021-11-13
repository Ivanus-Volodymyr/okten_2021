//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


let time = 4;
if (time <= 15 && time >= 0) {
    console.log('Time in the first part of the hour')
} else if (time <= 30 && time >= 16) {
    console.log('Time in second part of the hour')
} else if (time <= 45 && time >= 31) {
    console.log('Time in third part of the hour')
} else if (time <= 59 && time >= 46) {
    console.log('Time in the fourth part of the hour')
} else {
    console.log('Once again carefully, enter the time in minutes')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 3;
if (day >= 1 && day <= 10) {
    console.log('It is a first decade of the month');
} else if (day >= 11 && day <= 20) {
    console.log('It is a second decade of the month')
} else if (day >= 21 && day <= 31) {
    console.log('It is a third decade of the month')
} else {
    console.log('Incorrect entry of the day of the month, try again')
}

//- У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = true;
if (test !== true) {
    console.log('Вірно');
} else {
    console.log('Неправильно')
}
let test0 = false;
if (test0 !== true) {
    console.log('Вірно');
} else {
    console.log('Неправильно')
}

let test1 = true;
test1 = (test1 !== true) ? 'Вірно' : (test1 === true) ? 'Неправильно' : 'error';
console.log(test1);
let test2 = false;
test2 = (test2 !== true) ? 'Вірно' : (test2 === true) ? 'Неправильно' : 'error';
console.log(test2);


//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a1 = 1;
if (a1 !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
let a2 = 0;
if (a2 !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
let a3 = -3;
if (a3 !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

//з коротким записом(тернаркою) але з використанням змінної b    (додатково)
let b1 = 1;
b1 = b1 !== 0 ? 'Вірно' : 'Невірно';
console.log(b1);
let b2 = 0;
b2 = b2 !== 0 ? 'Вірно' : 'Невірно';
console.log(b2);
let b3 = -3;
b3 = b3 !== 0 ? 'Вірно' : 'Невірно';
console.log(b3);


//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let dayOfWeek = 6;
switch (dayOfWeek) {
    case 1:
        console.log('інфа що заплановано на день 1.');
        break;
    case 2:
        console.log('інфа що заплановано на день 2.');
        break;
    case 3:
        console.log('інфа що заплановано на день 3.');
        break;
    case 4:
        console.log('інфа що заплановано на день 4.');
        break;
    case 5:
        console.log('інфа що заплановано на день 5.');
        break;
    case 6:
        console.log('інфа що заплановано на день 6.');
        break;
    case 7:
        console.log('інфа що заплановано на день 7.');
        break;
}


//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let Year =2014;
if (Year%4===0){
    console.log('Високосний рік');
}else {
console.log('Не високосний рік');
}


//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let truName = prompt('Яка «офіційна» назва JavaScript?');
if(truName ==='ECMAScript'){
    console.log('Правильно!');
} else {
    console.log('Не знаєте? ECMAScript!');
}