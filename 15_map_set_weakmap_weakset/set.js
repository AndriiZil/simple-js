const set = new Set([1, 2, 3, 1, 2, 4, 5, 5, 6, 6, 6]);
console.log(typeof set); // => object
console.log(set); // Set { 1, 2, 3, 4, 5, 6 }

set.add(10).add(20).add(30)
console.log(set); // => Set { 1, 2, 3, 4, 5, 6, 10, 20, 30 }
console.log(set.has(20)); // => true
console.log(set.has(42)); // => false
console.log(set.size); // => 9
console.log(set.delete(30)); // => true
console.log(set.delete(52)); // => false
console.log(set.clear()); // => undefined
console.log(set); // => Set {}

const set2 = new Set([1, 2, 3, 3, 4, 4, 5])
console.log(set2); // => Set { 1, 2, 3, 4, 5 }
console.log(set2.values()); // => [Set Iterator] { 1, 2, 3, 4, 5 }
console.log(set2.keys()); // => [Set Iterator] { 1, 2, 3, 4, 5 }
console.log(set2.entries()); // => [Set Entries] { [ 1, 1 ], [ 2, 2 ], [ 3, 3 ], [ 4, 4 ], [ 5, 5 ] }

for (let key of set2) {
  console.log('key', key);
}
/**
 * key 1
   key 2
   key 3
   key 4
   key 5
 */

const arr = [1, 1, 1, 2, 2, 3, 4, 5, 4, 5]
function uniqValues(array) {
  // return [... new Set(array)]; // the same
  return Array.from(new Set(array));
}

console.log(uniqValues(arr)); // => [ 1, 2, 3, 4, 5 ]
