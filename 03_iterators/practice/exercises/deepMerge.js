/**
 * Реализовать метод deepMerge для рекурсивного слияния собственных и унаследованных перечислимых
 * строковых свойств исходного объекта в целевой объект.
 * Свойства исходного объекта, которые разрешаются в undefined, пропускаются,
 * если свойство существует в целевом объекте.
 * Свойства Array и plain Object типа рекурсивно объединяются, свойства других типов из исходного объекта
 * переписывают свойства в объекте назначения либо добавляются если их нету в объекте назначения
 *
 * Пример:
 *
 * const destinationObject = {
 *   students: [{ name: 'Unit 1' }, { name: 'Unit 2'}],
 *   label: 'backend',
 *   count: 1
 * };
 *
 * const sourceObject = {
 *  students: [{ surname: 'Forge 1' }, { surname: 'Forge 2'}],
 *  label: 'frontend'
 * };
 *
 * deepMerge(destinationObject, sourceObject);
 * // => {
 * //       students: [{ name: 'Unit 1', surname: 'Forge 1' }, { name: 'Unit 2', surname: 'Forge 2' }],
 * //       label: 'frontend',
 * //       count: 1
 * //    }
 */

function mergeArray(destination, source) {
  const destinationObject = destination;
  const sourceObject = source;
  if (Array.isArray(destinationObject)) {
    // если объединяем массив с массивом
    sourceObject.forEach((value, index, array) => {
      destinationObject[index] = merge(destinationObject[index], sourceObject[index]);
    });
    return destinationObject
  } else {
    // в других случаях замещаем
    return sourceObject;
  }
}
function mergeObject(destination, source) {
  const destinationObject = destination;
  const sourceObject = source;
  if (!Array.isArray(destinationObject)
    && typeof destinationObject === 'object'
    && destinationObject !== null) {
    // если объединяем объект с объектом
    for (let key in sourceObject) {
      if (sourceObject && sourceObject.hasOwnProperty(key)) {
        if (destinationObject.hasOwnProperty(key)) {
          //
          destinationObject[key] = merge(destinationObject[key], sourceObject[key]);
        } else {
          //
          destinationObject[key] = sourceObject[key];
        }
      }
    }
    return destinationObject
  } else {
    return sourceObject;
  }
}
function merge(destination, source) {
  const destinationObject = destination;
  const sourceObject = source;
  if (Array.isArray(sourceObject)) {
    // объединяем с массивом
    return mergeArray(destinationObject, sourceObject);
  } else if (typeof sourceObject === 'object' && sourceObject !== null) {
    // объединяем с объектом
    return mergeObject(destinationObject, sourceObject);
  } else {
    // объединяем с простым значением
    return sourceObject;
  }
}
export default function deepMerge(destinationObject, sourceObject) {
  // ¯\_(ツ)_/¯
  return merge(destinationObject, sourceObject);
}

