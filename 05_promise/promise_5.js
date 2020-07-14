const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('first')
    resolve('second')
  }, 1000)
})

const start = Date.now()
promise.then((res) => {
  console.log(res, Date.now() - start, "third")
})
promise.then((res) => {
  console.log(res, Date.now() - start, "fourth")
})

// first
// second 1009 third
// second 1010 fourth
