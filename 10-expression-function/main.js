const suma = function (valorA, valorB) {
  return valorA + valorB;
};

// Si ocupamos más procesos en la función, se usa este tipo.
const suma2 = (valorA, valorB) => {
  return valorA + valorB;
};

// Cualquier operación que no ocupe ningún proceso adicional
// Puede hacer uso de este tipo de funciones.
const suma3 = (valorA, valorB) => valorA + valorB;

const resultadoSuma = suma3(10, 1000);

console.log("El resultado de la suma es: ", resultadoSuma);

const saludar = () => {
  console.log("Hola");
};
saludar();
