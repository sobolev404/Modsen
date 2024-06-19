// Напишите функцию, которая генерирует
// идентификатор строки (указанной длины) из
// случайных символов.

function* generateRandomId(numElements) { //функция генератор
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < numElements; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        yield characters[randomIndex];
    }
}

function totalString(numElements){
    let generator = generateRandomId(numElements);
    let result = ''
    while(true){
        let { value, done } = generator.next();
        if (done){
            break;
        }
        result += value
    }
    return result
}

console.log(totalString(10))





