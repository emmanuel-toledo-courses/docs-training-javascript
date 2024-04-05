

// ABSTRACCIÓN & HERENCIA
const perro = new Perro("Solovino", "Pastor Aleman");
console.log(perro);

const gato = new Gato("Gardfield", "Naranja");
console.log(gato);


// POLIMORFISMO
const sonidoAnimal = (animal) => {
    animal.hacerSonido();
}

sonidoAnimal(perro);
sonidoAnimal(gato);

