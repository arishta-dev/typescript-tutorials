// LESSON 1: Basics of Typescript

// 1. Typescript is a super set of JavaScript
// 2. Typescript gives you static type checking, so that you can catch errors at compile time
// 3. It compiles to JavaScript, so that you can run it on any browser or node.js 
// Every .ts or .tsx file, compiles to .js or .jsx file

// 4. Syntax: variable: type = value 
let greetings: string = "Hello Arishta"; // TOO OBVIOUS: We are declaring a variable and assigning a value, it is optional to specify the type
greetings.toLowerCase();
console.log(greetings);

export {}; 

// 5. How to run typescript: tsc filename.ts 
// This will compile the typescript file to javascript and save it as filename.js

// 6. How to run javascript: node filename.js 

// 7. any type (TypeScript): any essentially turns off type checking for that variable
// not a good practice to use any: since it turns off type checking for that variable
let anyVar: any = "hello";
anyVar = 42;        // OK
anyVar = true;      // OK
anyVar = [1, 2, 3]; // OK -

// 8. type of -> used to find the type of the variable
let name: string | boolean = "arishta";
console.log(typeof(name));