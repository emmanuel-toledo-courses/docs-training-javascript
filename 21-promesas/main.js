// Promesas

const promesaSuma = new Promise((resolve, reject) => {
  
  setTimeout(() => {
    const valorA = 10;
    const valorB = 20;

    const resultado = valorA + valorB;
    if(resultado > 30) {
      reject('Esto es un mensaje de error');
    } else {
      resolve(resultado);
    }
  }, 2000);

});

promesaSuma
  .then( // Obtener el valor de un 'resolve'
    (res) => { // Accedemos al contenido de un 'resolve'
      console.log("then = resolve", res);
    }
  )
  .catch( // Obtener el error de un 'reject'
    (error) => { // Accedemos al contenido de un 'reject'
      console.warn('catch = reject', error);
    }
  )
  .finally(
    () => {
      console.log('finally', 'siempre se ejecuta');
    }
  );

