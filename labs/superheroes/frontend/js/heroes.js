const addItemInView = (heroes) => {
  document.querySelector("#heroes-container").innerHTML = "";

  heroes.forEach((hero) => {
    // Creamos elemento (nodo) tipo div
    const heroCard = document.createElement("div");

    // Agregamos una clase
    heroCard.classList.add("superhero-card");

    // Anexamos el contenido del card de superheroe
    heroCard.innerHTML = `
      <img src="./imgs/${hero.img}.jpg" alt="Spiderman" />
      <div class="info">
          <p>Nombre: <span>${hero.superhero}</span></p>
          <p>Alter ego: <span>${hero.alter_ego}</span></p>
          <p>Publicador: <span>${hero.publisher}</span></p>
          <p>Actores: <span>${hero.characters}</span></p>
          <p>Primer aparición: <span>${hero.first_appearance} Fantasy #15</span></p>
      </div>`;

    // Agregamos el elemento a el contenedor (similar a un arreglo)
    document.querySelector("#heroes-container").append(heroCard);
  });
};

const getHeroes = () => {
  fetch("../backend/db.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addItemInView(data.heroes);
    });
};

const getHeroesByName = (superheroName) => {
  fetch("../backend/db.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const heroes = filterByName(data.heroes, superheroName);
      addItemInView(heroes);
    });
};

const getHeroesByPublisher = (publisher) => {
  fetch("../backend/db.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const heroes = filterByPublisher(data.heroes, publisher);
      addItemInView(heroes);
    });
};
