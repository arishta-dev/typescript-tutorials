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
Task 4: Create a Union Type
- Create a type called CourseGrade that can be either:
  - A letter grade (string): "A", "B", "C", "D", "F"
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


// Task 1 
type Student = {
    name: string;
    age: number;
    isEnrolled: boolean;
    grades: number[];
    contact: [string, number];
}


// Task 2
type Course = {
    courseId: string;
    courseName: string;
    instructor: string;
    maxStudents: number;
    isOnline: boolean;
}

// Task 3
enum AcademicYear {
    Freshman, 
    Sophomore, 
    Junior, 
    Senior
}

type enrolledStudent = AcademicYear.Freshman;

// Task 4 
type CourseGrade = {
    letterGrade: ["A" | "B" | "C" | "D" | "F"];
    numberGrade: number;
}

// Task 5 
type EnrolledStudent = Student & {
    studentId: string;
    year: AcademicYear;
} // includes both Student and AcademicYear types properties 

const enrolledStudent: EnrolledStudent = {
    name: "John",
    age: 20,
    isEnrolled: true,
    grades: [90, 80, 70],
    contact: ["john@example.com", 1234567890],
    studentId: "12345",
    year: AcademicYear.Freshman
}

export {};

// Union type allows Either property A or property B 
// Intersection type allows both properties A and B 