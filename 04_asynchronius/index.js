console.log('Start 1');
console.log('Start 2');

window.setTimeout(() => {
    console.log('Inside timeout, after 2000 seconds');
}, 2000)

window.setTimeout(() => {
    console.log('Inside timeout, after 5000 seconds');
}, 5000)

console.log('End');