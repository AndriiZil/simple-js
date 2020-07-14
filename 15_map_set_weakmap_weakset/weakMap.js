let obj = { name: 'weakmap' };

// const arr = [obj]

// obj = null;

// console.log(obj); // => null
// console.log(arr[0]); // => { name: 'weakmap' }

const map = new WeakMap([
  [obj, 'obj data']
])

obj = null // change has to false

// get | set | delete | has
console.log(map.has(obj)); // => true
console.log(map.has(obj)); // => false

console.log(map); // WeakMap { <items unknown> }

const cache = new WeakMap();

function cacheUser(user) {
  if (!cache.get(user)) {
    cache.set(user, Date.now())
  }
  return cache.get(user);
}

let lena = { name: 'Elena' };
let alex = { name: 'Alex' };

cacheUser(lena);
cacheUser(alex);

lena = null;

console.log(cache.has(lena)); // => false
console.log(cache.has(alex)); // => true
