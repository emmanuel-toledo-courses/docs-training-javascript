class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }

  hacerSonido() {
    console.log("Guau Guau");
  }
}
