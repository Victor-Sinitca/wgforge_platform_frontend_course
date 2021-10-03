/*
Implement a functuion which receives an array and another function
and apply passed function to each elemnt of array

Example:
[1, 2, 3], x => x + 1  yields [2, 3 ,4]
*/
export function map(array = [], func = () => {
}) {
  // YOUR CODE HERE
  const newArray = [];
  array.forEach((value, index, array1) => {
    newArray.push(func(value));
  });
  return newArray;
}

/*
Write a function which revices a function and array and
returns new array with elements matched to filter

['foo', 1, null, 'bar'], x => typeof x === 'string' yields ['foo', bar]

[1, 2, 3, 4, 5, 6], x => x % 2 == 0 yields [2, 4, 6]

*/
export function filter(array = [], fn) {
  // YOUR CODE HERE
  /* const newArray= array.filter((value, index, array1) => {
     fn(value)
   })*/
  const newArray = [];
  array.forEach((value, index, array1) => {
    if (fn(value)) newArray.push(value);
  });
  return newArray;
}

/*
Implement a function that returns a function which yields a fibonaccy number

Example:
const gen = fibGenerator()
gen() -> 0
gen() -> 1
gen() -> 1
gen() -> 2
gen() -> 3
gen() -> 5
...
*/
export function fibGenerator() {
  // YOUR CODE HERE
  let previousValue = 1;
  let value = -1;
  return () => {
    const returnValue = value + previousValue;
    if (value === 0) {
      previousValue = 0;
    }
    if (value < 1) {
      value++;
    } else {
      previousValue = value;
      value = returnValue;
    }
    return returnValue;
  };
}

/*
Write a function that recieves a function and other
arguments and return a function with bounded arguments

Examples:
const sum = (x, y) => x + y
const addOne = partial(sum, 1)
addOne(2) -> 3
const sumTwoAndFour = partial(sum, 2, 4)
sumTwoAndFour() // 6

Note: function has a length property which shows how many arguments it receives
*/
export function partial(fn, ...args) {
  // YOUR CODE HERE
  const receivedFn = fn;
  let receivedArgs = args;

  return (...value) => {
    if (receivedFn.length === receivedArgs.length) {
      return receivedFn(...receivedArgs);
    } else {
      receivedArgs = receivedArgs.concat(value);
      if (receivedFn.length === receivedArgs.length) {
        return receivedFn(...receivedArgs);
      }
    }
  };
}
