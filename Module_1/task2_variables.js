function testVariables(){
    let letVariable = 10;
    const constVariable = 12;
    var varVariable = 14;
}
console.log(letVariable); // ReferenceError: letVariable is not defined
console.log(constVariable); // ReferenceError: constVariable is not defined
console.log(varVariable); // ReferenceError: varVariable is not defined

// вывод: Переменные, объявленные внутри функции с использованием var, let и const, недоступны вне этой функции.