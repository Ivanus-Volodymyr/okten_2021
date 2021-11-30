// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
// b) робить шириниу елементу ul 400px
let elementsByTagNameUl = document.body.getElementsByTagName('ul');
for (const ByTagNameUlElement of elementsByTagNameUl) {
    ByTagNameUlElement.style.width = '400px';
}

// c) робить шириниу всіх елементів з класом linkList шириною 50%
const elementsByClassName = document.getElementsByClassName('linkList');
for (let elementsByClassNameElement of elementsByClassName) {
    elementsByClassNameElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
for (let element of document.getElementsByClassName('listElement2')) {
    console.log(element.innerText);
}

// e) отримує всі елементи li та змінює ім колір фону на сірий
for (let listElement of document.getElementsByTagName("li")) {
    listElement.style.background = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
for (let  elementA of document.getElementsByTagName('a')) {
    elementA.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let elementsA of document.getElementsByTagName('a')) {
    if (elementsA.innerText ==='link3'){
        elementsA.style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (let  elementA of document.getElementsByTagName('a')) {
    elementA.classList.add(`element_${elementA.innerText}`);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let inputColor = prompt();
for (let elementsSub_header of document.getElementsByClassName('sub-header')) {
    elementsSub_header.style.background = inputColor;
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let inputColorNew = prompt();
for (let elementsSub_headerNew of document.getElementsByClassName('sub-header')) {
    if (elementsSub_headerNew.innerText ==='content 2 segment'){
        elementsSub_headerNew.style.background = inputColorNew;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let textPrompt = prompt();
for (let textPromptElement of document.getElementsByClassName('content_1')) {
    textPromptElement.innerText = textPrompt;
}

// l) отримати елементи p та змінити їм padding на 20px
for (let elementP of document.getElementsByTagName('p')) {
    elementP.style.padding = '20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
for (let  textNameGroup of document.getElementsByClassName('text2')) {
    textNameGroup.innerText = 'sep-2021';
}