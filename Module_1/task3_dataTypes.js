function countDigits(num){
    if(isFinite(num)){
        return num.toString().length;
    }
    return "Error, enter a number";
}
