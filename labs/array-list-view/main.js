let elements = [];

document.querySelector("#btn-add-item").addEventListener("click", (event) => {
  
  event.preventDefault();

  const number = document.querySelector("#number");
  
  if(!number.value) {
    alert("Proporcione un valor correcto");
    return;
  }
  elements.push(number.value);
  document.querySelector("#number").value = "";
});

document.querySelector("#btn-generate-array").addEventListener("click", (event) => {
  
  event.preventDefault();

  let representation = "";
  elements.forEach((value, index) => {
    representation += `
    <div class="element">
            <p>Posición: <span>${index}</span></p>
            <p>Valor: <span>${value}</span></p>
    </div>`;
  });

  document.querySelector("#array-container").innerHTML = representation;

});