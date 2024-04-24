/**
 * Función para filtrar y agregar un arreglo de 'Heroes' en la vista HTML.
 * @param {*} data
 * @param {*} publisher
 */
const filterHeroesByPublisher = (data, publisher) => {
  const heroes = data.heroes.filter((heroe) => {
    // toLowerCase(): Convertir a minuscula un texto
    if (
      heroe.publisher.trim().toLowerCase() === publisher.trim().toLowerCase()
    ) {
      return heroe;
    }
  });
  addHeroesToPage(heroes);
};

const filterHeroesByName = (data, name) => {

  const heroes = data.heroes.filter( (heroe) => {
    // Nombre del superheroe
    const superhero = heroe.superhero.trim().toLowerCase();
    if(superhero.includes(name)) {
      return heroe;
    }
  });

  addHeroesToPage(heroes);
}