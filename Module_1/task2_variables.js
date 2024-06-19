// Создайте функцию и внутри неё объявите
// переменные с использованием var, let и
// const. Попробуйте обратиться к этим
// переменным вне функции. Какие
// переменные будут видны снаружи функции,
// а какие нет?

function testVariables(){
    let letVariable = 10;
    const constVariable = 12;
    var varVariable = 14;
}
console.log(letVariable); // ReferenceError: letVariable is not defined
console.log(constVariable); // ReferenceError: constVariable is not defined
console.log(varVariable); // ReferenceError: varVariable is not defined

// вывод: Переменные, объявленные внутри функции с использованием var, let и const, недоступны вне этой функции.