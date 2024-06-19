// Напишите функцию, которая принимает
// массив в качестве параметра и выдает
// пользовательскую ошибку, если массив пуст.

function checkIsArrEmpty(arr){
    if (arr.length===0){
        throw new Error("Массив пуст!");
    }
    else{
        return "Массив не пустой.";
    }
}
try {
  console.log(checkIsArrEmpty([]));
} catch (e) {
  console.log(e);
}