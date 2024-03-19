"use strict";
// How to define type annotation on object ---------------------------------------------------- //
const student_data = {
    name: "John",
    age: 20,
    isPassed: true,
    address: {
        country: "India",
        state: "Surat",
    },
};
console.log(student_data.age);
// student data
const student_data_one = {
    name: "John",
    age: 20,
    isPassed: true,
    address: {
        country: "India",
        state: "Surat",
    },
};
const student_data_two = {
    name: "John",
    age: 20,
    isPassed: true,
    rollNum: 202,
    address: {
        country: "India",
        state: "Surat",
    },
};
console.log(student_data_two.address.country);
// assign object and object types value into a function
const studentData = (student) => ` Hy there my name is ${student.name} and my roll number was ${student.rollNum}`;
console.log(studentData(student_data_two));
const anotherStudentData = {
    fname: "John",
    lname: "Deo",
    age: 33,
    rollNum: 503,
    address: {
        country: "India",
        state: "Surat",
    },
    fullName: (school) => `hello my full name is ${anotherStudentData.fname} ${anotherStudentData.lname} and my school name is ${school}`,
};
console.log(anotherStudentData.fullName("school name"));
