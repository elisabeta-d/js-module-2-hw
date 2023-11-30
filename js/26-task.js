function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  
    for (let variable of order) {
      total += variable;
    }
    
    console.log(total);
  
    // Change code above this line
    return total;
  }
