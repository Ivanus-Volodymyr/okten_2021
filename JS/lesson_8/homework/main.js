// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//- Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let innerTextByIdContent = document.getElementById('content').innerText;
console.log(innerTextByIdContent);

// -- отримує текст з блоку з id "rules"
let innerTextByIdRules = document.getElementById('rules').innerText;
console.log(innerTextByIdRules);

// -- замініть текст параграфа з id 'content' на будь-який інший
let elementByIdContent = document.getElementById('content');
elementByIdContent.innerText = 'qwerty';

// -- замініть текст параграфа з id 'rules' на будь-який інший
let elementByIdRules = document.getElementById('rules');
elementByIdRules.innerText = 'qwerty';

// -- змініть кожному елементу колір фону на червоний
elementByIdContent.style.background = 'red';
elementByIdRules.style.background = 'red';

// -- змініть кожному елементу колір тексту на синій
elementByIdContent.style.color = 'blue';
elementByIdRules.style.color= 'blue';
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classListElementRules = elementByIdRules.classList;
for (let classListElementRule of classListElementRules) {
    console.log(classListElementRule)
}
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let elementsByClassNameFc_rules = document.getElementsByClassName('fc_rules');
for (const elementsByClassNameFcRule of elementsByClassNameFc_rules) {
    elementsByClassNameFcRule.style.color = 'red'
}