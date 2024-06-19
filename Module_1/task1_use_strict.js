// Напишите функцию, которая принимает
// массив и возвращает true, если в массиве
// есть дубликаты, и false, если нет.
// Используйте строгий режим.

'use strict'
function checkOnDuplicates(arr){
    return arr.length !== (new Set(arr)).size;
}
