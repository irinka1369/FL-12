function makeNumber(string) {
  return string
    .split('')
    .filter(item => !isNaN(item))
    .join('');
}
makeNumber('amjg555kgmboo000');

