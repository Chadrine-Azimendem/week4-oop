/* =================== activities regarding Scopes and Higher Order Functions ==================== */

// activity1:

// returns the string "Hello Codenation".
let greetCodeNation = () => {
  let myGreeting = "Hello Codenation";
  return myGreeting;
};

//Log greetting to the console 5 times
let greetFiveTimes = (greetting) => {
  for (let i = 0; i < 5; i++) {
    console.log(greetting);
  }
};

// calls the function greetFiveTimes with greetCodeNation() as parameter.
greetFiveTimes(greetCodeNation());

// activity2:

//Declares a variable with five numbers.
let numbArray = [200, 100, 3, 50, 5];

//maps through the numbArray and multiply each item by 3.
let triple = numbArray.map((num) => {
  return num * 3;
});

// logs triple to the console.
console.log(triple);

// activity3: Test the function

//add returns additon of two numbers
const add = (a, b) => {
  return a + b;
};

//subtracts
const subtract = (a, b) => {
  return a - b;
};

//multiplies
const multiply = (a, b) => {
  return a * b;
};

// divides
const divide = (a, b) => {
  return a / b;
};

const doMaths = (num1) => {
  return (num2, fn) => {
    return fn(num1, num2);
  };
};

// tests the doMaths function.
console.log(doMaths(6)(6, add)); //logs 12 to the console
console.log(doMaths(6)(6, subtract)); //logs 0 to the console
console.log(doMaths(6)(6, multiply)); //logs 36 to the console
console.log(doMaths(6)(6, divide)); //logs 1 to the console
