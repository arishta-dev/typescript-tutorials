// Example data
const users = [
    { name: "Alice", age: 25, scores: [95, 85, 75] },
    { name: "Bob", age: 30, scores: [80, 60, 70] },
    { name: "Charlie", age: 35, scores: [50, 65, 70] },
    { name: "Diana", age: 28, scores: [90, 92, 88] },
];

// 1. Use a `for` loop to log each user's name and their average score to the console.

for (let i = 0; i<users.length;i++){
    let scores = users[i].scores;
    const avgScore = scores.reduce((acc, curr)=>acc+curr, 0)/scores.length;
    console.log(`Name: ${users[i].name} and Average score: ${avgScore}\n`);
}

// 2. Use `forEach` to log the names of users who are older than 30.

users.forEach(user => {
    if (user.age > 30){
        console.log(`Name: ${user.name}, Age: ${user.age}\n`);
    }
});

// 3. Use the `filter` method to create a new array of users who have an average score greater than 80.

let highScorers = users.filter((user)=>{
    let scores = user.scores;
    const avgScore = scores.reduce((acc, curr)=>acc+curr, 0)/scores.length; 
    return avgScore>=80; // filter returns a boolean callback function, if the callback returns true then the element is included 
});

console.log("High scorers: ", highScorers);

// 4. Use the `map` method to create a new array of objects with only the user's name and their highest score.

let userTopScorers = users.map((user)=>{
    let highestScore = Math.max(...user.scores);
    return {'name': user.name, 'topScore': highestScore};
});

console.log("Leader board: ", userTopScorers);


// 5. Use the `reduce` method to calculate the total sum of all scores of all users.

let totalScore = users.reduce((total, user)=>{
    let currUserScoreSum = user.scores.reduce((sum, score) => sum + score, 0);
    return total + currUserScoreSum;
}, 0);

// 6. Use method chaining to:
//    a. Filter users who are under 30
//    b. Map their names and average scores into an array of objects
//    c. Reduce the average scores to find their total average score.

let averageScoreUnder30 = users
.filter((user)=>{return user.age <30})
.map((user)=>{
    const averageScore = user.scores.reduce((total, curr)=>total+curr, 0 )/user.scores.length;
    return {'name': user.name, 'avgScore': averageScore};
})
.reduce((total, user)=>{
    return total+ user.avgScore;
}, 0);

console.log(`Total average score of users under 30: ${averageScoreUnder30}`);

// 7. BONUS Challenge:
//    Write a function `getUserStatistics` that takes the users array and returns an object with:
//    - Total number of users
//    - Average age of users
//    - User with the highest single score

function getUserStatistics(users) {
    const totalNumUsers = users.length;
    const averageAge = users.reduce((total, user)=>total+user.age, 0)/totalNumUsers;
    const userWithHighestScore = users.reduce((topUser, currentUser)=>{
        const currentTopScore = Math.max(...currentUser.scores);
        const topScore = Math.max(...topUser.scores);
        return currentTopScore>topScore?currentUser: topUser;
    }); // calling reduce without providing an initial value makes the first user the initial value
    return {totalNumUsers, averageAge, 'highestScore': {name: userWithHighestScore.name, score: Math.max(...userWithHighestScore.scores)}};
}

console.log("User Statistics:", getUserStatistics(users));

export {};