const initializeComponents = () => {
  document.querySelector("#navbar-title").addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  // Obtenemos listados de parametros por URL
  const params = new URLSearchParams(window.location.search);
  // Obtenemos el parametro especifico
  const heroId = params.get("hero-id");
  getHeroById(heroId);
};

const getHeroById = (id) => {
  fetch("../../backend/db.json")
    .then((response) => response.json())
    .then((data) => filterHeroById(data, id));
};

const filterHeroById = (data, id) => {
  const hero = data.heroes.find((hero) => {
    if (hero.id === id) {
      return hero;
    }
  });
  createHeroCard(hero);
};

const createHeroCard = (hero) => {
  // Creamos elemento (nodo) tipo div
  const heroCard = document.createElement("div");

  // Agregamos una clase
  heroCard.classList.add("superhero-card");

  // Anexamos el contenido del card de superheroe
  heroCard.innerHTML = `
      <img src="../imgs/${hero.img}.jpg" alt="Spiderman" />
      <div class="info">
          <p>Nombre: <span>${hero.superhero}</span></p>
          <p>Alter ego: <span>${hero.alter_ego}</span></p>
          <p>Publicador: <span>${hero.publisher}</span></p>
          <p>Actores: <span>${hero.characters}</span></p>
          <p>Primer aparición: <span>${hero.first_appearance} Fantasy #15</span></p>
      </div>`;

  // Agregamos el elemento a el contenedor (similar a un arreglo)
  document.querySelector("#heroes-container").append(heroCard);
};

initializeComponents();
