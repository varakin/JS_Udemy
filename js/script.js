//'use strict';


/* первая домашка (19 номер урока)
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const firstQuestionMovie = prompt('Один из последних просмотренных фильмов?', '');
const firstQuestionMark = +prompt('На сколько оцените его?', '');
const secondQuestionMovie = prompt('Один из последних просмотренных фильмов?', '');
const secondQuestionMark = +prompt('На сколько оцените его?', '');

personalMovieDB.movies[firstQuestionMovie] = firstQuestionMark;
personalMovieDB.movies[secondQuestionMovie] = secondQuestionMark;

console.log(personalMovieDB);

*/

/*вторая домашка

// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    for (let i=5; i<=10; i++) {
        console.log(i);
    }
    
}

// Место для второй задачи
function secondTask() {
    // Пишем решение вот тут
    for (let i=20; i>=10; i--) {
        console.log(i);
        if (i === 14) break;
    }
    
}

// Место для третьей задачи
function thirdTask() {
    // Пишем решение вот тут
    for (let i=2; i<=10; i=i+2) {
        console.log(i);
    }
    
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

function fourthTask() {
    // Пишем решение вот тут
    let i = 1;
    while (i<=14) {
        i++;
        if (i % 2 === 0) {
            continue;
         }  else {
            console.log(i);
         }
    }    
}

// Место для пятой задачи

function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    for (let i=0; i<=5; i++) {
        arrayOfNumbers[i]=i+5;
    }
    
    // Не трогаем
    return arrayOfNumbers;
}
*/


/* третья домашка */


// const arrayOfNumbers = [];

// // Пишем решение вот тут
// for (let i=0; i<=5; i++) {
//     arrayOfNumbers[i]=i+5;
// }
// console.log(arrayOfNumbers);


// // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// // Пишем решение вот тут
// for (let i=0; arr.lenght;  i++){
//     result[i] = arr[i]
// }
// // Не трогаем
// console.log(result);
// const data = [5, 10, 'Shopping', 20, 'Homework'];
//     // Пишем решение вот тут
// for (let i=0; i<data.length; i++) {
//     if (typeof data[i] === "string") {
//         data[i] = data[i] + ' - done';
//     } else {
//         data[i] = data[i]*2;
//     }
// }
// console.log(data);

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)

// function sayHello(name) {
//     return ('Привет, ' + name + '!');
// }
// console.log(sayHello('Anton'));

// function returnNeighboringNumbers(x) {
//     return [x-1,x,x+1];
// }

// console.log(returnNeighboringNumbers(5));

// function getMathResult(a, b) {
//     let tax = a;
//     let str = '';
//     if (typeof b === "number" && b>0) {
//         for (let i = 1; i < b; i++) {
//             str = str + tax + '---';
//             tax += a;
            
//         }
//     } else {
//         return (a);
//     }
//     return str+tax
// }
// console.log(getMathResult(20, -5));

// function calculationVolumeAndArea (perem){
//     stroka = '';
//     if (typeof perem === 'number' && perem > 0 && Number.isInteger(perem)){
//             stroka = 'Объем куба: '+ perem*perem*perem + ', площадь всей поверхности: '+ perem*perem*6;
//     }
//     else {
//         stroka = 'При вычислении произошла ошибка';
//     }
//     return stroka;
// }

// // console.log(calculationVolumeAndArea(-15))
// function getCoupeNumber(place){
//     qwerty = '';
//     if (typeof place === 'number' && Number.isInteger(place) && place > 0 && place <37){
//         qwerty = Math.ceil(place/4);
//     }
//     else if (place == 0 || place >=37){
//         qwerty = 'Таких мест в вагоне не существует';
//     } else {
//         qwerty = 'Ошибка. Проверьте правильность введенного номера места';
//     }
//     return qwerty;
// }
// console.log(getCoupeNumber('hello'))

// function getTimeFromMinutes(vreme4ko) {
//     let resultTime = '';
//     if (Number.isInteger(vreme4ko) && vreme4ko >=0 && vreme4ko <=600){
//         let hour = parseInt(vreme4ko/60);
//         let minute = parseInt(vreme4ko%60);
//         if (hour === 1) {
//             resultTime = 'Это ' + hour + ' час и ' + minute + ' минут';
//         } else if ((hour === 2)|| (hour === 3)|| (hour === 4)){
//             resultTime = 'Это ' + hour + ' часа и ' + minute + ' минут';
//         } else {
//             resultTime = 'Это ' + hour + ' часов и ' + minute + ' минут';
//         }
//         return resultTime;
//     }
//     else {
//         return 'Ошибка, проверьте данные'
//     }
// }
// console.log(getTimeFromMinutes(0));

// function findMaxNumber(x1 = 'a', x2 = 'a', x3 = 'a', x4 = 'a') {
//     if ((typeof x1 === 'string') || (typeof x2 === 'string') || (typeof x3 === 'string') || (typeof x4 === 'string')) {
//         return 0;
//     } else {
//         return Math.max(x1, x2, x3, x4);
//     }
// }
// console.log (findMaxNumber(1, 5, '6', '10'));

// function fib(x) {
//     if (x===1) {
//         return "0";
//     }
//     else if (x===2){
//         return "0 1";
//     }
//     else if (Number.isInteger(x) && x>0){
//         let xMinusOne = 1
//         let xMinusTwo = 0;
//         let qwe = '0 1 ';
//         for (let i = 3; i <=x; i++) {
//             let y = xMinusTwo + xMinusOne;
//             qwe += y + ' ';
//             xMinusTwo = xMinusOne;
//             xMinusOne = y;
//         }
//         return qwe.slice(0,-1);
//     } else {
//         return ""
//     }
// }
// console.log(fib(7));

// тут я дописываю просто некий код для проверки пулла

// тут код от ветки newBranch
// something from gtHb
