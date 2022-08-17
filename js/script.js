'use strict';


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


const arrayOfNumbers = [];

// Пишем решение вот тут
for (let i=0; i<=5; i++) {
    arrayOfNumbers[i]=i+5;
}
console.log(arrayOfNumbers);