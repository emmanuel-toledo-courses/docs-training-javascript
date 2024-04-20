/**
 * Función para inicializar todos los eventos de nuestros componentes HTML.
 */
const initializeComponents = () => {
  document.querySelector("#search-form").addEventListener("submit", (e) => {
    // Prevenir la ejecución predefinida
    e.preventDefault();
    const name = document.querySelector("#hero-name").value;
    console.log(name);
  });

  document.querySelector("#title").addEventListener("click", () => {
    alert("Superhero app");
  });

  document.querySelectorAll(".menu-item").forEach((menuItem) => {

    menuItem.addEventListener("click", (e) => {
      // e.target = Instancia de la clase Element, es decir, nuestro menuItem
      const publisher = e.target.getAttribute("att-publisher");
      console.log(publisher);
    });

  });
};

// fetch es para consultar o consumir servicios web
// ./ = directorio donde me encuentro
// ../ = salir al directorio padre
fetch('./../backend/db.json') // Promise<Fetch>
  .then( (response) => { // Promise<Fetch>
    console.log(response);
    return response.json(); // Promise<J>
  })
  .then( (data) => { // Promise<J>
    console.log(data);
  })
  .catch()
  .finally();

initializeComponents();

// Promesa 
  // --> Response

// Promesa 
  // --> string

// Promesa 
  // --> {  } | [] | { heroes: [] }
