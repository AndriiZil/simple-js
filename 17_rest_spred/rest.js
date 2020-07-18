// Rest operator
function sum(a, b, ...rest) {
  console.log(rest); // => [3, 4, 5]
  return a + b;
}

const num = [1, 2, 3, 4, 5]
console.log(sum(...num)); // => Spread => 3

const [a, b, ...rest] = num
console.log(a); // => 1
console.log(b); // => 2
console.log(rest); // => [3, 4, 5]

const person = {
  name: 'Max',
  age: 20,
  city: 'Moscow',
  country: 'Russia'
}

const { name, age, ...address } = person;
console.log(name); // Max
console.log(age); // 20

console.log(address); // => { city: 'Moscow', country: 'Russia' }
