// LESSON 3: Functions 
// 1. Basic function declaration 
function greet(name) {
    console.log("Hello ".concat(name));
}
// arrow function version
var greet2 = function (name) { console.log("Hello ".concat(name)); };
// 2. Adding the return type of functions 
function add(a, b) {
    return a + b;
}
// 3. Void and never return type 
function logMessage(message) {
    console.log(message);
}
function handleError(error) {
    throw new Error(error);
}
// 4. Optional and default parameters 
// default parameter
function sayHello(name) {
    if (name === void 0) { name = "User"; }
    return ("Hello ".concat(name));
}
// optional parameter
function sayHello2(name) {
    return ("Hello ".concat(name || 'User')); // either display Hello User or Hello name
}
// 5. Rest parameters -> you can use rest parameters to pass multiple arguments to a function
function addNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
function sumAllNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
// 6. function overloading 
function getInfo(value) {
    return "ID: ".concat(value);
}
function getInfo2(value) {
    return "Name: ".concat(value);
}
function createUser() {
    return { name: "John", age: 20 };
}
var user = createUser();
