function getCommonElements(array1, array2) {
    // Change code below this line
  
    const elements = [];
  
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        elements.push(array1[i]);
      }
    }
  
    return elements;
  
   // Change code above this line
  }