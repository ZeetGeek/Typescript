"use strict";
// how to use type aliases with object and function. ------------------ //
Object.defineProperty(exports, "__esModule", { value: true });
// 01 way one ---------- //
var User = {
    name: "John",
    email: "john@gmail.com",
    isActive: true,
};
var userInfo = function (_a) {
    var name = _a.name, email = _a.email, isActive = _a.isActive;
    return "\uD83D\uDC64 Name: ".concat(name, ", Email: ").concat(email, ", isActive: ").concat(isActive);
};
console.log(userInfo(User));
var studentDetail = function (stu) {
    return "\uD83E\uDDD1\u200D\uD83C\uDF93 student : fname ".concat(stu.fname, " || lname ").concat(stu.lname, " || roll number ").concat(stu.rollNum, " || student passed ").concat(stu.isPassed ? "yes" : "no", " ");
};
console.log(studentDetail({ fname: "John", lname: "Deo", rollNum: 20, isPassed: true }));
// student data
var my_student_data_one = {
    name: "John",
    age: 20,
    isPassed: true,
    address: {
        country: "India",
        state: "Surat",
    },
};
var my_student_data_two = {
    name: "Jimmy",
    age: 16,
    isPassed: true,
    rollNum: 12,
    address: {
        country: "UK",
        state: "landon",
    },
};
console.log(my_student_data_one.name);
console.log(my_student_data_two.name);
// how to return object inset on a function. ------------------ //
var myFavCar = function (_a) {
    return {
        name: "supra",
        price: 12000,
    };
};
