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
console.log(map.size); // => 0

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

for (let [key, value] of map.entries()) {
  console.log('Key', key);
  console.log('Value', value);
  /**
   * ENTRY [ 'name', 'Vladislav' ]
   ENTRY [ 'age', 26 ]
   ENTRY [ 'newField', 42 ]
   ENTRY [ { name: 'Vladislav', age: 26, job: 'Fullstack' }, 'Value of obj' ]
   ENTRY [ NaN, 'NaN ??' ]
   */
}
