const array = [0, 1, 2, 3, 4, 5];

const arr = array.reduce((acc, cur, index) => {
  console.log('index', index); // from 1 not 0
  return acc + cur;
})

console.log(arr); // => 15

//////////////////////////////////////////////////////////////////////////

const arr2 = array.reduce((acc, cur, index) => {
  console.log('index', index); // From 0 not 1
  console.log(acc);
  console.log(cur);
  return acc + cur;
}, 10)

console.log('arr2', arr2); // => 25

///////////////////////////////////////////////////////////////////////////

const sum = [{ x:1 }, { x:2 }, { x: 3 }].reduce((acc, cur) => {
  return acc + cur.x;
}, 0)

console.log('SUM', sum);

///////////////////////////////////////////////////////////////////////////

const flatten = [[0, 1], [2, 3], [4, 5]].reduce((acc, cur) => {
  return acc.concat(cur);
})

console.log('flatten', flatten); // => [ 0, 1, 2, 3, 4, 5 ]

//////////////////////////////////////////////////////////////////////////

const names = ['Alice', 'Ted', 'Alice', 'Tom', 'Tom', 'Bill'];

const countedNames = names.reduce((allNames, name) => {
  if (name in allNames) {
    allNames[name]++;
  } else {
    allNames[name] = 1
  }
  return allNames;
}, {});

console.log('countedNames', countedNames); // => countedNames { Alice: 2, Ted: 1, Tom: 2, Bill: 1 }

///////////////////////////////////////////////////////////////////////////

const people = [
  { name: 'Alice', age: 21 },
  { name: 'Tom', age: 21 },
  { name: 'Ted', age: 20 },
  { name: 'Rick', age: 21 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce((acc, cur) => {
    let key = cur[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(cur);
    return acc;
  })
}

console.log(groupBy(people, 'age'));
/**
 * {
      '20': [ { name: 'Ted', age: 20 } ],
      '21': [ { name: 'Tom', age: 21 }, { name: 'Rick', age: 21 } ],
      name: 'Alice',
      age: 21
  }
 */

//////////////////////////////////////////////////////////////////////////////

const friends = [
  { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
  { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
  { name: 'Alice', books: ['The Lord of the Rings', 'The Shining'], age: 18 }
];

const allBooks = friends.reduce((acc, cur) => {
  return [...acc, ...cur.books]
}, ['Alphabet'])

console.log('allBooks', allBooks); // =>
/**
 * allBooks [ 'Alphabet','Bible','Harry Potter','War and peace','Romeo and Juliet','The Lord of the Rings','The Shining' ]
 */

////////////////////////////////////////////////////////////////////////////////

const doubleArr = [1, 2, 1, 2, 3, 5, 4, 5, 3, 4, 4, 4, 4];
const result = doubleArr.sort().reduce((acc, cur) => {
  const length = acc.length
  if (length === 0 || acc[length - 1] !== cur) {
    acc.push(cur);
  }
  return acc;
}, []);

console.log(result); // => [1, 2, 3, 4, 5]

///////////////////////////////////////////////////////////////////////////////
