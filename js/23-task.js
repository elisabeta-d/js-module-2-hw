function filterArray(numbers, value) {
    // Change code below this line
   const maxNumbers = [];
 
   for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] > value) {
       maxNumbers.push(numbers[i]);
     }
 }
   
     return maxNumbers;
   // Change code above this line
 }