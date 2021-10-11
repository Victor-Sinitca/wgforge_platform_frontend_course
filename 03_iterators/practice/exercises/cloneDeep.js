/**
 * Реализовать функцию cloneDeep которая копирует объекты по значению с любой глубиной вложенности
 */
export default function cloneDeep(object) {
  // ¯\_(ツ)_/¯
  return  JSON.parse(JSON.stringify(object))
}
