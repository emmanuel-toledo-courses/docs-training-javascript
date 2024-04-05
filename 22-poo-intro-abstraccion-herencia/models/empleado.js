class Empleado extends Usuario {
  constructor(nombreCompleto, edad, puesto) {
    // Siempre que hay herencia, el super() va primero
    super(); // Hace referencia al constructor de la clase Padre (new Usuario())

    this.nombreCompleto = nombreCompleto;
    this.edad = edad;
    this.puesto = puesto;
  }
}
