// //-створити форму з інпутами для name та age.
// // При відправці форми записати об'єкт в localstorage
// let div = document.createElement('div');
// let formElement = document.createElement('form');
// let inputElementName = document.createElement('input');
// inputElementName.type = 'text';
// let inputElementAge = document.createElement('input');
// inputElementAge.type = 'number';
// let buttonElement = document.createElement('button');
// buttonElement.innerText = 'Submit';
// buttonElement.addEventListener('click', function () {
//
//     let userObject = {name: inputElementName.value, age: inputElementAge.value};
//     let user = JSON.stringify(userObject)
//     localStorage.setItem('User', user);
//
// });
//
// formElement.append(inputElementName, inputElementAge, buttonElement);
// div.append(formElement);
// div.style.margin = '50px';
// document.body.append(div);

// -створити форму з інпутами для model,type та volume автівки.
// при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let divElement = document.createElement('div');
let formElement = document.createElement('form');
let model = document.createElement('input');
model.type = 'text';
model.placeholder = 'model';
let type = document.createElement('input');
type.type = 'text';
type.placeholder = 'type';
let volume = document.createElement('input');
volume.type = 'number';
volume.placeholder = 'volume';
let buttonElement = document.createElement('button');
buttonElement.innerText = 'Submit';

let result = [];
let stringify = JSON.stringify(result);
localStorage.setItem('car', stringify);

buttonElement.addEventListener('click', function (e) {
    e.preventDefault();
    let item = localStorage.getItem('car');
    let parse = JSON.parse(item);
    parse.push({model: model.value, type: type.value, volume: volume.value});
    localStorage.setItem('car', JSON.stringify(parse));
    model.value = '';
    type.value = '';
    volume.value = '';
    return result;
});


formElement.append(model, type, volume, buttonElement);
divElement.appendChild(formElement);
divElement.style.margin = '50px 0 0 50px';
document.body.appendChild(divElement);