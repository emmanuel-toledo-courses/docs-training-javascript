const initializeComponents = () => {
  document.querySelector("#search-form").addEventListener("submit", (e) => {
    // Prevenimos la ejecución predefinida
    e.preventDefault();

    // Obtenemos el valor del campo de busqueda
    const superheroName = document.querySelector("#hero-name").value;

    // Consultamos los heroes por nombre
    getHeroesByName(superheroName);
  });

  document.querySelector("#navbar-title").addEventListener("click", () => {
    getHeroes();
  });

  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      const publisher = menuItem.getAttribute("att-publisher");
      if (!publisher) {
        return;
      }
      getHeroesByPublisher(publisher);
    });
  });
};

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

    heroCard.addEventListener("click", () => {
      window.location.href = './pages/hero.html?hero-id=' + hero.id;
    });

    // Agregamos el elemento a el contenedor (similar a un arreglo)
    document.querySelector("#heroes-container").append(heroCard);
  });
};

initializeComponents();
getHeroes();
