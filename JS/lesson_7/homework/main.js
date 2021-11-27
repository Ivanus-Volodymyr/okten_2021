//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, usernName, surname, email, phone) {
    this.id = id;
    this.userName = usernName;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(5, 'Vil', 'Dil', 'dil@gmail.com', '0672345678');
let user2 = new User(10, 'Ben', 'dil', 'dil@gmail.com', '0672345678');
let user3 = new User(8, 'Bob', 'dil', 'dil@gmail.com', '0672345678');
let user4 = new User(4, 'Bill', 'dil', 'dil@gmail.com', '0672345678');
let user5 = new User(1, 'Brendon', 'dil', 'dil@gmail.com', '0672345678');
let user6 = new User(6, 'Alan', 'dil', 'dil@gmail.com', '0672345678');
let user7 = new User(7, 'Fill', 'dil', 'dil@gmail.com', '0672345678');
let user8 = new User(3, 'Alex', 'dil', 'dil@gmail.com', '0672345678');
let user9 = new User(9, 'Elon', 'dil', 'dil@gmail.com', '0672345678');
let user10 = new User(2, 'Stew', 'dil', 'dil@gmail.com', '0672345678');

let userMas = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];
console.log(userMas)

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let masFilter = userMas.filter(value => value.id % 2 === 0);
console.log(masFilter);


//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let userSortId = userMas.sort((a, b) => a.id - b.id);
console.log(userSortId);

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, clientName, surname, email, phone, order) {
        this.id = id;
        this.clientName = clientName;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


let client1 = new Client(1, 'alan', 'ivanov', 'ivan@gmail.com', '0987621122', ['goods']);
let client2 = new Client(2, 'alex', 'ivanov', 'ivan@gmail.com', '0987621122', ['goods', 'goods', 'goods', 'goods', 'goods', 'goods']);
let client3 = new Client(3, 'ben', 'ivanov', 'ivan@gmail.com', '0987621122', ['goods', 'goods']);
let client4 = new Client(4, 'fill', 'ivanov', 'ivan@gmail.com', '0987621122', ['goods', 'goods', 'goods', 'goods']);
let client5 = new Client(5, 'oliver', 'ivanov', 'ivan@gmail.com', '0987621122', ['goods', 'goods', 'goods']);
let client6 = new Client(6, 'bill', 'ivanov', 'ivan@gmail.com', '0987621122', ['goods', 'goods', 'goods', 'goods', 'goods']);
let client7 = new Client(7, 'felix', 'ivanov', 'ivan@gmail.com', '0987621122', ['goods', 'goods', 'goods', 'goods', 'goods', 'goods', 'goods', 'goods', 'goods']);
let client8 = new Client(8, 'elon', 'ivanov', 'ivan@gmail.com', '0987621122', ['goods', 'goods', 'goods', 'goods', 'goods', 'goods', 'goods']);
let client9 = new Client(9, 'mark', 'ivanov', 'ivan@gmail.com', '0987621122', ['goods', 'goods', 'goods', 'goods', 'goods', 'goods', 'goods', 'goods']);
let client10 = new Client(10, 'tony', 'ivanov', 'ivan@gmail.com', '0987621122', ['goods', 'goods', 'goods', 'goods', 'goods', 'goods', 'goods', 'goods', 'goods', 'goods']);

let masClient = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];
console.log(masClient);


//- Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let clientSortOrder = masClient.sort((a, b) => a.order.length - b.order.length);
console.log(clientSortOrder);