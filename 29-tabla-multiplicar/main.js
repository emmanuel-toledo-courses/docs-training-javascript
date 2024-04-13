const button = document.querySelector("#btn-generate-table");

const formSubmit = (e) => {
  // Evita el refresh de un formulario
  e.preventDefault();

  const value = document.querySelector("#number").value;

  // !value = (value === "" || value === null || value === undefined)
  if (!value) {
    alert("Proporcione un valor correcto");
    return;
  }

  let rows = "";
  for (let i = 1; i < 11; i++) {
    // Concatenación con valor previo de 'rows'
    rows += `
    <tr>
        <td class="operation">${value} * ${i} =</td>
        <td class="result">${value * i}</td>
    </tr>
    `;
  }

  const table = `
  <table>
    <tbody>
        ${rows}
    </tbody>
  </table> 
  `;
  document.querySelector("#table-container").innerHTML = table;
};

button.addEventListener("click", formSubmit);
