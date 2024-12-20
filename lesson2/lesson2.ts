// LESSON 2: TYPE
// 1. Primitive Types
let str: string = "hello";
let num: number = 42;        // includes integers, floats, Infinity, NaN
let bool: boolean = true;
let undef: undefined = undefined;
let nul: null = null;

// 2. Object Types: 

// object can be defined by using type or interface
// 1. interface User { name: string; age: number}
// 2. type User = { name: string; age: number}
type User = {
    name: string;
    age: number;
}

let user: User = {
    name: "John",
    age: 20
};

// 3. Array Types (two syntaxes)
let arr1: string[] = ["a", "b", "c"];
let arr2: Array<string> = ["a", "b", "c"];

// 4. Tuple Type (fixed-length array with specific types)
let tuple: [string, number] = ["hello", 10];

// 5. Enum Type
enum Color {
    Red,
    Green,
    Blue
}
let color: Color = Color.Red;

// 6. Union Type (can be one of multiple types)
let unionVar: string | number = "hello";
unionVar = 42; // also valid
const data: (number | string) [] = [1, "2", 3]; // allows mix of number or string
const data2: any = [1, "2", "3"] // another way but not recommended (avoid any)
const data3: (number[] | string[]) = ["1", "2", "3"]; // alows only numbers array or only string array (not both)
let seatAllotment: "aisle" | "middle" | "window" 

// 7. Intersection Type (must have all properties of both types)
type Person = { name: string; age: number };
type Employee = { employeeId: number; department: string };

type EmployeeDetails = Person & Employee & {address: string}

const employee: EmployeeDetails = {
    name: "John Doe",
    age: 30,
    employeeId: 12345,
    department: "Engineering",
    address: 'Jaipur'
};


// 8. Any Type (turns off type checking)
let anyVar: any = "hello";
anyVar = 42; // no error

// 9. Unknown Type (safer version of any)
let unknownVar: unknown = "hello";
// Must type check before using unknown values
if (typeof unknownVar === "string") {
    console.log(unknownVar.toUpperCase());
}

// 10. Void Type (usually for functions that don't return anything)
function logMessage(): void {
    console.log("Hello");
}

// 11. Never Type (for functions that never return)
function throwError(): never {
    throw new Error("Error");
}

// 12. Type Aliases
type Point = {
    x: number;
    y: number;
};
let point: Point = { x: 10, y: 20 };

// Type aliases can be used to give name to any type at all
// eg. type ID = string | number | boolean; 


// 13. Literal Types
let literal: "exact" | "values" | "only" = "exact";

// 14. Function Types
type MathFunc = (x: number, y: number) => number;
let add: MathFunc = (x, y) => x + y;


export {};