// grouping objects by a property

const result = [
  {subject: 'Physics', marks: 41},
  {subject: 'Chemistry', marks: 59},
  {subject: 'Pure Maths', marks: 36},
  {subject: 'Applied Maths', marks: 90},
  {subject: 'English', marks: 64},
];

let initialValue = {
  pass: [],
  fail: []
}

const groupedResult = result.reduce((accumulator, current) => {
  (current.marks >= 50) ? accumulator.pass.push(current) : accumulator.fail.push(current);
  return accumulator;
}, initialValue);

console.log(groupedResult);


// remove duplicates from an array

const duplicatedsArr = [1, 5, 6, 5, 7, 1, 6, 8, 9, 7];

const removeDuplicatedArr = duplicatedsArr.reduce((accumulator, currentValue) => {
  if(!accumulator.includes(currentValue)){
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);

console.log(removeDuplicatedArr);
