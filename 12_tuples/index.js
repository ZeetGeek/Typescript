"use strict";
// what is tuples -------------------------- //
Object.defineProperty(exports, "__esModule", { value: true });
// tuples is the way to write a array value in types formate.
// example
// 01 way one to create a tuples
var userInfo = ["john", 2020, true];
var userInfo3 = ["john", 20, true]; // this is true
// const userInfo4: userInfo3Tuples = [20, "john", true]; // it's shows error
// this is possible when i use tuples and it's can't shows any error.
userInfo3.push("hello");
console.log(userInfo3);
