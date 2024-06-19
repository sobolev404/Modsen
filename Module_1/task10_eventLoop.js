// Используя Promise, выведите числа от 1 до
// 10 через секунду каждый раз.
// Ограничения: setTimeout и new Promise() мы
// можно вызывать только один раз

const printNumbers = async () => {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
      await new Promise(resolve => setTimeout(resolve, 1000));;
    }
  };
  
  printNumbers();