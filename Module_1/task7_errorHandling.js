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