const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. Inicializar indice.
let index = 0; 

// 2. Validación o condición de ejecución
while(index < numeros.length) {
    
    // 3. Código que ejecuta while
    console.log('Dentro del ciclo while', index);


    // 4. Operación de cambio de indice.
    index++;
}

console.log('Fuera del while');
