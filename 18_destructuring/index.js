function calcValues(a, b) {
  return [
    a + b,
    a - b
  ]
}

const result = calcValues(42, 10)
console.log(result); // => [52, 32]

const sum = result[0];
const sub = result[1];

const [a, b] = result;

console.log(sum, sub); // => 52 32
console.log(a, b); // => 52 32

const [num1, num2] = calcValues(50, 41);
console.log(num1); // => 91
console.log(num2); // => 9

const arr = [5, 10, 15, 20];
const [c, d, ...other] = arr;
console.log(c); // => 5
console.log(d); // => 10
console.log(other); // => [15, 20]

const arr2 = [1, 2, 3, 4];
const [x, y,,z] = arr2;
console.log(x); // => 1
console.log(y); // => 2
console.log(z); // => 4

const arr3 = [14, 25, undefined, 18];
const [w, r, v = 54] = arr3;
console.log(w); // => 14
console.log(r); // => 25
console.log(v); // => 54

// Object
const person = {
  name: 'Max',
  age: 25,
  address: {
    country: 'Poland',
    city: 'Lodz'
  }
}

const {
  name: personName,
  age,
  car = 'No car here',
  address: { city, country }
} = person;

console.log(personName); // => Max
console.log(age); // => Age
console.log(car); // No car here
console.log(city); // => Lodz
console.log(country); // => Poland

const { name, ...info } = person;
console.log(name); // => Max
console.log(info); // => { age: 25, address: { country: 'Poland', city: 'Lodz' } }

function logPerson({ name, age }) {
  console.log(name, '-', age);
}

logPerson(person) // => Max - 25

let f = 1;
let g = 2;
let h = 4;

[f, g] = [g, f];
[f, g, h] = [h, f, g];

// Computed destructuring
const per = {
  name: 'Fred',
  age: 45,
  work: {
    job: 'Coder'
  }
}

const props = ['name', 'age'];
const { [props[0]]: userName, [props[1]]: userAge } = per;

console.log(userName); // Fred
console.log(userAge); // => 45



