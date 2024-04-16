const filterByPublisher = (heroes, publisher) => {
  const filteredHeroes = heroes.filter((hero) => {
    if (hero.publisher === publisher) {
      return hero;
    }
  });
  return [...filteredHeroes];
};

const filterByName = (heroes, name) => {
  const filteredHeroes = heroes.filter((hero) => {
    if (hero.superhero.toLowerCase().includes(name.toLowerCase())) {
      return hero;
    }
  });
  return [...filteredHeroes];
};
