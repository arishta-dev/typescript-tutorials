let personName: string = "Arishta";
let personAge: number = 12;
let isStudent: boolean = true;
let favoriteColors: string[] = ["red", "blue", "green"];

function greetPerson(name: string, age: number) {
    return `Hello, my name is ${name} and age is ${age}`; 
}

console.log(greetPerson(personName, personAge));

export {}; 