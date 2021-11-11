// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let q = Math.random();
let w = Math.random();
let e = Math.random();
let r = Math.random();
let t = Math.random();
let y = Math.random();
let u = Math.random();
let i = Math.random();
let o = Math.random();
let p = Math.random();

let xxx = [q, w, e, r, t, y, u, i, o, p];
console.log(xxx);
let result = q + w + e + r + t + y + u + i + o + p;
console.log(result);

//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book1 = {
    name: 'pope',
    number: 200,
    genre: 'romantic'
}


//3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: 'popes',
    number: 500,
    genre: 'romantic',
    authors: {
        mainAuthors: 'artur',
        secondAuthors: 'ben'
    }
}

//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let booksList = [

    {
        name: 'popes',
        number: 500,
        genre: 'romantic',
        authors: [
            {mainAuthors: 'Artur'},
            {secondAuthors: 'Ben'}
        ]
    },
    {
        name: 'popes',
        number: 500,
        genre: 'drama',
        authors: [
            {mainAuthors: 'Robert'},
            {secondAuthors: 'Alan'}
        ]
    }
]
console.log(booksList[0]);
console.log(booksList[1]);

//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//  Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height * width;
console.log(s)


// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),результат помістіть у змінну v.


let heightC = 10;
let dC = 4;
const PI = 3.14;

let v = PI * (dC / 2) ** 2 * heightC;
console.log(v)


//  7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;
let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2));
console.log(k)