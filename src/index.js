function min(array) {
  if (array.length > 0) {
    let minimum = array[0];
    for (let i = 0; i < array.length; i++) {
      if (minimum > array[i]) {
        minimum = array[i];
      }
    }
    return minimum;
  } else return 0;
}

function max(array) {
  if (array.length > 0) {
    let maximum = array[0];
    for (let i = 0; i < array.length; i++) {
      if (maximum < array[i]) {
        maximum = array[i];
      }
    }
    return maximum;
  } else return 0;
}

function avg(array) {
  if (array.length > 0) {
    let average = 0;
    for (let i = 0; i < array.length; i++) {
      average += array[i];
    }
    return average / array.length;
  } else return 0;
}


exports.min = function min (array) {
  return 0;
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
