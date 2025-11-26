let students = [
  { name: "smith", rollNumber: 31, marks: 80 },
  { name: "jenny", rollNumber: 15, marks: 69 },
  { name: "john", rollNumber: 16, marks: 35 },
  { name: "tiger", rollNumber: 7, marks: 55 },
];

let topScorers = students.filter((student) => student.marks > 60);
console.log(topScorers.map((student) => student.name));