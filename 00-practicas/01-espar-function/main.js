const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parImpar = (numero) => {
  let esPar = false;
  // ¿Es par?
  if (numero % 2 === 0) {
    esPar = true;
  } else {
    esPar = false;
  }
  return esPar;
};

// 1. Indice;
// 2. Condición ¿se ejecuta o no? [considera el indice];
// 3. Contenido del ciclo for, lo que se encuentra dentro de {}.
// 4. Operación de cambio [afecta al indice] (Entra en función despues de ejecutar el ciclo for)
for (let index = 0; index < numeros.length; index++) {
  const numero = numeros[index]; // Acceder al valor de un elemento según su indice
  const esPar = parImpar(numero);

  if(esPar) {
    console.log('El valor ' + numero + ' es par');
  } else {
    console.log('El valor ' + numero + ' es impar');
  }
}
