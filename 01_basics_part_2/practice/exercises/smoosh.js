/**
 * Задача 1: написать функцию smoosh, которая принимает массив, "выравнивает" вложенные массивы
 * в одноуровневый массив и возвращает новый плоский массив.
 * Например:
 * smoosh([1, 2, [3, 4], 5])
 * > [1, 2, 3, 4, 5]
 * Входной массив может содержать массивы любого уровня вложенности.
 * Например: [[1, 2], [3, [4, [5]]]]
 *
 * Задача 2: написать функцию squeeze (по аналогии со smoosh) таким образом,
 * чтобы она модифицировала исходный массив, а не возвращала новый.
 *
 * Задача 3*: для функций smoosh и squeeze добавить валидацию входного параметра.
 * В случае, если на вход передан не массив функция должна выбросить исключение
 * с сообщением 'argument should be an array'.
 */

function readArray(array,newArray){
  array.forEach((value, index, array1) => {
    if(Array.isArray(value)){
      readArray(value,newArray)
    }else {
      newArray.push(value)
    }
  })
}

function smoosh(array=[]) {
  // your code here
  if(Array.isArray(array)){
    const newArray=[]
    readArray(array,newArray)
    return newArray
  }else throw new Error("argument should be an array")
}

function squeeze(array=[]) {
  // your code here
  if(Array.isArray(array) ){
    const newArray=[]
    readArray(array,newArray)
    newArray.forEach((value, index, array1) => {
      array[index]=value
    })
    return array
  }else throw new Error("argument should be an array")
}

export { smoosh, squeeze };
