Promise.resolve(1)
  .then(res => {
    console.log('RES_1', res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log('RES_2', res);
  });

// RES_1 1
// RES_2 2
