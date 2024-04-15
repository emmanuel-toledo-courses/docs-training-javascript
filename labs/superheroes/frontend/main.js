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

initializeComponents();

getHeroes();
