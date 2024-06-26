// Напишите функцию, которая конвертирует
// функцию, основанную на callbacks, в
// функцию, основанную на Promises.

function promisify(f) {
    return function (...args) { 
      return new Promise((resolve, reject) => {
        function callback(err, result) { 
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
  
        args.push(callback); 
  
        f.call(this, ...args); 
      });
    };  
  };