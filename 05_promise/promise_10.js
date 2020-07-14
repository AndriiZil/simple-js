Promise.resolve()
  .then(
    function success(res) {
      throw new Error('Error after success');
    },
    function fail1(e) {
      console.error('fail1: ', e);
    }
  )
  .catch(function fail2(e) {
    console.error('fail2: ', e);
  });

//   fail2:  Error: Error after success
//     at success (/home/andrii/Documents/my-github/simple-js/05_promise/promise_10.js:4:13)
