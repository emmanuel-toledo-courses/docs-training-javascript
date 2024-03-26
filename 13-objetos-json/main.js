const carro = {
  marca: "BMW",
  modelo: "2015",
  color: "Plateado",
  asientos: 5,
  puertas: 2,
  version: "v2.0",
};

// Imprimir objeto completo
console.log(carro);

// Acceder para obtener valor de una una propiedad
console.log(carro.marca);
console.log(carro.modelo);

// Cambiar valor de una variable tipo constante
// Esto aplica SOLO PARA OBJETOS & ARREGLOS
carro.color = "Rojo";
carro.puertas = 4;
console.log(carro);

const empleado = {
  nombre: "Samuel Toledo",
  edad: 30,
  puesto: "Gerente",
  beneficiarios: ["Lucia Castro", "Tania Toledo"],
  jefeDirecto: {
    nombre: "Omar Basurto",
    edad: 40,
    puesto: "Director General",
  },
  // Esto se puede hacer con JavaScript
  trabajar: () => {
    console.log("Estoy trabajando");
  }
};
console.log(empleado.beneficiarios[0]);
console.log(empleado.jefeDirecto);
console.log(empleado.jefeDirecto.nombre);
empleado.trabajar();


