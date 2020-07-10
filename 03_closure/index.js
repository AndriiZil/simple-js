function createCalcFunction(n) {
    return function () {
        console.log(1000 * n);
    }
}

const calc = createCalcFunction(5);

console.log(calc()); // => 5000

function createIncrementor(n) {
    return function (num) {
        return n + num; // => 1
    }
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(10)); // => 11
console.log(addTen(15)); // => 25

function urlUrlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    }
}

console.log(urlUrlGenerator('com')); // => [Function]
console.log('===');

const comUrl = urlUrlGenerator('com');
const ruUrl = urlUrlGenerator('ru');

console.log(comUrl('google')); // => https://google.com
console.log(comUrl('netflix')); // => https://netflix.com

console.log(ruUrl('yandex')); // => https://yandex.ru
console.log(ruUrl('vk')); // => https://vk.ru

// bind function
function bind(ctx, fn) {
    return function (...args) {
        fn.apply(ctx, args);
    }
}






















