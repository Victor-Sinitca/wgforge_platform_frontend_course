/*
Given a list of strings, return the count of the number of
strings where the string length is 2 or more and the first
and last chars of the string are the same.

['abc', 'aa', 'bb'] yields 2
*/
export function matchEnds(words = []) {
  // YOUR CODE HERE
  let count = 0;
  function firstAndLastAreEqual(string) {
    return string[0] === string[string.length - 1];
  }
  words.forEach((value, index, array) => {
    if (value.length >= 2 && firstAndLastAreEqual(value)) {
      count++;
    }
  });
  return count
}

/*
Given an array of numbers, return new array where
first element is diffrence between maximum and minimum of passed array
last element is sum of minimum and maximum
and passed array in center
[1, 2, 3] yields [2, 1, 2, 3, 4]
[5, 2, 14] yields [12, 5, 2, 14, 16]
*/
export function addFirstAndLast(numbers=[]) {
  // YOUR CODE HERE
  let max=numbers[0]
  let min=numbers[0]
  numbers.forEach((value, index, array) => {
    if(value>max) max=value
    if(value<min) min=value
  })
  let newArrayNumbers=[max-min]
  newArrayNumbers=newArrayNumbers.concat(numbers)
  newArrayNumbers.push(max+min)
  return newArrayNumbers
}

/*
Given a list of strings, return a list with the strings
in sorted order, except group all the strings that begin with 'x' first.
e.g. ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] yields
['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
Hint: this can be done by making 2 lists and sorting each of them
before combining them.
*/
export function xLetterFirst(words=[]) {
  // YOUR CODE HERE
  const arrayWithX=[]
  const array=[]
  words.forEach((value, index, array1) => {
    if(value[0]==='x'){
      arrayWithX.push(value)
    }else {
      array.push(value)
    }
  })
  arrayWithX.sort()
  array.sort()
  const newArray=[...arrayWithX]
  return newArray.concat(array)
}

/*
Given a list of non-empty arrays, return a list sorted in increasing
order by the last element in each tuple.
e.g. [[1, 7], [1, 3], [3, 4, 5], [2, 2]] yields
[[2, 2], [1, 3], [3, 4, 5], [1, 7]]
*/
export function sortByLast(nestedArrays=[]) {
  // YOUR CODE HERE
  return nestedArrays.sort((a, b) => {
   return  a[a.length-1] - b[b.length-1]
  })
}
