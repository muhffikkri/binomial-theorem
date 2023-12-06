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
};

// console.log(factorial(2))
// console.log(factorial(1))

/**
 * To calculate combination based on n as all object and r as choosen object
 * @param {Number} number is all object
 * @param {Number} r is choosen object around number
 * @returns {Number} number
 */
const combination = (number, r) => {
  if (number < 0) {
    return "Number can't be negative";
  } else if (r > number) {
    return "r can't be less the number";
  }

  return factorial(number) / (factorial(r) * factorial(number - r));
};

// console.log(combination(4, 0));

/**
 * To expand binomial expression
 * @param {Number} coefficient
 * @returns {Array} contain number every coefficient
 */
const binomialTheorem = (coefficient) => {
  const total = [];

  for (let i = 0; i <= coefficient; i++) {
    count = combination(coefficient, i);
    total.push(count);
  }

  return total;
};

// console.log(binomialTheorem(4));
// console.log(binomialTheorem(10));

// module.export = binomialTheorem;

/**
 * To expand binomial expression every row until the number
 * @param {Number} number
 * @returns {Array} contain every row of coefficient
 */
const expandEveryRow = (number) => {
  const total = [];
  for (i = 0; i <= number; i++) {
    const temp = binomialTheorem(i);
    total.push(temp);
  }
  return total;
};

// console.log(expandEveryRow(1))

/**
 * To formal row
 */
// const formatRow = () => {
//   return `<div class="row"></div>`;
// }

/**
 * To format column
 */
const formatColumn = (number) => {
  return `<div class="col">${number}</div>`;
};

/**
 * To visualize just one row
 */
const visualOneRow = (val) => {};

/**
 * To visualize every row
 */
const visualEveryRow = (val) => {};

/**
 *
 * To visualize one row and every row
 */
const visualization = (arr) => {};

/**
 * To render every change
 * Always clear visual every run
 */
const render = () => {
  const inputNumber = document.querySelector("input[name='inputNumber']");

  // render visual one row
  const outputVisualOneRow = document.querySelector("#visual-one-row");
  outputVisualOneRow.innerHTML = "";
  outputVisualOneRow.innerHTML = visualOneRow(inputNumber.value);

  // render visual every row
  const outputVisualEveryRow = document.querySelector("#visual-every-row");
  outputVisualEveryRow.innerHTML = "";
  outputVisualEveryRow.innerHTML = visualEveryRow(inputNumber.value);
};

const buttonSubmit = document.querySelector("#buttonSubmit");
buttonSubmit.addEventListener("click", render);
