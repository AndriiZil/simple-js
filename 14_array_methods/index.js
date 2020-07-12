const peoples = [
  { id: 1, name: 'Vlad', age: 25, budget: 40000 },
  { id: 2, name: 'Dima', age: 27, budget: 3500 },
  { id: 3, name: 'Erica', age: 32, budget: 7000 },
  { id: 4, name: 'Monica', age: 29, budget: 36000 },
  { id: 5, name: 'Tatiana', age: 31, budget: 12500 }
];

// for (let i = 0; i < peoples.length; i++) {
//   console.log('FOR: ', peoples[i]);
// }
//
// for (let people of peoples) {
//   console.log('FOR OF: ', people);
// }

// ForEach
// peoples.forEach((people, index, arr) => {
//   if (people.age > 30) {
//     console.log('INDEX ', index);
//     console.log('ARR ', arr);
//     console.log('FOR EACH: ', people);
//   }
// })

// Map
const persons = peoples.map((people) => {
  return {
    personName: people.name,
    personAge: people.age
  }
})

// Filter
const oldPersons = peoples.filter(p => p.age > 30)
console.log('OLD', oldPersons); // =>
/**
 * [
     { id: 3, name: 'Erica', age: 32, budget: 7000 },
     { id: 5, name: 'Tatiana', age: 31, budget: 12500 }
    ]
 */

// Reduce
const totalBudget = peoples.reduce((acc, cur) => acc + cur.budget, 0);
console.log('TOTAL BUDGET', totalBudget); // => TOTAL BUDGET 99000

// Find
const finded = peoples.find(p => p.name === 'Monica')
console.log('FINDED', finded); // => { id: 4, name: 'Monica', age: 29, budget: 36000 }

// FindIndex
const dima = peoples.findIndex(p => p.name === 'Dima')
console.log('DIMA', dima); // => 1

// Every
const everyResult = peoples.every(p => p.age < 40)
console.log('EVERY RESULT', everyResult); // => true

// Some
const someResult = peoples.some(p => p.name > 'Elena')
console.log('SOME RESULT', someResult); // => SOME RESULT true

const amount = peoples
  .filter(p => p.budget > 5000)
  .map(p => {
    return {
      id: p.id,
      info: `NAME ${p.name}, AGE: ${p.age}`,
      budget: p.budget
    }
  })
  .reduce((acc, cur) => acc + cur.budget, 0)

console.log('AMOUNT', amount); // => AMOUNT 95500
