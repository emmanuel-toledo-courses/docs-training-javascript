let counter = 0;

const plusCounter = () => {
  counter++;
};

const lessCounter = () => {
  counter--;
};

// Obtenemos instancia de un 'p' (aplicable para cualquier elemento HTML).
// const txtCounter = document.getElementById("counter");
const txtCounter = document.querySelector("#counter"); // Obtener elemento por 'id'.

// Actualizamos el texto de una etiqueta texto.
txtCounter.textContent = "Da clic para ver el contador";

document.querySelector("#plus")
    .addEventListener("click", () => {
        plusCounter();
        txtCounter.textContent = `Contador ${counter}`;
    });

document.querySelector("#less")
    .addEventListener("click", () => {
        lessCounter();
        txtCounter.textContent = `Contador ${counter}`;
    });
