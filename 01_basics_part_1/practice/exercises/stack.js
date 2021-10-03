/**
 * Необходимо реализовать структуру данных типа Стек (Stack)
 * Добавление и извлечение элементов возможно только в конец/из конца стека соответственно.
 */

export default class Stack {
  /**
   * в качестве "памяти" используем массив
   */

  constructor() {
    this.list = [];
    /**
     * Мы должны иметь возможность узнать текущий размер стека.
     * Используем для этого свойство length
     */
    this.length = 0;
  }

  /**
   * Добавление элемента в стек.
   * Не забудьте про размер!
   */

  push(value) {
    // your code here
    this.list.push(value)
    this.length=this.list.length
  }

  /**
   * Извлечение элемента из стека
   */

  pop() {
    // your code here
    const returnValue= this.list[this.list.length-1]
    this.list.length=this.list.length-1
    this.length=this.list.length
    return returnValue
  }

  /**
   * Ещё добавим функцию, позволяющая получить текущий элемент, но не удаляя его из стека.
   */

  peek() {
    // your code here
    return this.list[this.list.length-1]
  }
}
