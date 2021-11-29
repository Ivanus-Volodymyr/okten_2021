// // /- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями
// // -------модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// //     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// //     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// //     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// //     -- changeYear (newValue) - змінює рік випуску на значення newValue
// //     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// function Car(model, producer, year, max, engineCapacity) {
//     this.modelCar = model;
//     this.producer = producer;
//     this.year = year;
//     this.max = max;
//     this.engineCapacity = engineCapacity;
//     //     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.max} на годину`);
//     }
//
//     //-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     this.info = function () {
//         console.log(`model - ${model}, producer - ${producer}, year - ${year}, max - ${max}, engineCapacity - ${engineCapacity}`);
//     }
//
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     this.increaseMaxSpeed = (newSpeed) => {
//         let speed = max + newSpeed;
//         console.log(speed)
//     }
//
//     //-- changeYear (newValue) - змінює рік випуску на значення newValue
//     this.changeYear = function (newValue) {
//         return Car.year = newValue;
//     }
//
//     //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     this.addDriver = (driver) => Car.driver = driver;
// }
// let driverBen = {
//     driverName: 'Ben',
//     driverAge: 25
// }
//
//
// let bmw = new Car('Bmw', 'Germany', 1969, 100, '2.0',);
// console.log(bmw);
// bmw.drive();
// bmw.info();
// bmw.increaseMaxSpeed(10);
// bmw.changeYear(1994)
// console.log(Car.year)
// bmw.addDriver(driverBen);
// console.log(Car.driver);


// //- (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// //     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// //     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// //     -- changeYear (newValue) - змінює рік випуску на значення newValue
// //     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(modelCar, producer, year, max, engineCapacity) {
//         this.modelCar = modelCar;
//         this.producer = producer;
//         this.year = year;
//         this.max = max;
//         this.engineCapacity = engineCapacity;
//     }
//
//     // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     drive() {
//         return `їдемо зі швидкістю ${this.max} на годину`;
//     }
//
//     //-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     info() {
//         return `model - ${this.modelCar}, producer - ${this.producer}, year - ${this.year}, max - ${this.max}, engineCapacity - ${this.engineCapacity}`;
//     }
//
//     // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     increaseMaxSpeed(newSpeed) {
//         let speed = this.max + newSpeed;
//         return this.max = speed
//     }
//
//     //     //-- changeYear (newValue) - змінює рік випуску на значення newValue
//     changeYear(newValue) {
//         return this.year = newValue;
//     }
//
//     //-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     addDriver(driver) {
//         return this.driver = driver;
//     }
//
// }
//
// let carBmw = new Car('bmw', 'Germany', 1990, 180, '3,5');
// console.log(carBmw);
// console.log(carBmw.drive());
// console.log(carBmw.info());
// console.log(carBmw.increaseMaxSpeed(20));
// console.log(carBmw.changeYear(1993));
// carBmw.addDriver('Tim');
// console.log(carBmw);

// //-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// class Cinderella {
//     constructor(cinderellaName, cinderellaAge, cinderellaFootSize) {
//         this.cinderellaName = cinderellaName;
//         this.cinderellaAge = cinderellaAge;
//         this.cinderellaFootSize = cinderellaFootSize;
//     }
// }
//
// let cinderella1 = new Cinderella('Merry', 18, 31)
// let cinderella2 = new Cinderella('Bessy', 19, 37);
// let cinderella3 = new Cinderella('Angela', 19, 35);
// let cinderella4 = new Cinderella('Bella', 19, 34);
// let cinderella5 = new Cinderella('Arya', 19, 38);
// let cinderella6 = new Cinderella('Sasa', 19, 39);
// let cinderella7 = new Cinderella('Monika', 19, 33);
// let cinderella8 = new Cinderella('Virginia', 19, 32);
// let cinderella9 = new Cinderella('Viola', 19, 36);
// let cinderella10 = new Cinderella('Barbara', 19, 30);
//
// let masCinderella = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10]
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(princeName, princeAge, princeShoe) {
//         this.princeName = princeName;
//         this.princeAge = princeAge;
//         this.princeShoe = princeShoe;
//     }
// }
//
// let prince = new Prince('Ned', 22, 36);
//
// // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (let i = 0; i < masCinderella.length; i++) {
//     if (prince.princeShoe === masCinderella[i].cinderellaFootSize) {
//         console.log(masCinderella[i])
//     }
// }
//
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// // noinspection JSCheckFunctionSignatures
// let cinderella = masCinderella.find(value => value.cinderellaFootSize === prince.princeShoe);
// console.log(cinderella);