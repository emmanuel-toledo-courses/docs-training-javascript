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
