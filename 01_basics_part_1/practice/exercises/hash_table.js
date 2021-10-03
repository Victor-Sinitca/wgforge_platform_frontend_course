/* eslint-disable filenames/match-regex */
/**
 * Необходимо реализовать хеш-таблицу, в которой в значения можно записывать данные любого типа.
 * Ключом должна быть строка.
 */

export default class HashTable {
  /**
   * в качестве "памяти" используем массив
   */
  constructor() {
    this.memory = [];
  }

  /**
   * Хеширующая функция.
   * Принимает ключ (тип строка) и возвращает уникальный адрес.
   * hashKey('abc') =>  17263
   * hashKey('xyz') => 283902
   */

  hashKey(key) {
    let hash=0
    for(let i =0; i<key.length; i++){
      hash+=key[i].charCodeAt(0)
    }
    return hash

    // your code is here
  }

  /**
   * Метод для получения данных из хеш-таблицы по ключу.
   */

  get(key) {
    // your code here
    const hash=this.hashKey(key)
    let returnValue=undefined
    this.memory.forEach((value, index, array) => {
      if(value.hash === hash){
        returnValue = value.value
      }
    })
    return returnValue
  }

  /**
   * Добавляем значение в таблицу с заданным ключом.
   */

  set(key, value) {
    this.memory.push({hash:this.hashKey(key),value:value })
  }

  /**
   * Функция удаления из хеш-таблицы.
   * Принимает ключ.
   */

  remove(key) {
    const hash=this.hashKey(key)
    this.memory=this.memory.filter((value, index, array) => {
     return  value.hash !== hash
    })
    // your code is here
  }
}
