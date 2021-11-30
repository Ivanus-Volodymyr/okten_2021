//написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль
//
//
// function rec(start) {
//     let ruleMas = [];
//     for (const startElement of start.children) {
//         if (startElement.children) {
//            ruleMas.push(...rec(start.children))
//         }
//         ruleMas.push(...startElement.children)
//     }
//     console.log(ruleMas)
//
//
// }
// rec(document.body)
