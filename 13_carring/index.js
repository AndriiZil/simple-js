function multiply(a, b, c) {
  return a * b * c;
}

console.log(multiply(1, 2, 3)); // => 6

function multiplyCarr(a) {
  return (b) => {
    return (c) => {
      return a * b * c;
    }
  }
}

console.log(multiplyCarr(1)(2)(3)); // => 6

function volume(l, w, h) {
  return l * w * h;
}

const aCylinder = volume(100, 20, 90);

console.log(aCylinder); // => 180 000

function volumeCarr(l) {
  return function (w) {
    return function (h) {
      return l * w * h;
    }
  }
}

console.log(volumeCarr(100)(20)(90)); // => 180 000
