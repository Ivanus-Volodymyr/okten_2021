//Все робити за допомоги js.
// - створити блок,
let htmlDivElement = document.createElement('div');

// - додати йому класи wrap, collapse, alpha, beta
htmlDivElement.classList.add('wrap', 'collapse', 'alpha', 'beta');

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
htmlDivElement.style.height = '200px';
htmlDivElement.style.background = 'silver';
htmlDivElement.style.margin = '50px';

// - додати цей блок в body.d
document.body.appendChild(htmlDivElement);

// - клонувати його повністю, та додати клон в body.
let cloneNodeDivElement = htmlDivElement.cloneNode(true);
document.body.appendChild(cloneNodeDivElement);

// - Є масив:
// ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let mas_1 = ['Main', 'Products', 'About us', 'Contacts'];
for (const elementOfMas_1 of mas_1) {
    let liElement = document.createElement('li');
    liElement.innerText = elementOfMas_1;
    let elementsByClassNameMenu = document.getElementsByClassName('menu');

    elementsByClassNameMenu[0].appendChild(liElement);
}


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const coursesAndDurationArrayElement of coursesAndDurationArray) {
    let coursesDivElement = document.createElement('div');
    coursesDivElement.innerText = coursesAndDurationArrayElement.title + ' ' + coursesAndDurationArrayElement.monthDuration;

    document.body.appendChild(coursesDivElement);
}
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу,
// та <p class='description'> з monthDuration елементу.
// Завдання робити через цикли.
for (const coursesArrayElement of coursesAndDurationArray) {
    let elementDiv = document.createElement('div');
    let h1Element = document.createElement('h1');


    h1Element.innerText = coursesArrayElement.title;
    h1Element.classList.add('heading')
    elementDiv.append(h1Element);
    elementDiv.classList.add('item');
    document.body.append(elementDiv);

}
