const sapper = function (arr) {

  isParamOk(arr);

  const bombArray = findBomb(arr);

  bombArray.forEach(el => {
    arr = calculate(el[0], el[1], arr);
  });

  return arr;
};

const isParamOk = (arr) => {

  if (!Array.isArray(arr)) {
    throwMyError('It is not an array');
  } else if (!arr.length) {
    throw new Error('it is not 2d array');
  } else {
    arr.forEach(el => {
      if (!Array.isArray(el)) {
        throwMyError('Inside array there are not only arrays');
      } else {
        el.forEach((element, index) => {
          if(element !== 0 && element !== 'x'){
            throwMyError(`At least one of incoming values in array is not correct`)
          }
        })
      }
    })
  }
};

const throwMyError = (err) => {
  throw new Error(err);
};

const calculate = (x, y, arr) => {
  for (let i = x - 1; i < x + 2; i++) {
    for (let j = y - 1; j < y + 2; j++) {
      if ((i >= 0 && j >= 0) && (i < arr.length && j < arr[i].length)) {
        if (isNaN(arr[i][j])) {
          continue;
        } else if (x !== i || y !== j) {
          arr[i][j]++;
        }
      }
    }
  }
  return arr;
}


const findBomb = (arr) => {
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (isNaN(arr[i][j])) {
        returnArr.push([i, j]);
      }
    }
  }
  return returnArr;
}

exports.calculate = calculate;
exports.findBomb = findBomb;
exports.sapper = sapper;