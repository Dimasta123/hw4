const students = ['Олександр', 'Ігор', 'Олена', 'Іра', 'Олексій', 'Світлана'];
const themes = [
  'Диференційне рівняння',
  'Теорія автоматів',
  'Алгоритми і структури даних',
];
const marks = [4, 5, 5, 3, 4, 5];

function getPairedStudents() {
  return [
    [students[0], students[2]],
    [students[1], students[3]],
    [students[4], students[5]],
  ];
}
console.log(getPairedStudents());

function assignThemes() {
  let count = 0;
  let studentsWithThemes = [];
  for (let student of getPairedStudents()) {
    studentsWithThemes.push([student.join(' і '), themes[count]]);
    count++;
  }
  return studentsWithThemes;
}
console.log(assignThemes());
function makeMarks() {
  let marksof = [];

  for (var i = 0; i < students.length; i++) {
    marksof.push([students[i], marks[i]]);
  }

  return marksof;
}
console.log(makeMarks());
function projectMarks() {
  let pairMarks = [];
  for (var j = 0; j < 3; j++) {
    pairMarks.push(assignThemes([j]), Math.round(Math.random() * 5 + 1));
  }
  return pairMarks;
}
console.log(projectMarks());
