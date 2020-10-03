function min() {
  if (arguments.length > 0) {
    let minimum = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
      if (minimum > arguments[i]) {
        minimum = arguments[i];
      }
    }
    return minimum;
  } else return 0;
}

function max() {
  if (arguments.length > 0) {
    let maximum = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
      if (maximum < arguments[i]) {
        maximum = arguments[i];
      }
    }
    return maximum;
  } else return 0;
}

function avg() {
  if (arguments.length > 0) {
    let average = 0;
    for (let i = 0; i < arguments.length; i++) {
      average += arguments[i];
    }
    return average / arguments.length;
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
