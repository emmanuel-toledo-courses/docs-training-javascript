class Empleado extends Persona {
  #salario; // Propiedad privada

  constructor(nombre, apellidos, puesto, salario) {
    super(nombre, apellidos);
    this.puesto = puesto;
    this.#salario = salario;
  }

  #cobrarImpuestos() { // Función privada
    if(this.#salario > 10000) {
        return true;
    } else {
        return false;
    }
  }

  // Getter (getSalario)
  obtenerSalario() {
    return this.#salario;
  }

  // Setter (setSalario)
  establecerSalario(nuevoSalario) {
    
    this.#salario = nuevoSalario;
    
    const cobrar = this.#cobrarImpuestos();

    if(cobrar === true) {
        console.log('Cobraremos el 10%');
    } else {
        console.log('No te cobraremos nada');
    }

  }
}
