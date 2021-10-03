/*
collect array's element to object with first letters as keys
and sorted words array as a value

Example:
['test', 'foo', 'bar', 'farm', 'trust', 'ham', 'harm'] -> {
  't': ['test', 'trust'],
  'f': ['farm', 'foo'],
  'b': ['bar'],
  'h': ['ham', 'harm'],
}
*/
export function collectByFirstLetter(...words) {
  // YOUR CODE HERE
  let newObject={}
  words.forEach((value, index, array) => {
    const word=value[0]
    if (!newObject.hasOwnProperty(word)){
      newObject[word]=[]
    }
    newObject[word].push(value)
  })
  for (let key in newObject) {
    newObject[key].sort()
  }
  return newObject
}

/*
Write a function which receives object and list of keys
and returns object with only keys passed in arguments.
unknown keys are ignored

Example:
({name: 'John', age: 42}, 'name') yields {name: 'John'}
*/
export function only(obj, ...keys) {
  // YOUR CODE HERE
  let returnObject={}
  keys.forEach((value, index, array) => {
    if(obj.hasOwnProperty(value)){
      returnObject[value]=  obj[value]
    }
  })
  return returnObject
}

/*
Function counts words in given text.
returns an object with word as key and it's frequence as value

Note: It should ignore punctuation marks and uppercase symbols

Example:
'Awesome! Does it work? It should works' yields
{
  awesome: 1,
  test: 1,
  it: 2,
  should: 1,
  works: 1,
}
'' yields {}
*/
export function wordsCount(text) {
  // YOUR CODE HERE
  let newObject={}
  text.replace(/[.,\/#?!$%\^&\*;:{}=\-_`~()]/g,"")
    .replace(/\s{2,}/g," ")
    .toLowerCase().split(" ")
    .forEach((value, index, array) => {
      if(value){
        if(newObject.hasOwnProperty(value)){
          newObject[value]++
        }else{
          newObject[value]=1
        }
      }
  })
  return newObject

}

/*
Write a function's body which create an object for user representation
It should contains method for password validation:
password is weak if it contains only lowercase letters or only uppercase

Example:
const user = createUser('root', 'topsecret')
user.login === 'root' // true
user.password === 'topsecret' // true
user.isWeakPassword() === true
user.password = 'topSecreT'
user.isWeakPassword() === false
*/

export function createUser(login, password) {
  // YOUR CODE HERE
  return {
    login:login,
    password:password,
    isWeakPassword(){
     return  this.password === this.password.toLowerCase()
    },
  }
}
