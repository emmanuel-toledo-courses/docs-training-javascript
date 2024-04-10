let movements = 0;
let figure = "O";

const boxes = document.querySelectorAll(".box");

const clearBoxes = () => boxes.forEach((box) => (box.innerHTML = ""));

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerHTML !== "") {
      return;
    }

    if (movements === 10) {
      return;
    }

    box.innerHTML = `<p class="absolute">${figure}</p>`;

    movements++;

    if (figure === "O") {
      figure = "X";
    } else {
      figure = "O";
    }
  });
});

document.querySelector("#reset-cat").addEventListener("click", () => {
  clearBoxes();
  movements = 0;
  figure = "O";
});
