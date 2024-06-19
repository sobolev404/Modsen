// Напишите функцию, которая принимает
// массив с числами и находит сумму тех
// элементов этого массива, которые больше
// нуля и меньше десяти.

function sumOfDigits(numbers){
    let sum = 0;
    for(let i = 0;i<numbers.length;i++){
        if(numbers[i]>0 && numbers[i]<10){
            sum+=numbers[i];
        }
    }
    return sum;
}
