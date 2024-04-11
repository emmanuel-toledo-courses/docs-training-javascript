class Titan {
  #image;

  constructor(nombre, vida, fuerza) {
    this.nombre = nombre;
    this.vida = vida;
    this.fuerza = fuerza;
  }

  getImage() {
    return this.#image;
  }

  setImage(image) {
    this.#image = image;
  }

  takeLife(vidaQuitada) {
    // this.vida = this.vida - vidaQuitada;
    this.vida -= vidaQuitada;
    if (this.vida <= 0) {
      this.vida = 0;
    }
  }
}

const godzilla = new Titan("Godzilla", 1000, 1000);
godzilla.setImage("./imgs/godzilla.webp");

const kong = new Titan("Kong", 800, 75);
kong.setImage("./imgs/kong.jpg");

const initialize = () => {
  const cardGodzillaImg = document.querySelector("#godzilla > img");
  cardGodzillaImg.setAttribute("src", godzilla.getImage());

  const cardGodzillaName = document.querySelector("#godzilla > .titan-name");
  cardGodzillaName.innerText = godzilla.nombre;

  const cardGodzillaStrong = document.querySelector(
    "#godzilla > .titan-strong"
  );
  cardGodzillaStrong.innerHTML = `Fuerza: ${godzilla.fuerza}`;

  const cardGodzillaLife = document.querySelector("#godzilla > .titan-life");
  cardGodzillaLife.innerText = `Vida: ${godzilla.vida}`;

  const cardKong = document.querySelector("#kong");
  cardKong.innerHTML = `
        <img src="${kong.getImage()}" alt="Kong" />
        <h2 class="titan-name">${kong.nombre}</h2>
        <h3 class="titan-strong">Fuerza: ${kong.fuerza}</h3>
        <h3 class="titan-life">Vida: ${kong.vida}</h3>
    `;
};

document.querySelector("#kong").addEventListener("click", () => {
  if (kong.vida === 0) {
    alert("El titan esta muerto");
    return;
  }
  
  godzilla.takeLife(kong.fuerza);
  
  document.querySelector("#godzilla > .titan-life").innerText = `Vida: ${godzilla.vida}`;
  
  if(godzilla.vida <= 500) {
    document.querySelector("#godzilla").classList.add("danger");
  }
});

document.querySelector("#godzilla").addEventListener("click", () => {
  if (godzilla.vida === 0) {
    alert("El titan esta muerto");
    return;
  }
  
  kong.takeLife(godzilla.fuerza);

  document.querySelector("#kong > .titan-life").innerText = `Vida: ${kong.vida}`;
  
  if(kong.vida <= 500) {
    document.querySelector("#kong").classList.add("danger");
  }
});

initialize();
