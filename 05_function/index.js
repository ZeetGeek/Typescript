// adding type annotation on function
// 01 way one using normal function
function userInfo(name, email, password) {
    return "Name: ".concat(name, ", Email: ").concat(email, ", Password: ").concat(password);
}
console.log(userInfo("john", "john@google.com", "123456"));
// 02 way two using arrow function
var userDetails = function (name, email, password) {
    return " Name: ".concat(name, ", Email: ").concat(email, ", Password: ").concat(password);
};
console.log(userDetails("james", "james@google.com", "654321"));
// default
var studentInfo = [
    {
        id: 0,
        name: "John",
        favMovies: ["lala", "lala"],
    },
    {
        id: 0,
        name: "John",
        favMovies: ["lala", "lala"],
    },
];
console.log(studentInfo);
// void and never return
// void mens a function return nothing.
var myFavHero = function (hero) {
    // if you can't return any thing on function then please define [ void ]
    console.log("hy there... my favorite hero is ".concat(hero));
};
myFavHero("Bat Man");
// never mens a function never return a value.
var consoleErr = function (msg) {
    // if the function never return a value then please define [ never ]
    // for handling errors we use never instead
    throw new Error(msg);
};
consoleErr("something went wrong");
