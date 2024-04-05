class Persona {
  constructor(nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
  }

  _nombreCompleto() {
    return `${this.nombre} ${this.apellidos}`;
  }
}
