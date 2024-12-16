/*
    PRACTICE LESSON: In this lesson, we will reinforce the following topics:
    1. For and ForEach loops
    2. Array filter method
    3. Array map method
    4. Array reduce method
    5. Chaining methods
*/

// Practice Exercise:
// You have an array of users, where each user has a `name`, `age`, and an array of `scores`. 
// Your task is to perform several operations using the skills you've learned.

// Example data
const users = [
    { name: "Alice", age: 25, scores: [95, 85, 75] },
    { name: "Bob", age: 30, scores: [80, 60, 70] },
    { name: "Charlie", age: 35, scores: [50, 65, 70] },
    { name: "Diana", age: 28, scores: [90, 92, 88] },
];

// Tasks:

// 1. Use a `for` loop to log each user's name and their average score to the console.
//    (Hint: Calculate the average of their scores array.)


// 2. Use `forEach` to log the names of users who are older than 30.

// 3. Use the `filter` method to create a new array of users who have an average score greater than 80.

// 4. Use the `map` method to create a new array of objects with only the user's name and their highest score.

// 5. Use the `reduce` method to calculate the total sum of all scores of all users.

// 6. Use method chaining to:
//    a. Filter users who are under 30
//    b. Map their names and average scores into an array of objects
//    c. Reduce the average scores to find their total average score.

// 7. BONUS Challenge:
//    Write a function `getUserStatistics` that takes the users array and returns an object with:
//    - Total number of users
//    - Average age of users
//    - User with the highest single score

export {};
