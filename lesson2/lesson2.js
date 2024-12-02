"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// LESSON 2: TYPE
// 1. Primitive Types
var str = "hello";
var num = 42; // includes integers, floats, Infinity, NaN
var bool = true;
var undef = undefined;
var nul = null;
var user = {
    name: "John",
    age: 20
};
// 3. Array Types (two syntaxes)
var arr1 = ["a", "b", "c"];
var arr2 = ["a", "b", "c"];
// 4. Tuple Type (fixed-length array with specific types)
var tuple = ["hello", 10];
// 5. Enum Type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
// 6. Union Type (can be one of multiple types)
var unionVar = "hello";
unionVar = 42; // also valid
// 8. Any Type (turns off type checking)
var anyVar = "hello";
anyVar = 42; // no error
// 9. Unknown Type (safer version of any)
var unknownVar = "hello";
// Must type check before using unknown values
if (typeof unknownVar === "string") {
    console.log(unknownVar.toUpperCase());
}
// 10. Void Type (usually for functions that don't return anything)
function logMessage() {
    console.log("Hello");
}
// 11. Never Type (for functions that never return)
function throwError() {
    throw new Error("Error");
}
var point = { x: 10, y: 20 };
// 13. Literal Types
var literal = "exact";
var add = function (x, y) { return x + y; };
