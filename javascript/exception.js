function setTime(){
    const header = document.getElementById("header");
    header.textContent = new Date().toString();
}

setInterval(setTime, 1000);
console.log("Program Finish")


function divideNumbers(a, b) {
    try {
    
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Both inputs must be numbers');
      }
      
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
  
      return a / b;
    } catch (error) {
      
      console.error(error.message);
    }
  }
  
  console.log(divideNumbers(10, 2)); 
  console.log(divideNumbers(10, 0));  
  console.log(divideNumbers(10, 'a'));
  console.log(divideNumbers('a', 'b'));
  

function multiply(a, b) {
    return a * b;  
  }
  
  console.log(multiply(2, 3));  // 6
  console.log(multiply(9, 9));  // 81
  console.log(multiply(5, 4));  // 20
  

const sayHello = name => `Hello ${name}!`;


console.log(sayHello("Hagrid")); 
console.log(sayHello("Luna"));   
