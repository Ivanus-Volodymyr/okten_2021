//- Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let listItem = (name, symbol) => {
    if (name.includes(symbol)) {
        let split = name.split(symbol);
        let arr = split[0] + ' ' + split[split.length - 1];
        console.log(arr)
    }
}
listItem('n1', '.')


//- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let random = () => {
    let mas = [];
    for (let i = 0; i < 10; i++) {
        mas.push(Math.round(Math.random() * 100));
    }
    return mas;
}
let res = random();
console.log(res);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sortNumbers = random();
let sort = sortNumbers.sort((a, b) => a - b);
console.log(sort);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filterNum = random();
let filter = filterNum.filter(num => num % 2 === 0);
console.log(filter);


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let object = random();
console.log(object.map(qwerty => qwerty + ' '));


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let nums = [11, 21, 3]
let sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        arr.sort((a, b) => a - b);
        console.log(arr);
    } else if (direction === 'descending') {
        arr.sort((a, b) => b - a);
        console.log(arr);
    }
}
sortNums(nums, 'descending')
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log(coursesAndDurationArray);

//  -- відсортувати його за спаданням за monthDuration
let coursersM = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
console.log(coursersM);


//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let cou = coursesAndDurationArray.filter(a => a.monthDuration > 5);
console.log(cou);

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
let cutString = (str, limit) => {
    let n = 0;
    let mas_1 = [];
    for (let i = 0; i < str.length; i++) {
        let qwerty = str.substr(n, limit);
        n += limit;
        mas_1.push(qwerty);
        if (mas_1.includes("") === true) {
            mas_1.pop();
        }
    }
    console.log(mas_1)

}
cutString('hello', 2);
