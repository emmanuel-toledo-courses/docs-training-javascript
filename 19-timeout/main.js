
setTimeout(() => {
    console.log('Hola a todos, soy Goku!');
}, 1000);


setTimeout((name, age) => {
    console.log(`Hola, soy ${name} y tengo ${age} años`);
}, 3000, 'Pedro', 18);


const suma = (valorA, valorB) => {
    console.log('El resultado de la suma es: ' + (valorA + valorB));
};
const timeout = setTimeout( suma, 5000, 10, 10);

// Se usa para abortar la ejecución de un timeout
clearTimeout(timeout);

// suma(12, 23); // Ejecutar una función, colocamos parentesis.
// console.log(suma); // Referencia de una función, no se colocan parentesis.


