const obj = {
  name: 'Vladislav',
  age: 26,
  job: 'Fullstack'
}

const entries = [
  ['name', 'Vladislav'],
  ['age', 26],
  ['job', 'Fullstack']
]

console.log(Object.entries(obj)); // => [ [ 'name', 'Vladislav' ], [ 'age', 26 ], [ 'job', 'Fullstack' ] ]
console.log(Object.fromEntries(entries)); // => { name: 'Vladislav', age: 26, job: 'Fullstack' }

const map = new Map(entries)
console.log(map); // => Map { 'name' => 'Vladislav', 'age' => 26, 'job' => 'Fullstack' }
console.log(map.get('job')); // => Fullstack

map
  .set('newField', 42)
  .set(obj, 'Value of obj')
  .set(NaN, 'NaN ??')

console.log(map.get(obj)); // => Value of obj
console.log(map.get(NaN)); // => NaN ??

console.log(map.delete('job')); // => true
console.log(map.has('job')); // => false

console.log(map.size); // => 5
// map.clear()
console.log(map.size); // => 0 after clear

console.log('===1===');

for (let entry of map.entries()) {
  console.log('ENTRY', entry);
  /**
   * ENTRY [ 'name', 'Vladislav' ]
     ENTRY [ 'age', 26 ]
     ENTRY [ 'newField', 42 ]
     ENTRY [ { name: 'Vladislav', age: 26, job: 'Fullstack' }, 'Value of obj' ]
     ENTRY [ NaN, 'NaN ??' ]
   */
}

console.log('===2===');

for (let [key, value] of map) {
  console.log('Key', key);
  console.log('Value', value);
  /**
   * Key name
     Value Vladislav
     Key age
     Value 26
     Key newField
     Value 42
     Key { name: 'Vladislav', age: 26, job: 'Fullstack' }
     Value Value of obj
     Key NaN
     Value NaN ??
   */
}

console.log('===3===');

for (let val of map.values()) {
  console.log('VALUE', val);
}
/**
 * VALUE Vladislav
   VALUE 26
   VALUE 42
   VALUE Value of obj
   VALUE NaN ??
 */

console.log('===4===');

for (let key of map.keys()) {
  console.log('KEY', key);
}
/**
 * KEY name
   KEY age
   KEY newField
   KEY { name: 'Vladislav', age: 26, job: 'Fullstack' }
   KEY NaN
 */

console.log('===5===');

map.forEach((val, key, m) => {
  console.log('VAL', val, 'KEY', key);
})
/**
 * VAL Vladislav KEY name
   VAL 26 KEY age
   VAL 42 KEY newField
   VAL Value of obj KEY { name: 'Vladislav', age: 26, job: 'Fullstack' }
   VAL NaN ?? KEY NaN
 */

console.log('===6===');

const array = [...map]
console.log('array', array);

const array2 = Array.from(map);

console.log('array2', array2);

/**
 * array [
       [ 'name', 'Vladislav' ],
       [ 'age', 26 ],
       [ 'newField', 42 ],
       [ { name: 'Vladislav', age: 26, job: 'Fullstack' }, 'Value of obj' ],
       [ NaN, 'NaN ??' ]
     ]
     array2 [
       [ 'name', 'Vladislav' ],
       [ 'age', 26 ],
       [ 'newField', 42 ],
       [ { name: 'Vladislav', age: 26, job: 'Fullstack' }, 'Value of obj' ],
       [ NaN, 'NaN ??' ]
    ]
 */

console.log('===7===');

const mapObj = Object.fromEntries(map.entries())
console.log('mapObj', mapObj);

/**
 * mapObj {
    name: 'Vladislav',
    age: 26,
    newField: 42,
    '[object Object]': 'Value of obj',
    NaN: 'NaN ??'
  }
 */

console.log('===8===');

const users = [
  { name: 'Elena' },
  { name: 'Alex' },
  { name: 'Irina' },
]

const visits = new Map();

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 1000 * 60))
  .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
  return visits.get(user)
}

console.log(lastVisit(users[0])); // 2020-07-14T17:00:06.036Z
console.log(lastVisit(users[1])); // 2020-07-14T17:01:06.036Z
console.log(lastVisit(users[2])); // 2020-07-14T17:05:06.036Z
