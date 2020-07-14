process.nextTick(() => {
  console.log('1')
})
Promise.resolve()
  .then(() => {
    console.log('2')
  })
setImmediate(() => {
  console.log('3')
})
console.log('4');

// Print 4
// Print 1
// Print 2
// Print 3
