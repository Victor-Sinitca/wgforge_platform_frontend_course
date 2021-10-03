/**
 * Необходимо реализовать структуру данных Очередь.
 * Очередь должна реализовывать принцип FIFO - First-In-First-Out.
 */

export default class Queue {
  /**
   * в качестве "памяти" используем массив
   */

  constructor() {
    this.list = [];
    /**
     * У любой очереди должна быть длинна!
     */
    this.length = 0;
  }

  /**
   * Метод для добавления элемента в конец очереди.
   */

  enqueue(value) {
    // your code is here
    this.list.push(value)
    this.length=this.list.length
  }

  /**
   * Метод для извлечения элемента из очереди.
   * Вместо извлечения из конца очереди мы должны извлечь элемент из начала очереди!
   */

  dequeue() {
    // your code is here
    const returnValue= this.list[0]
    this.list=[...this.list.filter((value, index, array) => {
      return index>0
    })]
    this.length=this.list.length
    return returnValue
  }

  /**
   * Метод для получения элемента из очереди.
   * Принцип такой же как и у *deque*, только в этом случае элемент не удаляется из очереди.
   */

  peek() {
    // your code is here
    return this.list[0]
  }
}
