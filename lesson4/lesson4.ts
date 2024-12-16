/*
    LESSON4: In this lesson4, we will cover the following topics: 
    1. For and for each loop 
    2. Array filter method 
    3. Array map method 
    4. Array reduce method 
*/

// 1. For loops
const numbers: number[] = [1,2,4];
for (let i = 0; i < numbers.length; i++) { 
    console.log(numbers[i]);
}

// For each loop

numbers.forEach((number)=>{console.log(number)});

// 2. Array filter method 
// creates a new array with the elements that pass the condition specified
// it takes one callback function as an arg 
// the callback function must return true or false, if true, the element is included, else not
const evenNumbers = numbers.filter(num => num%2 === 0);
console.log("Filetered even numbers: ", evenNumbers);

// 3. Map methhod 
// creates a new array with the elements populated with the results of calling the function 
const squaredNumbers = numbers.map(number => number*number);
console.log("Squared numbers", squaredNumbers);

// 4. Reduce method 

// array.reduce((acc, curr) => { ... }, initValue);
/* first arg: callback function 

 (x, y) => { return x + y; };
 is equivalent to
 (x, y) => x + y; // shorthand notation 
 */
// second arg: initial value

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of Numbers:", sum); // Output: 15


// 5. Chaining 
const totalEvenSquares = numbers
    .filter((number)=>number % 2=== 0) // Filter the elements with even nums
    .map((number => number *number)) // square the elements
    .reduce((acc, curr) => acc + curr, 0);  // sum them up 

console.log("Total of even squares: "+totalEvenSquares);

export {};
