let indicador = 0;

// Intervalo sin parametros
// setInterval( () => {
//     indicador++;
//     console.log(indicador);
// }, 1000)

// Intervalo con parametros
// setInterval((name) => {
//     console.log(`Hola principe ${name}`);
// }, 1000, 'Vegeta')

// Limpiar un intervalo
const intervalo = setInterval(() => {
  indicador++;
  console.log(indicador);

  // Detener intervalo dentro de si mismo con validación
  //   if(indicador === 10) {
  //     clearInterval(indicador);
  //   }
}, 200);

// Detener intervalo con la DOM.
document.getElementById("btn-detener-interval").addEventListener("click", () => {
  clearInterval(intervalo);
});
