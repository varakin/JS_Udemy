'use strict';

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
