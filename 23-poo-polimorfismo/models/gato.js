class Gato extends Animal {
  constructor(nombre, color) {
    super(nombre);
    this.color = color;
  }

  hacerSonido() {
    console.log("Miau miau");
  }
}
