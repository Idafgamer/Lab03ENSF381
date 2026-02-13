// Ex A
const classRoster = ["Alice", "Tom", "Charlie", "Diana", "Evan"];

console.log(classRoster.toString());
console.log(classRoster);

classRoster.push("Fiona", "Nancy");
classRoster.shift(); // remove first

console.log(classRoster);
console.log("Length of array: ", classRoster.length);


// Ex B
// B1
let classInfo = {
    className: 'ENSF381: Full-Stack Web Development',
    instructor: 'Dr. Smith',
    students: classRoster,
    details: { semester: 'Winter', year: 2025 }
}

// B2
classInfo.schedule = ['Monday', 'Wednesday', 'Friday'];

// B3
classInfo.instructor = 'Dr. Abdellatif';

// B4
console.log(classInfo.className);
console.log(classInfo.instructor);
console.log(classInfo.students);

// B5
console.log(classInfo.details.semester);

// B6
console.log(classInfo);

// B7
let { className, students } = classInfo;
console.log(className);
console.log(students);

// B8
let { semester, year } = classInfo.details;
console.log(semester);
console.log(year);

// B9, 10, 11
let [ student1, student2, ...remainingStudents ] = students;
console.log(student1);
console.log(student2);
console.log(remainingStudents);