let playerOne = true; // true = O, false = X
const catBlocks = document.querySelectorAll(".cat-block");

document.querySelector("#btn-reset").addEventListener("click", () => {
  playerOne = true;
  catBlocks.forEach((catBlock) => {
    catBlock.innerHTML = "";
  });
});

catBlocks.forEach((catBlock) => {
  
  catBlock.addEventListener("click", () => {

    // ¿catBlock no contiene ninguna etiqueta?
    if (catBlock.innerHTML !== "") { // Si, no contiene etiquetas
      return;
    }
    
    // ¿Es turno del jugador uno?
    if (playerOne === true) {
      // Sí es jugador uno
      catBlock.innerHTML = "<p>O</p>";
      playerOne = false;
    } else {
      // No es jugador uno
      catBlock.innerHTML = "<p>X</p>";
      playerOne = true;
    }

  });

});

