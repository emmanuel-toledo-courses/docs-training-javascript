let _offset = 0;
let _word = "";

document
  .querySelector("#search-gifs-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    searchGifs(true);
  });

document
  .querySelectorAll(".control-container .clear-icon")
  .forEach((element) => {
    element.addEventListener("click", (e) => {
      const inputId = e.target.getAttribute("att-for");
      const input = document.querySelector(`#${inputId}`);
      if (!input) return;
      input.value = "";
      input.focus();
      document.querySelector("#btn-load-more").disabled = true;
    });
  });

document.querySelector("#word").addEventListener("keyup", (e) => {
  const value = e.target.value;
  if (!value) {
    document.querySelector("#btn-load-more").disabled = true;
    return;
  }
  document.querySelector("#btn-load-more").disabled = false;
});

document.querySelector("#btn-load-more").addEventListener("click", () => {
  searchGifs(false);
});

document.querySelector("#btn-favorites").addEventListener("click", () => {
  const gifs = getFavoritesGifs();
  document.querySelector("#gifs-container").innerHTML = "";
  document.querySelector("#empty-gifs-container").classList.remove("active");
  if (gifs.length <= 0) {
    document.querySelector("#empty-gifs-container").classList.add("active");
    return;
  }
  addGifsInView(gifs);
});

const searchGifs = async (isNewWord) => {
  if (isNewWord) _word = getInputValue("#word");

  if (!_word) return;

  const gifs = await getGifs(_word, _offset);

  _offset += gifs.length;

  addGifsInView(gifs);
};

const addGifsInView = (gifs) => {
  if (gifs.length <= 0) {
    alert("La busqueda no obtuvo ningún resultado");
    return;
  }

  document.querySelector("#empty-gifs-container").classList.remove("active");
  const gifsContainer = document.querySelector("#gifs-container");

  gifs.forEach((gif) => {
    const gifCard = document.createElement("div");
    gifCard.classList.add("gif-card");
    gifCard.setAttribute("att-id", gif.id);

    gifCard.innerHTML = `
      <img src="${gif.url}" alt="">
      <div class="details"></div>
      <p class="name">${gif.name}</p>
    `;

    const btnLink = document.createElement("i");
    btnLink.classList.add("fa-solid");
    btnLink.classList.add("fa-link");
    btnLink.addEventListener("click", () => {
      // Agregamos texto a portapapeles
      navigator.clipboard.writeText(gif.url);
    });

    const btnFavorite = document.createElement("i");
    btnFavorite.classList.add("fa-solid");
    btnFavorite.classList.add("fa-heart");
    btnFavorite.addEventListener("click", () => {
      // Guardamos el gif en favoritos
      setFavoritesGifs(gif);
    });

    gifCard.querySelector(".details").append(btnLink);
    gifCard.querySelector(".details").append(btnFavorite);

    gifsContainer.prepend(gifCard);
  });
};
