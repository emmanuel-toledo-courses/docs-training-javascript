document.querySelector("#search-form").addEventListener("submit", (e) => {
    // Prevenir la ejecución predefinida
    e.preventDefault();
    
    const name = document.querySelector("#hero-name").value;
    
    console.log(name);
});