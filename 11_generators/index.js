function* strGenerator() {
  yield 'H'
  yield 'E'
  yield 'L'
  yield 'L'
  yield 'O'
}

const str = strGenerator()

console.log(str.next()); // => { value: 'H', done: false }
console.log(str.next()); // => { value: 'E', done: false }
console.log(str.next()); // => { value: 'L', done: false }
console.log(str.next()); // => { value: 'L', done: false }
console.log(str.next()); // => { value: 'O', done: false }
console.log(str.next()); // => { value: undefined, done: true }

function* numberGen(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}

const num = numberGen(4)

console.log(num.next()); // => { value: 0, done: false }
console.log(num.next()); // => { value: 1, done: false }
console.log(num.next()); // => { value: 2, done: false }
console.log(num.next()); // => { value: 3, done: false }
console.log(num.next()); // => { value: undefined, done: true }

const iterator = {
  gen(n = 5) {
    let i = 0;

    return {
      next() {
        if (i < n) {
          return { value: i++, done : false }
        }
        return { value: undefined, done: true }
      }
    }
  }
}

const itr = iterator.gen()

console.log(itr.next()); // => { value: 0, done: false }
console.log(itr.next()); // => { value: 1, done: false }
console.log(itr.next()); // => { value: 2, done: false }
console.log(itr.next()); // => { value: 3, done: false }
console.log(itr.next()); // => { value: 4, done: false }
console.log(itr.next()); // => { value: undefined, done: true }

for (let k of 'Hello') {
  console.log(k);
}

for (let b of [1, 2, 3, 4, 5, 6]) {
  console.log(b);
}

function* iter(n = 10) {
  for (let i = 0; i < n; i++) {
    yield i
  }
}

for (let k of iter(5)) {
  console.log(k);
}

























