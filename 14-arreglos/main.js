// const arreglo = [1, 2, 3, 4, 5];
// const arregloString = ["Hola", "Mundo"]
// console.log(arreglo);
// console.log(arregloString);

const arreglo = [1, 2, 4, 4, 5, 6];

// push - Agregar un elemento al final del arreglo
arreglo.push(1);
arreglo.push(10);
arreglo.push(15);

// unshift - Agrega un elemento al inicio del arreglo
arreglo.unshift(-100);
arreglo.unshift(10);

// pop - Elimina el elemento final del arreglo
arreglo.pop();
arreglo.pop();
arreglo.pop();

// shift - Elimina el primer elemento del arreglo
arreglo.shift();
arreglo.shift();

// reverse - Coloca el arreglo en orden inverso (numericos)
arreglo.reverse();

// sort - Ordena el arreglo de menor a mayor (numericos)
arreglo.sort();

// at - Obtiene el valor de un elemento del arreglo según su indice.
console.log(arreglo[1]);
console.log(arreglo.at(1));

// slice - Elimina el número de elementos colocados
const arregloElementosEliminados = arreglo.slice(2);
console.log(arregloElementosEliminados);

// filter - Filtra los elementos de una array y
// da como resultado otro array con los filtros aplicados
const arregloFilter = arreglo.filter((value) => {
  if (value === 4) {
    return value;
  }
});
console.log(arregloFilter);

// includes - Valida que un arreglo incluya cierto dato o elemento.
const existe = arreglo.includes(4);
console.log(existe);

// join - Convierte un arreglo a strings separados por el caracter que necesitemos.
const joinArreglo = arreglo.join(",");
console.log(joinArreglo);

// split - No es función de arreglos sino de strings
// Permite convertir elementos separados por un caracter, en arreglo.
const elementos = "1,2,3,4,5,6,7,8,9,10";
const arregloSplit = elementos.split(",");
console.log(arregloSplit);

// map - Retorna un nuevo arreglo a partir de modificaciones o alteraciones
// de cada elemento de un arreglo ya existente.
const arregloSplitNumber = arregloSplit.map((value) => {
    // const number = Number(value); // Convertir string a number
    const number = +value; // Convertir string a number
    return number;
});
console.log(arregloSplitNumber);

console.log(arreglo);
