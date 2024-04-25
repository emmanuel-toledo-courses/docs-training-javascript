// * Todo el objeto de la ruta actual en mi sitio web
// const ruta = window.location;
// console.log(ruta);

// * Parametros (query params) de la ruta actual en mi sitio web
// const params = new URLSearchParams(window.location.search);
// console.log(params);
// const heroId = params.get("hero-id");
// console.log(heroId);
// const heroName = params.get("name");
// console.log(heroName);

const initializeComponents = () => {
  const params = new URLSearchParams(window.location.search);
  const heroId = params.get("hero-id");
  getHeroById(heroId);
};

const addHeroToPage = (hero) => {
  // Creamos tarjeta de heroe
  const heroeCard = document.createElement("div");
  heroeCard.classList.add("superhero-card");

  // Agregamos contenido a tarjeta de heroe
  heroeCard.innerHTML = `
    <img src="../imgs/${hero.img}.jpg" alt="${hero.superhero}">
    <div class="info">
        <p>Nombre:<span>${hero.superhero}</span></p>
        <p>Alter ego:<span>${hero.alter_ego}</span></p>
        <p>Actores:<span>${hero.characters}</span></p>
        <p>Publicador:<span>${hero.publisher}</span></p>
        <p>Primer aparición:<span>${hero.first_appearance}</span></p>
    </div>`;

  document.querySelector("#heroes-container").append(heroeCard);
};

const filterHeroById = (heroes, id) => {
  // Find retorna un objeto
  // Filter retorna un arreglo
  const hero = heroes.find((hero) => {
    if (hero.id === id) {
      return hero;
    }
  });
  addHeroToPage(hero);
};

const getHeroById = (id) => {
  fetch("../../backend/db.json")
    .then((response) => response.json())
    .then((data) => filterHeroById(data.heroes, id));
};

initializeComponents();
