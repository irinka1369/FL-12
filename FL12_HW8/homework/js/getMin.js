function getMin() {
  let smallest = arguments[0];
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < smallest) {
      smallest = arguments[i];
    }
  }
  return smallest;
}
getMin(1, 3, 5, 7);
