// have access to students from data.js

const updatedStudents = students.map(function(student) {
   // console.log(student)
student.role = 'student'
return student
})
 //console.log(updatedStudents)

 const highScores = students.filter(function(student) {
   // if(student.score >= 80)
    //return student
    return student.score >= 80 // this is related to a truthy and falsy return statement, which is a key part of the filter method

 })
 console.log(highScores)

 const specificId = students.find(function(student) {
    return student.id === 3
 })
 console.log(specificId)

 const averageScore = students.reduce(function(total, individual){
    console.log(total)
    return total + individual.score
}, 0) / students.length //always remember to set what number to start on '0' for example
console.log(averageScore)

const survey = students.reduce(function(survey, student) { // first parameter is what we're returning(total, survey etc) and the second is just the individual item.
  // console.log(student.favouriteSubject)
  const favSubject = student.favouriteSubject
  survey[favSubject] = 'random value'
   return survey
}, {})

console.log(survey)

