/**
 * Задание: написать функцию sleep, которая приостанавливает работу потока на
 * время переданное в аргументе. Время задаётся в секундах с точностью до 1 сек.
 * Если передан не валидный аргумент функция должна сразу завершить своё
 * выполнение и вернуть undefined.
 */

export default  function sleep(arg) {
    // your code here
  if(Number.isInteger(+arg)){
    const startDate = Date.now()+(+arg*1000)
    let date=Date.now()
    while(startDate > date){
      date=Date.now()
    }
  }else {
    return undefined
  }


}
