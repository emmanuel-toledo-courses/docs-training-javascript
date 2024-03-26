const arreglo = new Array(5);
arreglo[0] = 1
arreglo[1] = 2
arreglo[2] = 3
// arreglo[3] = 4
// arreglo[4] = 5
console.log(arreglo);


const venom = {
  alterEgo: "Venom",
  name: "Eddie",
};

const heroes = [
  {
    alterEgo: "Spider-man",
    name: "Petter Parker",
  },
  {
    alterEgo: "Capitan America",
    name: "Steve",
  },
];

// push & unshift
heroes.push(venom);
heroes.push({
  alterEgo: "Iron man",
  name: "Tony",
});

// pop & shift
heroes.pop();
heroes.shift();

// includes en objetos evalua el espacio en memoria
console.log(heroes.includes({
  alterEgo: "Venom",
  name: "Eddie",
}));
console.log(heroes.includes(venom));

heroes.reverse();

// Solo funciona con números o strings (DATOS EN CRUDO NO CON OBJETOS)
heroes.sort();

console.log(heroes);
