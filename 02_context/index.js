function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Andrii',
    age: 35,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}, age ${this.age}`)
        console.log(`Job is ${job}`)
        console.log(`Phone is ${phone}`)
        console.groupEnd()
    }
}

const igor = {
    name: 'Igor',
    age: 27
}

// const igorInfo = person.logInfo.bind(igor, 'Frontend', '380676767675')()
// igorInfo() // The same
// igorInfo('Frontend', '380676767675')

person.logInfo.call(igor, 'Bob', '+48484848485') // Call has 2 parameters
person.logInfo.apply(igor, ['Ted', '+97988522365']) // Apply has parameters in array

const array = [1, 2, 3, 4, 5];

// function multBy(arr, num) {
//     return arr.map(i => {
//         return i * num;
//     })
// }

Array.prototype.multBy = function(n) {
    return this.map(i => {
        return i * n;
    })
}

console.log(array.multBy(20));
