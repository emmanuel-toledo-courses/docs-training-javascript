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

/**
 * Función para agregar a partir de un arreglo de 'Heroes', en la vista HTML.
 */
const addHeroesToPage = (heroes) => {
  heroes.forEach((heroe) => {
    // Creamos tarjeta de heroe
    const heroeCard = document.createElement("div");
    heroeCard.classList.add("superhero-card");

    // Agregamos contenido a tarjeta de heroe
    heroeCard.innerHTML = `
    <img src="./imgs/${ heroe.img }" alt="${ heroe.superhero }">
    <div class="info">
        <p>Nombre:<span>${ heroe.superhero }</span></p>
        <p>Alter ego:<span>XXXXXX</span></p>
        <p>Actores:<span>XXXXXX</span></p>
        <p>Publicador:<span>XXXXXX</span></p>
        <p>Primer aparición:<span>XXXXXX</span></p>
    </div>`;

    document.querySelector("#heroes-container").append(heroeCard);
  });
};

// fetch es para consultar o consumir servicios web
// ./ = directorio donde me encuentro
// ../ = salir al directorio padre
fetch("./../backend/db.json") // Retorna: Promise<Fetch>
  // Recibe resolve de Fetch
  .then((response) => response.json()) // Retorna: Promise<JSON>
  // Recibe resolve de JSON
  .then((data) => addHeroesToPage(data.heroes));

initializeComponents();

// Promesa
// --> Response

// Promesa
// --> string

// Promesa
// --> {  } | [] | { heroes: [] }
