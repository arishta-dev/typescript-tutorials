// LESSON 5: Arrays & tuples in Typescript 

// ARRAYS 

// Two ways to define an array
let heroes: string[] = ["Batman", "Iron Man"];
let heroes2: Array<string> = [];

// Adding and removing elements from the array 
heroes.push("Superman");
heroes.pop();

// 2 D array 
let coordinates: number[][] = [[2, 3], [4, 8]];

// Find function 
let result = heroes.find((hero) => hero.length > 5);

// TUPLES 
// the number of elements and their types are fixed. 
// Unlike regular arrays, tuples enforce the position and type of each element.
let user: [string, number] = ["Alice", 25];
let rgb: [number, number, number] = [255, 255, 278] // only three numbers are allowed

// IF YOU TRY TO CHANGE THE ORDER OR TYPE, typescript will throw an error

// Note: you can use push to add elements to a tuple (but that makes tuple like a regular array)
// to enforce tuple behaviour, avoid pushing elements to tuple
user.push(12);

// Example 
function getUser(): [string, number] {
    return ["Alice", 23];
}
let [username, age] = getUser();
console.log(username, age); // "Alice", 25