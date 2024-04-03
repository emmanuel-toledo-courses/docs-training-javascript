class Cuadrado {
  constructor(lado) {
    this.lado = lado;
  }

  calcularArea() {
    const area = this.lado * this.lado;
    return area;
  }
}


// IMPRIMIR EL DOM DEL SITIO WEB (ARCHIVO HTML).
// console.log(document);

// Acceder al elemento button HTML desde el DOM.
const buttonCalcularAreaCuadrado = document.getElementById(
  "calcular-area-cuadrado"
);
buttonCalcularAreaCuadrado.addEventListener("click", () => {
  // Acceder al elemento input HTML desde el DOM.
  const inputLadoCuadrado = document.getElementById("lado-cuadrado");
  console.log(inputLadoCuadrado);
  const lado = inputLadoCuadrado.value; // Obtener valor del input HTML.

  const cuadrado = new Cuadrado(lado);
  const area = cuadrado.calcularArea();
  alert("El área del cuadrado es: " + area);
});

buttonCalcularAreaCuadrado.addEventListener("mouseover", () => {
  console.log("mouse over en botón");
});
