Promise.resolve()
  .then(() => {
    throw new Error('error');
  })
  .then(res => {
    console.log('then: ', res);
  })
  .catch(err => {
    console.log('catch: ', err);
  });

// catch:  Error: error
//     at /home/andrii/Documents/my-github/simple-js/05_promise/promise_8.js:3:11
