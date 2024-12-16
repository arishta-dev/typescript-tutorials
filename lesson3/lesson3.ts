// LESSON 3: Functions 

// 1. Basic function declaration 

function greet(name: string){
    console.log(`Hello ${name}`);
}

// arrow function version
const greet2 = (name: string) =>{console.log(`Hello ${name}`)};

// 2. Adding the return type of functions 

function add(a: number, b:number):number {
    return a+b;
}

// 3. Void and never return type 

function logMessage(message: string):void {
    console.log(message);
}

function handleError(error: string):never {
    throw new Error(error);
}

// 4. Optional and default parameters 

// default parameter
function sayHello(name: string="User"): string {
   return (`Hello ${name}`);
}

// optional parameter (? before the colon)
function sayHello2(name?:string):string{
    return (`Hello ${name || 'User'}`); // either display Hello User or Hello name
}

// 5. Rest parameters -> you can use rest parameters to pass multiple arguments to a function
function addNumbers(...numbers: number[]):number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

function sumAllNumbers(...numbers: number[]): number {
    return numbers.reduce((acc,curr)=>acc+curr, 0);
}

// 6. function overloading 

function getInfo(value: number): string {
    return `ID: ${value}`;
}

function getInfo2(value: any): string {
    return `Name: ${value}`;
}

// 7. You can also return an object from a function 

type User = {
    name: string;
    age: number;
}

function createUser(): User {
    return {name: "John", age: 20};
}

const user = createUser();


// 8. readonly keyword (to prevent re assignment)

type Book = {
    readonly _id: number, 
    name: string
}

let book: Book = {'_id': 1, 'name': 'harry potter'};
book.name = 'harry potter and the chamber of secrets';
// school1._id = '1'; // not allowed since _id is readonly