//Review JavaScript Fundamentals by Building a Gradebook App

//STEP 1
function getAverage(scores) {
  let average = 0
  for (let i = 0; i < scores.length; i++) {
    average += scores[i]
} 
  return average / scores.length 
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

//STEP 2
function getGrade(score) {
  let grade
  if (score === 100) {
    grade = "A++";
  } else if (score >= 90 && score <= 99) {
    grade = "A";
  } else if (score >= 80 && score <= 89) {
    grade = "B";
  } else if (score >= 70 && score <= 79) {
    grade = "C";
  } else if (score >= 60 && score <= 69) {
    grade = "D";
  } else {
    grade = "F"
  }
  return grade
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));

//STEP 3
function hasPassingGrade(score) {
  const grade = getGrade(score)
  
  if (grade !== "F") {
    return true 
  } else {
    return false
  }
}

console.log(hasPassingGrade(100));
console.log(hasPassingGrade(53));
console.log(hasPassingGrade(87));

//STEP 4
function studentMsg(totalScores, studentScore) {
  let total = getAverage(totalScores)
  let student = getGrade(studentScore)
  if (hasPassingGrade(studentScore)) {
    return "Class average: " + total +". Your grade: " + student +". You passed the course.";
  } else {
    return "Class average: " + total +". Your grade: " + student +". You failed the course.";
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
