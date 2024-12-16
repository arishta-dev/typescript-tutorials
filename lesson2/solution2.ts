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