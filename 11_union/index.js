"use strict";
// union ---------------------------- //
Object.defineProperty(exports, "__esModule", { value: true });
var userInfo = {
    name: "john",
    age: 28,
};
userInfo.age = "40";
var johnDetail = {
    userName: "John",
    id: 2020,
};
johnDetail = {
    adminName: "Jimmy",
    id: 2020,
};
console.log(johnDetail);
// 03 we can also use union in function
var add = function (a) {
    return typeof a === "string" ? "your number is ".concat(a) : a + 2;
};
console.log(add(2));
console.log(add("14"));
// 04 we can also use union in array
var studentInfo = ["john", 2020, true];
console.log(studentInfo[0]);
console.log(studentInfo[1]);
