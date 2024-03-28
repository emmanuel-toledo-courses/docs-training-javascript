// LABORATORIO SUPERHEROES
// CRUD: Create, Read, Update, Delete.
// 1. INSERTAR SUPERHEROE (CREATE)
// 2. EDITAR SUPERHEROE (UPDATE)
// 3. CONSULTAR SUPERHEROES (GET - READ)
// 4. ELIMINAR SUPERHEROE (DELETED)

const dbSuperHeroes = []; // Base de datos simulada (en memoria);
let lastId = 0;

/**
 * Función para crear un nuevo heroe dentro
 * de la base de datos en memoria.
 * @param {string} name Nombre del superheroe
 * @param {string} city Ciudad del superheroe
 * @param {number} age Edad del superheroe
 */
const createHero = (name, city, age) => {
  lastId++;
  const hero = {
    id: lastId,
    name,
    city,
    age,
  };
  dbSuperHeroes.push(hero);
};

/**
 * Función para actualizar un superheroe
 * @param {number} id Identificador único del registro
 * @param {string} name Nombre del superheroe
 * @param {string} city Ciudad del superheroe
 * @param {number} age Edad del superheroe
 */
const updateHero = (id, name, city, age) => {

  // for (const index in dbSuperHeroes) {
  //   const hero = dbSuperHeroes[index];
  //   if(hero.id === id) {

  //     if(name !== undefined) {
  //       hero.name = name;
  //     }

  //     if(city !== undefined) {
  //       hero.city = city;
  //     }

  //     if(age !== undefined) {
  //       hero.age = age;
  //     }
  //     break;
  //   }
  // }

  const hero = dbSuperHeroes.find((item) => {
    if (item.id === id) {
      return item;
    }
  });

  if (hero === undefined) {
    console.log(`El heroe con el id '${id}' no existe`);
    return;
  }

  if(name !== undefined) {
    hero.name = name;
  }

  if(city !== undefined) {
    hero.city = city;
  }

  if(age !== undefined) {
    hero.age = age;
  }
};

/**
 * Función para obtener listado de heroes
 */
const getHeroes = () => {
  return [...dbSuperHeroes];
};

/**
 * Función para obtener un heroe especifico
 * @param {number | undefined} id Identificador único del registro
 */
const getHero = (id = undefined) => {
  const hero = dbSuperHeroes.find((item) => {
    if (item.id === id) {
      return item;
    }
  });

  if (hero === undefined) {
    console.log(`El heroe con el id '${id}' no existe`);
  }

  return hero;
};

/**
 * Elimina un heroe de la base de datos
 * @param {number} id Identificador único del registro
 */
const removeHero = (id) => {
  // La función 'find' retorna un objeto en particular
  const hero = dbSuperHeroes.find((item) => {
    if (item.id === id) {
      return item;
    }
  });

  if (hero === undefined) {
    console.log(`El heroe con el id '${id}' no existe`);
    return;
  }

  // La función 'indexOf' obtiene el indice de un valor dentro de un arreglo
  const index = dbSuperHeroes.indexOf(hero);

  // La función 'splice' elimina o quita de un arreglo, el o los elementos deseados,
  // a partir de un indice de inicio, y la cantidad de elementos a eliminar.
  dbSuperHeroes.splice(index, 1);
};

createHero("Spider-Man", "New York", 29);
createHero("Hulk", "New York", 50);
createHero("Iron man", "New York", 40);

removeHero(3);

updateHero(1, undefined, "Los Angeles", 20);

const hero = getHero(1);
console.log(hero);

const heroes = getHeroes();
console.log(heroes);
