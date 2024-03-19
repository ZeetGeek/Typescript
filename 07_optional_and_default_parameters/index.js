"use strict";

// Example of default parameters
const student_into = (name = "John", age = 18, isPassed = true) => `Hy this my name is ${name} and my age is ${age} and i passed ${isPassed}`;
console.log(student_into());

// Example of optional parameters
const my_info = (name = "john", age ?: number, email):string => {
    return `Hy there my name is ${name}. my age is ${age ? age : "no age"} and my email is ${email ? email : "no email"}`;
};
console.log(my_info("john"));
console.log(my_info("john", 60, "john@google.com"));
