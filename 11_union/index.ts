// union ---------------------------- //

// what is union

// union is a way to add multiple types into a variable using [ | ] sign.

// 01 basic example

type userInfoProps = {
    name: string;
    age: number | string;
};

let userInfo: userInfoProps = {
    name: "john",
    age: 28,
};

userInfo.age = "40";

// 02 we can also ad multiple type aliases into a variable using union.

type userProps = {
    userName: string;
    id: number;
};

type adminProps = {
    adminName: string;
    id: number;
};

let johnDetail: userProps | adminProps = {
    userName: "John",
    id: 2020,
};

johnDetail = {
    adminName: "Jimmy",
    id: 2020,
};

console.log(johnDetail);

// 03 we can also use union in function

const add = (a: string | number): string | number => {
    return typeof a === "string" ? `your number is ${a}` : a + 2;
};

console.log(add(2));
console.log(add("14"));

// 04 we can also use union in array

const studentInfo: (string | number | boolean)[] = ["john", 2020, true];

console.log(studentInfo[0]);
console.log(studentInfo[1]);

// 05 we can also strictly check the type using union

let friendName: "john" = "john";
// friendName = "jimmy";  // it's show error

let friends: "john" | "jimmy";
friends = "jimmy";
friends = "john";
// friends = "michel"; // it's show error

export {};
