const prom = new Promise((res, rej) => {
  setTimeout(() => {
    res('success');
  }, 1000);
});
const prom2 = prom.then(() => {
  throw new Error('error');
});

console.log('prom', prom); // => prom Promise { <pending> }
console.log('prom2', prom2); // => prom2 Promise { <pending> }

// (node:13058) UnhandledPromiseRejectionWarning: Error: error

setTimeout(() => {
  console.log('prom', prom); // => prom Promise { 'success' }
  console.log('prom2', prom2); // =>
}, 2000);

/**
 * prom2 Promise {
  <rejected> Error: error
      at /home/andrii/Documents/my-github/simple-js/05_promise/promise_2.js:7:9
}
 **/
