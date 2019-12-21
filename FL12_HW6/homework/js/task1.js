const a = +prompt("Please enter number");
const b = +prompt("Please enter number");
const c = +prompt("Please enter number");
const discr = b * b - 4 * a * c;
const discrSqrt = Math.sqrt(discr);

if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0 || b === 0 || c === 0 ) {
  alert("You have entered invalid data");
} else {
  if (discr < 0) {
    console.log("Sorry, no solution");
  } else if (discr === 0) {
    let x = Math.round(-b / (2 * a));
    console.log(`x = ${x}`);
  } else {
    let x1 = Math.round(-b - discrSqrt / (2 * a));
    let x2 = Math.round(-b + discrSqrt / (2 * a));
    console.log(`x1 = ${x1} and x2 = ${x2}`);
  }
}
