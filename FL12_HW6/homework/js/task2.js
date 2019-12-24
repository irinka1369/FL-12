const a = +prompt('Please enter triangle side length');
const b = +prompt('Please enter triangle side length');
const c = +prompt('Please enter triangle side length');

if (isNaN(a) || isNaN(b) || isNaN(c)) {
  alert('Input values should be ONLY numbers ');
} else if (a === 0 || b === 0 || c === 0) {
  alert('Our triangle must have 3 sides with a positive definite length.');
} else if (!(a + b > c && a + c > b && b + c > a)) {
  console.log('Triangle doesn’t exist');
} else if (a === b && b === c && a === c) {
  console.log('It is an equilateral triangle');
} else if (a === b || b === c || a === c) {
  console.log('It is an isosceles triangle');
} else {
  console.log('It is a scalene triangle');
}
