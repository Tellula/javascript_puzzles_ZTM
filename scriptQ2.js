// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the 
// target number. For example: answer([1,2,3], 4)should return [1,3]

let array = [1,2,3];
let targetNumber = 4


const answer = (array, targetNumber) => {
  
  for (let num1 of array) {
    for (let num2 of array) {
      if (num1 + num2 === targetNumber && num1 != num2) {
        numbers = [num1, num2]; 
        return console.log('The answer is : ' , num1, ' + ', num2, ' = ', targetNumber)               
      }
    }
  } 
  
}


answer(array,targetNumber);




// 

