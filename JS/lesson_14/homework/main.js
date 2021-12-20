//  TODO HW
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
//Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі

// //callback-1
// setTimeout(bow = () => {
//     console.log('wake up');
//     setTimeout(
//         function breakfast() {
//             console.log('have a breakfast');
//             setTimeout(function coffee() {
//                 console.log('drink coffee');
//                 setTimeout(function car() {
//                     console.log('go to the gob');
//                     setTimeout(function job() {
//                         console.log('do my job good');
//                         setTimeout(function dinner() {
//                             console.log('have a dinner');
//                             setTimeout(function study() {
//                                 console.log('learning');
//                                 setTimeout(function () {
//                                     console.log('do my homework');
//                                     setTimeout(function shower() {
//                                         console.log('have a shower');
//                                         setTimeout(function reading() {
//                                             console.log('read some book');
//                                             setTimeout(function sleep() {
//                                                 console.log('go to sleep');
//                                             }, 200);
//                                         }, 100);
//                                     }, 900);
//                                 }, 800);
//                             }, 1000);
//                         }, 2000);
//                     }, 600);
//                 }, 400);
//             }, 100);
//         }, 50);
// }, 1300);

// //callback-2
// let wakeUp = (callback) => {
//     setTimeout(() => {
//         console.log('wake up');
//         callback();
//     }, 300);
// };
// let breakfast = (callback) => {
//     setTimeout(() => {
//         console.log('have a breakfast');
//         callback();
//     }, 700);
// };
// let reading = (callback) => {
//     setTimeout(() => {
//         console.log('read some books');
//         callback();
//     }, 420);
//
// };
// let shower = (callback) => {
//     setTimeout(() => {
//         console.log('have a shower');
//         callback();
//     }, 890);
//
// };
// let learning = (callback) => {
//     setTimeout(() => {
//         console.log('learning');
//         callback();
//     }, 230);
//
// };
// let car = (callback) => {
//     setTimeout(() => {
//         console.log('go to the job on  my car');
//         callback();
//     }, 510);
//
// };
// let coffee = (callback) => {
//     setTimeout(() => {
//         console.log('drink coffee');
//         callback();
//     }, 700);
//
// };
// let sleep = () => {
//     setTimeout(() => {
//         console.log('go to sleep');
//     }, 2000);
//
// };
// let homework = (callback) => {
//     setTimeout(() => {
//         console.log('do my homework');
//         callback();
//     }, 1000);
//
// };
// let job = (callback) => {
//     setTimeout(() => {
//         console.log('do my job good');
//         callback();
//     }, 560);
//
// };
// wakeUp(() => {
//     shower(() => {
//         coffee(() => {
//             breakfast(() => {
//                 car(() => {
//                     job(() => {
//                         homework(() => {
//                             learning(() => {
//                                 reading(() => {
//                                     sleep()
//                                 });
//                             });
//                         });
//                     });
//                 });
//             });
//         });
//     });
// });

// //promise
// let wakeUp = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('i wake up');
//             reject('sleep more');
//         }, 300);
//     });
// };
// let breakfast = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('i have a breakfast');
//             reject('time is not to have breakfast');
//         }, 700);
//     })
// };
// let reading = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('read some books');
//             reject('not now');
//         }, 420)
//     });
// };
// let shower = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('have a shower');
//             reject('not now');
//         }, 890);
//     });
//
// };
// let learning = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('have a shower');
//             reject('not now');
//         }, 230)
//     })
// };
// let sleep = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('go to sleep');
//             reject('work more');
//         }, 200);
//     });
// };
// let drive = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('i go to work in  my car');
//             reject('not now');
//         }, 450);
//     })
// };
// let coffee = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('i drink coffee');
//             reject('not now');
//         }, 700)
//     });
// };
// let job = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('do my job good');
//             reject('not now');
//         }, 2200);
//     });
// };
// let homework = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('do my homework');
//             reject('not now');
//         }, 1230);
//     });
// };
//
//
// wakeUp(true)
//     .then(resolve => {
//         console.log(resolve);
//         return shower();
//     })
//     .then(bathe => {
//         console.log(bathe);
//         return coffee();
//     })
//     .then(drink => {
//         console.log(drink);
//         return breakfast();
//     })
//     .then(eat => {
//         console.log(eat);
//         return drive();
//     })
//     .then(go => {
//         console.log(go);
//         return job();
//     })
//     .then(doing => {
//         console.log(doing);
//         return shower();
//     })
//     .then(more => {
//         console.log(more);
//         return homework();
//     })
//     .then(tack => {
//         console.log(tack);
//         return learning();
//     })
//     .then(learn => {
//         console.log(learn);
//         return reading();
//     })
//     .then(read => {
//         console.log(read);
//         return sleep();
//     })
//     .then(sleeping => {
//         console.log(sleeping)
//     })
//     .catch(e => {
//         console.error(e);
//     })

// //async await
// let wakeUp = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('i wake up');
//             reject('sleep more');
//         }, 300);
//     });
// };
// let breakfast = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('i have a breakfast');
//             reject('time is not to have breakfast');
//         }, 700);
//     })
// };
// let reading = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('read some books');
//             reject('not now');
//         }, 420)
//     });
// };
// let shower = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('have a shower');
//             reject('not now');
//         }, 890);
//     });
//
// };
// let learning = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('have a shower');
//             reject('not now');
//         }, 230)
//     })
// };
// let sleep = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('go to sleep');
//             reject('work more');
//         }, 200);
//     });
// };
// let drive = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('i go to work in  my car');
//             reject('not now');
//         }, 450);
//     })
// };
// let coffee = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('i drink coffee');
//             reject('not now');
//         }, 700)
//     });
// };
// let job = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('do my job good');
//             reject('not now');
//         }, 2200);
//     });
// };
// let homework = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('do my homework');
//             reject('not now');
//         }, 1230);
//     });
// };
//
//
// async function day() {
//     const first = await wakeUp(true);
//     const second = await shower(true);
//     const third = await coffee(true);
//     const forth = await breakfast(true);
//     const fifth = await drive(true);
//     const sixth = await job(true);
//     const seventh = await homework(true);
//     const eight = await learning(true);
//     const ninth = await reading(true);
//     const tenth = await sleep(true);
//
//     console.log(first);
//     console.log(second);
//     console.log(third);
//     console.log(forth);
//     console.log(fifth);
//     console.log(sixth);
//     console.log(seventh);
//     console.log(eight);
//     console.log(ninth);
//     console.log(tenth);
// }
//
// day();
