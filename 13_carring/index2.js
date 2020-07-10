function volume(l) {
  return function (w, h) {
    return l * w * h;
  }
}

const hCy = volume(70);

console.log(hCy(203, 142)); // => 2017820
console.log(hCy(220, 122)); // => 1878800

console.log(volume(70)(203, 42)); // => 596820

function discount(price, discount) {
  return price * discount;
}

console.log(discount(500, 0.1)); // => 50

function currDiscount(discount) {
  return function (sum) {
    return sum * discount;
  }
}

const tenPercentDiscount = currDiscount(0.1);

console.log(tenPercentDiscount(250)); // => 25

const twentyPercentDiscount = currDiscount(0.2);

console.log(twentyPercentDiscount(1200)); // => 240
