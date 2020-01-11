function convert(...args) {
  let arr = [];
  for (let i = 0; i < args.length; i++) {
    let input = args[i];
    if (typeof input === 'string') {
      arr[i] = parseInt(input);
    } else {
      arr[i] = input + '';
    }
  }
  return arr;
}

function executeForEach(arr, func) {
  for (let i of arr) {
    func(i);
  }
}

function mapArray(arr, func) {
  let newArr = [];
  executeForEach(arr, function(el) {
    newArr.push(func(+el));
  });

  return newArr;
}

function filterArray(arr, func) {
  let newArr = [];
  executeForEach(arr, function(el) {
    if (func(el)) {
      newArr.push(el);
    }
  });
  return newArr;
}

function flipOver(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function makeListFromRange(arr) {
  let newArr = [];
  for (let i = arr[0]; i <= arr[arr.length - 1]; i++) {
    newArr.push(i);
  }
  return newArr;
}

function getArrayOfKeys(arr, keyName) {
  let newArr = [];
  executeForEach(arr, function(el) {
    newArr.push(el[keyName]);
  });
  return newArr;
}

function substitute(arr) {
  const lowerNumber = 30;
  return mapArray(arr, function(el) {
    if (el < lowerNumber) {
      return '*';
    }
    return el;
  });
}

function getPastDay(date, daysBefore) {
  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - daysBefore);
  return dateCopy.getDate();
}

function formatDate(date) {
  function addZeroe(n) {
    const numberNine = 9;
    if (n <= numberNine) {
      return '0' + n;
    }
    return n;
  }
  return (
    `${date.getFullYear()}/${date.getMonth() + 1}/${addZeroe(date.getDate())} ` + 
     `${addZeroe(date.getHours())}:${addZeroe(date.getMinutes())}`
  );
}
