"use strict";
/*
  TYPESCRIPT TYPES PRACTICE ASSIGNMENT

  Create a small "User Management System" that demonstrates your understanding of TypeScript types.
  Complete the following tasks:

  1. Create an enum called 'UserRole' with three values: 'Admin', 'Editor', 'Viewer'

  2. Create a type alias or interface called 'User' that has the following properties:
     - id: number
     - username: string
     - email: string
     - role: UserRole
     - active: boolean
     - loginDates: Date[]

  3. Create a function called 'createUser' that:
     - Takes all necessary parameters to create a User (except loginDates which should start empty)
     - Returns a User object
     - Use proper parameter and return type annotations

  4. Create a function called 'updateUserRole' that:
     - Takes a User and a new UserRole as parameters
     - Returns the updated User
     - Use union type to allow the function to return either the updated User OR null if the user isn't found

  5. Create an array of Users and demonstrate the usage of your functions

  6. Add a function called 'getUsersWithRole' that:
     - Takes a UserRole parameter
     - Returns an array of Users with that role

7.  Create a function called 'handleError' that:
    - Takes an error message as a parameter
    - Throws an error with that message
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Write your code below:
// 1. Defining an UserRole Enum
var UserRole;
(function (UserRole) {
    UserRole[UserRole["Admin"] = 0] = "Admin";
    UserRole[UserRole["Editor"] = 1] = "Editor";
    UserRole[UserRole["Viewer"] = 2] = "Viewer";
})(UserRole || (UserRole = {}));
var currUserRole = UserRole.Admin;
var user = {
    id: 1,
    username: "john",
    email: "john@example.com",
    role: UserRole.Admin,
    active: true,
    loginDates: [new Date('2024-01-01')]
};
// 3. Create a function to create a user
function createUser(id, username, email, role, active) {
    if (active === void 0) { active = true; }
    return {
        id: id,
        username: username,
        email: email,
        role: role,
        active: active,
        loginDates: []
    };
}
// 4. Create a function to update a user's role
function updateUserRole(user, userRole) {
    user.role = userRole;
    return user;
}
// arrow function version
var updateUserRole2 = function (user, userRole) {
    user.role = userRole;
    return user;
};
// 5. Create an array of Users and demonstrate the usage of your functions
var user1 = createUser(1, "john", "john@example.com", UserRole.Admin);
var user2 = createUser(2, "jane", "jane@example.com", UserRole.Editor);
var users = [user1, user2];
// 6. Create a function to get users  with a specific role
function getUsersWithRole(users, role) {
    return users.filter(function (user) { return user.role === role; });
}
// Arrow function version
var getUsersWithRole2 = function (users, role) {
    return users.filter(function (user) { return user.role === role; });
};
// 7. Note the never keyword (different from void)
// never is used for functions that throw an error or never return anything
function handleError(message) {
    throw new Error("user not found");
}
