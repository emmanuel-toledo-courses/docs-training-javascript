/**
 * Función para obtener todos los superheroes sin filtro.
 */
const getAllHeroes = () => {
  // fetch es para consultar o consumir servicios web
  // ./ = directorio donde me encuentro
  // ../ = salir al directorio padre
  fetch("./../backend/db.json") // Retorna: Promise<Fetch>
    // Recibe resolve de Fetch
    .then((response) => response.json()) // Retorna: Promise<JSON>
    // Recibe resolve de JSON
    .then((data) => addHeroesToPage(data.heroes));
};

/**
 * Función para obtener los heroes que pertenecen a un 'publicador' especifico
 * @param {*} publisher
 */
const getHeroesByPublisher = (publisher) => {
  fetch("./../backend/db.json")
    .then((response) => response.json())
    .then((data) => filterHeroesByPublisher(data, publisher));
};
