Promise.resolve()
  .then(() => {
    return new Error('error');
  })
  .then(res => {
    console.log('then: ', res);
  })
  .catch(err => {
    console.log('catch: ', err);
  });

// then:  Error: error
//     at /home/andrii/Documents/my-github/simple-js/05_promise/promise_7.js:3:12
