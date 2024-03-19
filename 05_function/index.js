// adding type annotation on function
// 01 way one using normal function
function userInfo(name, email, password) {
    return "Name: ".concat(name, ", Email: ").concat(email, ", Password: ").concat(password);
}
console.log(userInfo("john", "john@google.com", "123456"));
// 02 way two using arrow function
var userDetails = function (name, email, password) {
    return "Name: ".concat(name, ", Email: ").concat(email, ", Password: ").concat(password);
};
console.log(userDetails("john", "john@google.com", "123456"));
