// what is tuples -------------------------- //

// tuples is the way to write a array value in types formate.

// example

// 01 way one to create a tuples

const userInfo: [string, number, boolean] = ["john", 2020, true];
// const userInfo2: [string, number, boolean] = ["john", true, 2020];  // it's shows error

// 02 way to create a tuples

type userInfo3Tuples = [string, number, boolean];

const userInfo3: userInfo3Tuples = ["john", 20, true]; // this is true
// const userInfo4: userInfo3Tuples = [20, "john", true]; // it's shows error

// this is possible when i use tuples and it's can't shows any error.
userInfo3.push("hello");

console.log(userInfo3);

export {};
