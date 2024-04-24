/**
 * Función para inicializar todos los eventos de nuestros componentes HTML.
 */
const initializeComponents = () => {
  document.querySelector("#search-form").addEventListener("submit", (e) => {
    // Prevenir la ejecución predefinida
    e.preventDefault();
    const name = document.querySelector("#hero-name").value;
    getHeroesByName(name.trim().toLowerCase());
  });

  document.querySelector("#title").addEventListener("click", () => getAllHeroes());

  document.querySelectorAll(".menu-item").forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
      // e.target = Instancia de la clase Element, es decir, nuestro menuItem
      const publisher = e.target.getAttribute("att-publisher");

      if (publisher === "DC") {
        getHeroesByPublisher("DC Comics");
      } else {
        getHeroesByPublisher("Marvel Comics");
      }
    });
  });
};

/**
 * Función para agregar a partir de un arreglo de 'Heroes', en la vista HTML.
 */
const addHeroesToPage = (heroes) => {
  document.querySelector("#heroes-container").innerHTML = "";

  heroes.forEach((heroe) => {
    // Creamos tarjeta de heroe
    const heroeCard = document.createElement("div");
    heroeCard.classList.add("superhero-card");

    // Agregamos contenido a tarjeta de heroe
    heroeCard.innerHTML = `
    <img src="./imgs/${heroe.img}.jpg" alt="${heroe.superhero}">
    <div class="info">
        <p>Nombre:<span>${heroe.superhero}</span></p>
        <p>Alter ego:<span>${heroe.alter_ego}</span></p>
        <p>Actores:<span>${heroe.characters}</span></p>
        <p>Publicador:<span>${heroe.publisher}</span></p>
        <p>Primer aparición:<span>${heroe.first_appearance}</span></p>
    </div>`;

    document.querySelector("#heroes-container").append(heroeCard);
  });
};

initializeComponents();
getAllHeroes();

// Promesa
// --> Response

// Promesa
// --> string

// Promesa
// --> {  } | [] | { heroes: [] }
