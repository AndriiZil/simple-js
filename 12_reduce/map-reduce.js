if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function (callBack, thisArg) {
    return this.reduce((mappedArray, currentValue, index, array) => {
      mappedArray[index] = callBack.call(thisArg, currentValue, index, array);
      return mappedArray;
    }, [])
  }
}

const result = [1, 2, , 3].mapUsingReduce(
  (currentValue, index, array) => currentValue + index + array.length
); // [5, 7, , 10]

console.log(result); // => [ 5, 7, <1 empty item>, 10 ]
