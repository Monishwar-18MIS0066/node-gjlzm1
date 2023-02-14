const students = [
  {
    name: "John",
    chemistryMarks: 80,
    biologyMarks: 90,
    dateOfBirth: "01-01-2000"
  },
  {
    name: "Mary",
    chemistryMarks: 90,
    biologyMarks: 80,
    dateOfBirth: "02-02-2001"
  },
  {
    name: "Leo Messi",
    dob: "31-12-1995",
    biology: 95,
    chemistry: 91,
  }
];

// comparison function for sorting
function compareStudents(studentA, studentB) {
  // compare by total marks
  if (studentB.chemistryMarks + studentB.biologyMarks !== studentA.chemistryMarks + studentA.biologyMarks) {
    return studentB.chemistryMarks + studentB.biologyMarks - (studentA.chemistryMarks + studentA.biologyMarks);
  }
  // compare by biology marks
  if (studentB.biologyMarks !== studentA.biologyMarks) {
    return studentB.biologyMarks - studentA.biologyMarks;
  }
  // compare by date of birth
  return new Date(studentA.dateOfBirth) - new Date(studentB.dateOfBirth);
}

// sort the array of student objects using the comparison function
students.sort(compareStudents);

// the sorted array of student objects
console.log(students);

