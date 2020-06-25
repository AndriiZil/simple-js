const person = Object.create({
    calculateAge() {
        console.log('Age', new Date().getFullYear() - this.birthday);
    }
}, {
    name: {
        value: 'Andrii',
        enumerable: true, // loop
        writable: true, // change
        configurable: true // delete
    },
    birthday: {
        value: 1990
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthday
        },
        set(value) {
            console.log('Set age', value);
        }
    }
})

person.name = 'Max'; // Not changed if writable is false

for (let key in person) {
    console.log('KEY:', key, 'VALUE:', person[key]);
}