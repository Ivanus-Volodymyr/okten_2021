//- Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
let mainDiv = document.createElement('div');
let form = document.createElement('form');
let name = document.createElement('input');
name.type = 'text';
name.placeholder = 'Name of Product';
let count = document.createElement('input');
count.type = 'number';
count.placeholder = 'Count of Product'
let price = document.createElement('input');
price.type = 'number';
price.placeholder = 'Price of Product'
let img = document.createElement('input');
img.src = img.value
img.placeholder = 'Link on image of Product'
let button = document.createElement('button');
button.innerText = 'Create new product';
button.addEventListener('click', function (e) {
    e.preventDefault();
    let products =  JSON.parse(localStorage.getItem('product')) || [];
    products.push({id:products[products.length - 1]?.id + 1 || 1, name: name.value, count: count.value, price: price.value, img: img.value});
    localStorage.setItem('product', JSON.stringify(products));
    name.value = '';
    count.value = '';
    price.value = '';
    img.value = '';
});


let linkButton = document.createElement('button')
linkButton.classList.add('link_button')
let link = document.createElement('a');
link.innerText = 'На сторінку товарів';
link.href = 'list.html';
link.target = 'blank'
linkButton.append(link);


form.append(name, count, price, img, button)
mainDiv.append(form, linkButton);
mainDiv.classList.add('main')
document.body.appendChild(mainDiv);
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
// До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар