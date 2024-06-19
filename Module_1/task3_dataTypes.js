// Напишите функцию, которая принимает
// число и выводит количество цифр в этом
// числе.


function countDigits(num){
    if(isFinite(num)){
        return num.toString().length;
    }
    return "Error, enter a number";
}
