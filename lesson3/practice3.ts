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
