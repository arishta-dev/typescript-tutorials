// PRACTICE ASSIGNMENT 2: Types in TypeScript

/* 
Task 1: Create a Student Type
- Create a type for a Student with the following properties:
  - name (string)
  - age (number)
  - isEnrolled (boolean)
  - grades (array of numbers)
  - contact (tuple with email and phone number)
*/

/* 
Task 2: Create a Course Type
- Create a type for a Course with:
  - courseId (string)
  - courseName (string)
  - instructor (string)
  - maxStudents (number)
  - isOnline (boolean)
*/


/* 
Task 3: Create an Enum for Academic Years
- Create an enum called AcademicYear with values:
  - Freshman
  - Sophomore
  - Junior
  - Senior
*/


/* 
Task 4: 
- Create a type called CourseGrade that can be either:
  - A letter grade (string): "A", "B", "C", "D", "F" (union type)
  - A number grade (number): 0-100
*/

/* 
Task 5: Combine Types
- Create an intersection type called EnrolledStudent that combines:
  - Student type (from Task 1)
  - Additional properties:
    - studentId (string)
    - year (AcademicYear from Task 3)
*/