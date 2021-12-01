//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
//
//
let mAs = [];
for (const child of document.body.children) {
    for (const childElement of child.children) {
        mAs.push(...childElement.classList)
    }
}
console.log(mAs);



function rec(start) {
    let mas = [];
    if (start.children) {
        for (const element of start.children) {
            mas.push(...element.classList);
            rec(element);
        }
    }mas.push()
    console.log(mas)
}

rec(document.body);



