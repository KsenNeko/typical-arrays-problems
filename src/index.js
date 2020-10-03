function min(arr) {
  if (arr.length > 0) {
    let minimum = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (minimum > arr[i]) {
        minimum = arr[i];
      }
    }
    return minimum;
  } else return 0;
}

function max(arr) {
  if (arr.length > 0) {
    let maximum = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (maximum < arr[i]) {
        maximum = arr[i];
      }
    }
    return maximum;
  } else return 0;
}

function avg(arr) {
  if (arr.length > 0) {
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
      average += arr[i];
    }
    return average / arr.length;
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
