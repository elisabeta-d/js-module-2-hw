function calculateEngravingPrice(message, pricePerWord) {
    // Change code below this line
 
   const words = message.split(' ');
 
   let count = 0;
   for (let i = 0; i < words.length; i++) {
     if (words[i] !== ' ') {
       count++;
     }
   }
 return count * pricePerWord;
   console.log(count);
 
    // Change code above this line
 }
 
