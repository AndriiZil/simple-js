sessionStorage.setItem('name', 'Software Developer');

console.log(sessionStorage.getItem('name')); // => Software Developer

const person = {
  name: 'Max',
  age: 35,
  info: {
    address: 'USA'
  }
}

sessionStorage.setItem('person', JSON.stringify(person));

console.log(sessionStorage.getItem('person')); // => {"name":"Max","age":35,"info":{"address":"USA"}}

console.log(sessionStorage.length); // => 2

sessionStorage.setItem('name', 'Tester') // change name key in storage to Tester

sessionStorage.removeItem('person') // Remove only person

sessionStorage.clear() // Remove all
