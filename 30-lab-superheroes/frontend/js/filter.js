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
