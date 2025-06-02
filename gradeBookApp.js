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
