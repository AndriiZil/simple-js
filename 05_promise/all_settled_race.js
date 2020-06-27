function promiseResolve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('After 3000')
    }, 3000)
  });
}

function promiseReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Error')
    }, 5000)
  })
}

Promise.all([promiseResolve(), promiseReject()])
  .then(data => console.log(data))
  .catch(e => console.log(e))

Promise.race([promiseResolve(), promiseReject()])
  .then(data => console.log(data))
  .then(e => console.log(e))

Promise.allSettled([promiseResolve(), promiseReject()])
  .then(data => console.log(data))
  .then(e => console.log(e))