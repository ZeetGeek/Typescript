// how to use type aliases with object and function. ------------------ //

// 01 way one ---------- //

const User = {
    name: "John",
    email: "john@gmail.com",
    isActive: true,
};

const userInfo = ({ name, email, isActive }: { name: string; email: string; isActive: boolean }): string => {
    return `👤 Name: ${name}, Email: ${email}, isActive: ${isActive}`;
};

console.log(userInfo(User));

// 02 way two ---------- //

type studentInfo = {
    fname: string;
    lname: string;
    rollNum: number;
    isPassed: boolean;
};

const studentDetail = (stu: studentInfo): string => {
    return `🧑‍🎓 student : fname ${stu.fname} || lname ${stu.lname} || roll number ${stu.rollNum} || student passed ${
        stu.isPassed ? "yes" : "no"
    } `;
};

console.log(studentDetail({ fname: "John", lname: "Deo", rollNum: 20, isPassed: true }));

// 03 way three define type aliases with only object ---------- //

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

const my_student_data_one: StudentTypes = {
    name: "John",
    age: 20,
    isPassed: true,
    address: {
        country: "India",
        state: "Surat",
    },
};

const my_student_data_two: StudentTypes = {
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

const myFavCar = ({}): { name: string; price: number } => {
    return {
        name: "supra",
        price: 12000,
    };
};

export {};
