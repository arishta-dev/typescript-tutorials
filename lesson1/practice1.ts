/* 
  In this practice exercise, you need to create several variables with proper type annotations:
  Create a variable for your age (number type), your name (string type), your student status
  (boolean type), and an array containing your favorite colors (string array type). 
  
  Then, create a function that accepts two parameters - a name (string) and an age (number) - which
  should return a greeting message in the format: "Hello, my name is [name] and I am [age] years old."
*/

// Write your code below:

let personName: string = "Arishta";
let personAge: number = 12;
let isStudent: boolean = true;
let favoriteColors: string[] = ["red", "blue", "green"];

function greetPerson(name: string, age: number) {
    return `Hello, my name is ${name} and age is ${age}`; 
}

console.log(greetPerson(personName, personAge));

export {}; 