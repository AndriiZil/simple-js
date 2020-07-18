const myNumber = 50;

localStorage.setItem('number', '50') // only Strings

console.log(localStorage.getItem('number'));

localStorage.removeItem('number');

localStorage.getItem('number');

localStorage.clear();

const person = {
  name: 'Max',
  age: 25
}

localStorage.setItem('person', JSON.stringify(person)) // Only strings

const p = localStorage.getItem('person')
console.log(JSON.parse(p).name); // => Max

// =======================================================
window.addEventListener('storage', event => {
  console.log(event);
})
