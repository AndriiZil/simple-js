Promise.resolve()
  .then(function success1 (res) {
    throw new Error('success1 error')
  }, function fail1 (e) {
    console.error('fail1: ', e)
  })
  .then(function success2 (res) {
  }, function fail2 (e) {
    console.error('fail2: ', e)
  })

// fail2:  Error: success1 error
//     at success1 (/home/andrii/Documents/my-github/simple-js/05_promise/promise_11.js:3:11)
