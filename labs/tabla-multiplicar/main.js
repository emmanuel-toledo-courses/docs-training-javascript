const button = document.querySelector("#btn-generate-table");

button.addEventListener("click", (event) => {
  
  event.preventDefault();
  
  const number = document.querySelector("#number");
  
  if(!number.value) {
    alert("Proporcione un valor correcto");
    return;
  }

  let tbody = "";
  for(let index = 0; index < 10; index++) {
    tbody += `
    <tr>
      <td class="operation">${number.value} * ${ index + 1 } = </td>
      <td class="result">${number.value * (index + 1) }</td>
    </tr>`;
  }

  let table = `
  <table>
    <tbody>
      ${tbody}
    </tbody>
  </table>`;

  const tableContainer = document.querySelector("#table-container");
  tableContainer.innerHTML = table;
});