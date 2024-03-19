// How to define type annotation on object ---------------------------------------------------- //
const student_data: {
    name: string;
    age: number;
    isPassed: boolean;
    address: {
        country: string;
        state: string;
    };
} = {
    name: "John",
    age: 20,
    isPassed: true,
    address: {
        country: "India",
        state: "Surat",
    },
};

console.log(student_data.age);

// What is type alias ---------------------------------------------------- //

// type alias
type StudentTypes = {
    name: string;
    age: number;
    isPassed: boolean;
    rollNum?: number;
    address: {
        country: string;
        state: string;
    };
};

// student data

const student_data_one: StudentTypes = {
    name: "John",
    age: 20,
    isPassed: true,
    address: {
        country: "India",
        state: "Surat",
    },
};

const student_data_two: StudentTypes = {
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

const studentData = (student: StudentTypes): string =>
    ` Hy there my name is ${student.name} and my roll number was ${student.rollNum}`;

console.log(studentData(student_data_two));

// 03 : example of call signature ---------------------------------------------------- //
// call signature is way to add type annotation on function

type anotherStudentType = {
    fname: string;
    lname: string;
    age: number;
    rollNum: number;
    address: {
        country: string;
        state: string;
    };
    fullName: (school: string) => string; // that's call signature
};

const anotherStudentData: anotherStudentType = {
    fname: "John",
    lname: "Deo",
    age: 33,
    rollNum: 503,
    address: {
        country: "India",
        state: "Surat",
    },
    fullName: (school) =>
        `hello my full name is ${anotherStudentData.fname} ${anotherStudentData.lname} and my school name is ${school}`,
};

console.log(anotherStudentData.fullName("school name"));
