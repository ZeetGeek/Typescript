"use strict";
// way yo define array in typescript.
Object.defineProperty(exports, "__esModule", { value: true });
// string array
var greeting = ["hello", "hy", "how are you"];
// number array
var marks = [20, 40, 65];
// boolean array
var isPassed = [true, false, true];
var userInfo = [];
userInfo.push({
    name: "john",
    email: "john@gmail.com",
});
// how to add array into array
var favMovies = [
    ["lala land", "cars 3"],
    ["avatar", "avengers"],
    ["interstellar", "titanic"],
];
console.log(favMovies[0][1]);
// remember ----------------------- //
var favHeros = [];
favHeros.push("bat man");
