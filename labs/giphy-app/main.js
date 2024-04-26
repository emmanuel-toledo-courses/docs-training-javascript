document
  .querySelector("#search-gifs-form")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const word = getInputValue("#word");
    const gifs = await getGifs(word);
    addGifsInView(gifs);
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
    });
  });

const addGifsInView = (gifs) => {
  
  const gifsContainer = document.querySelector("#gifs-container");
  
  gifs.forEach((gif) => {
    const gifCard = document.createElement("div");
    gifCard.classList.add("gif-card");
    gifCard.setAttribute("att-id", gif.id);

    gifCard.innerHTML = `
      <img src="${gif.url}" alt="">
      <div class="details">
          <i class="fa-solid fa-link"></i>
          <i class="fa-solid fa-heart"></i>
      </div>
      <p class="name">${gif.name}</p>
    `;

    gifsContainer.prepend(gifCard);
  });
};
