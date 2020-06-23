const person = {
    name: 'Koliya',
    age: 30,
    greet: function () {
        console.log('Greet!');
    }
};

const user = new Object({
    name: 'Bob',
    age: 42,
    hello: function () {
        console.log('Hello Bob');
    }
});

// We extend Basic Object, user will has a method sayHello
Object.prototype.sayHello = function () {
    console.log('Hello my friend');
};

const ira = Object.create(person); // We created prototype from person

console.log(ira); // => {} All properties are in prototype

const str = 'string';
const str2 = new String('str');
