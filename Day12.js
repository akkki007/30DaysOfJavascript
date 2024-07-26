//Activity 1 :
//task 1 :
function intention() {
  throw new Error("Why you called this function....");
}

try {
  intention();
} catch (error) {
  console.log(error);
}
//task 2 :
function divideByZero() {
  let numerator = 10;
  let denominator = 0;
  try {
    if (denominator == 0) {
      throw new Error("Division cannot take place");
    } else {
      return numerator / denominator;
    }
  } catch (error) {
    console.log(error);
  }
}
divideByZero();

//task 3 :
//finally block is executed regardless of the try block result (true or false)

//task 4 : create a custom error class that extends the error class . Throw an instance of this custom error in a function and handle it using try-catch  block
class myClass extends Error {
  constructor(message) {
    super(message);
    this.name = "customerror";
  }
}

function throwError(value) {
  if (value <= 0) {
    throw new myClass("Value must be greater than zero");
  }
  return `the value is ${value}`;
}

try {
  let result = throwError(0);
  console.log(result);
} catch (error) {
  if (error instanceof myClass) {
    console.error(`CustomError caught : ${error.message}`);
  } else {
    console.error(`ANy other errror caught : ${error.message}`);
  }
}

async function myFunc() {
  let response = await fetch(`https://dogapi.dog/api/v2/facts`)
    .then((response) => {
      if (!response.ok) {
        // If the response status is not OK (status code is not in the range 200-299), throw an error
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch(error=>{
        console.log(error);
    })
}
myFunc();
