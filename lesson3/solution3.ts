// 1. Defining an UserRole Enum
enum UserRole {
    Admin, 
    Editor, 
    Viewer
}

let currUserRole: UserRole = UserRole.Admin;

// 2. Defining a user Interface
interface User {
    id: number;
    username: string;
    email: string;
    role: UserRole;
    active: boolean;
    loginDates: Date[];
}

let user: User = {
    id: 1, 
    username: "john", 
    email: "john@example.com", 
    role: UserRole.Admin, 
    active: true, 
    loginDates: [new Date('2024-01-01')]
}


// 3. Create a function to create a user

function createUser(id: number, username: string, email: string, role: UserRole, active: boolean = true): User { // active is optional and defaults to true
    return {
        id, 
        username, 
        email, 
        role, 
        active,
        loginDates: []
    } // this is the shorthand mapping notation (used when the property name is same as the variable name)
    // you can only use this notation when the variables name are same
    // Alternate way 
    /*
    return {id: id, username: username, email: email, role: role, active: active, loginDates: loginDates};
    */
}

// 4. Create a function to update a user's role
function updateUserRole(user: User, userRole: UserRole): User | null {
    user.role = userRole; // Dot notation (more common, can be used when you know the exact name of the property)
    // user['role] = userRole // Bracket notation  (used when the property name is dynamic, for eg. when the property name is computed at runtime)
    return user;
}

// arrow function version
let updateUserRole2 = (user: User, userRole: UserRole): User | null => {
    user.role = userRole;
    return user;
}

// 5. Create an array of Users and demonstrate the usage of your functions

let user1: User = createUser(1, "john", "john@example.com", UserRole.Admin);
let user2: User = createUser(2, "jane", "jane@example.com", UserRole.Editor);

let users: User[] = [user1, user2];

// 6. Create a function to get users  with a specific role

function getUsersWithRole(users: User[], role: UserRole): User[] {
    return users.filter(user=>user.role === role);
}

// Arrow function version
let getUsersWithRole2 = (users:User[], role: UserRole):User[] =>{
    return users.filter(user=>user.role === role);
}

// 7. Note the never keyword (different from void)
// never is used for functions that throw an error or never return anything
function handleError(message: string): never {
    throw new Error("user not found");
}

export {};