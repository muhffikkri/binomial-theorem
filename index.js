/**
 * times n to n-1, n-2, ... 2, 1
 * @param {Number} number 
 * @returns {Number} number
 */

const factorial = (number) => {
  if (number === 0) {
    return 1;
  } else if (number < 0) {
    return "Number can't be negative";
  } else {
    return number * factorial(number - 1);
  }
}

console.log(factorial(2))
console.log(factorial(1))


/**
 * To calculate combination based on n as all object and r as choosen object
 * @param {Number} number is all object
 * @param {Number} r is choosen object around number
 * @returns {Number} number 
 */

const combination = (number, r) => {
    if(number < 0) {
        return "Number can't be negative";
    } else if(r > number) {
        return "r can't be less the number"
    }
    
    return factorial(number) / (
            factorial(r) * factorial (number - r)
        );
}

console.log(combination(4, 0));


/** 
 * To expand binomial expression
 * @param {Number} coefficient The Integer
 * @returns {Number} number
 */

const binomialTheorem = (coefficient) => {
    const total = []
    
    for (let i = 0; i <= coefficient; i++) {
        count = combination(coefficient, i);
        total.push(count);
    }

    return total;
}

console.log(binomialTheorem(4));
console.log(binomialTheorem(10));

// module.export = binomialTheorem;

const data = binomialTheorem(5);
console.log(data);

const inputNumber = document.querySelector("input[name='inputNumber']");
const buttonSubmit = document.querySelector("#buttonSubmit");

buttonSubmit.addEventListener("click", render);

console.log(inputNumber);

const visualization = (arr) => {};
console.log("tes");
const render = () => {
  console.log("yes");
  console.log(data);
};