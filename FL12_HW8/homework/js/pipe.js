function addOne(x) {
  return x + 1;
}

function pipe(y) {
  for (let i = 1; i < arguments.length; i++) {
    let number = arguments[i];
    y = number(y);
  }
  return y;
}
pipe(5, addOne, addOne);
