
// document = DOM = Todo el HTML
document.addEventListener("keyup", (event) => {
  const text = `${ event.key } - ${ event.code }`;
  
  const h1 = document.querySelector(".key-pushed");
  h1.textContent = text;
  
  // const h1 = document.getElementsByClassName("key-pushed");
  // h1[0].textContent = text;
});



