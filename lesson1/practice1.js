"use strict";
/*
  In this practice exercise, you need to create several variables with proper type annotations:
  Create a variable for your age (number type), your name (string type), your student status
  (boolean type), and an array containing your favorite colors (string array type).
  
  Then, create a function that accepts two parameters - a name (string) and an age (number) - which
  should return a greeting message in the format: "Hello, my name is [name] and I am [age] years old."
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Write your code below:
var personName = "Arishta";
var personAge = 12;
var isStudent = true;
var favoriteColors = ["red", "blue", "green"];
function greetPerson(name, age) {
    return "Hello, my name is ".concat(name, " and age is ").concat(age);
}
console.log(greetPerson(personName, personAge));
