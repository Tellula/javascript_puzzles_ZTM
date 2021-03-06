// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], 
// make a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


let arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
let arr2 = [1, 1,"2","2", "3", 2];

function answer(array) {
  
  
  let sortedArray = array.sort((a, b) => a - b);
  // console.log(sortedArray);
  let sortedNumArray = sortedArray.filter(function (item) {
    return typeof item === 'number' 
  });
  // console.log('sorted num array', sortedNumArray);

  let sortedStringArray = sortedArray.filter(function (item) {
    return typeof item === 'string' 
  });
  // console.log('sorted string array', sortedStringArray);

  let finalNumArray = [];
  
  let duplicatesTempArray = [];
  
  for (let i = 0; i < array.length; i++) {

    if (sortedNumArray[i] === sortedNumArray[i + 1]) {
      duplicatesTempArray.push(sortedNumArray[i]);

    } else if (sortedNumArray[i] === sortedNumArray[i - 1]) {
      duplicatesTempArray.push(sortedNumArray[i]);
      finalNumArray.push(duplicatesTempArray);
      duplicatesTempArray = [];

    } else if (sortedNumArray[i] !== sortedNumArray[i + 1]) {
      finalNumArray.push(sortedNumArray[i]);
    }
  }

  let finalArray = [];

  if (sortedStringArray.length === 0) {
    finalArray = finalNumArray;
  } else {
    finalArray.push( finalNumArray, sortedStringArray);
  }

  console.log('end array', finalArray);
}

answer(arr);
answer(arr2);


