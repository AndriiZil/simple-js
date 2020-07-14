const prom = new Promise((res, rej) => {
  res('1');
  rej('error');
  res('2');
});

prom
  .then(res => {
    console.log('then: ', res); // => then 1
  })
  .catch(err => {
    console.log('catch: ', err);
  });
