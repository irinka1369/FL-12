<<<<<<< HEAD

function makeNumber(string) {
    return string
      .split('')
      .filter(item => !isNaN(item))
      .join('');
  }
  
  function countNumbers(string) {
      let object = {};
      let numberOfString = makeNumber(string);
      
      for (let num of numberOfString) {
          if (!(num in object)) {
              object[num] = 1;
          } else {
              object[num] += 1;
          }
      }
  
      return object;
  }
  countNumbers('ghy578hvs3567990gfffd');
=======
function makeNumber(string) {
  return string
    .split('')
    .filter(item => !isNaN(item))
    .join('');
}

function countNumbers(string) {
    let object = {};
    let numberOfString = makeNumber(string);
    
    for (let num of numberOfString) {
        if (!(num in object)) {
            object[num] = 1;
        } else {
            object[num] += 1;
        }
    }

    return object;
}
countNumbers('ghy578hvs3567990gfffd');
>>>>>>> a6464a3b671691a32426d895966deb30585df402
