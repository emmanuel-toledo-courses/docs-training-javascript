const setFavoritesGifs = (gif) => {
  // Obtenemos gifs
  const gifs = getFavoritesGifs();

  // Validamos si ya existe el gif
  let existsGif = false;
  gifs.forEach((item) => {
    if (item.id === gif.id) {
      existsGif = true;
      return;
    }
  });

  // Si existe no hacemos nada
  if (existsGif === true) return;

  // Agregamos y guardamos en storage si no existe
  gifs.push(gif);
  const serializedGifs = JSON.stringify(gifs);
  localStorage.setItem("favorites-gifs", serializedGifs);
};

const getFavoritesGifs = () => {
  // Obtenemos el valor guardado en el storage
  const notSerializedGifs = localStorage.getItem("favorites-gifs");
  
  // Si no tiene datos aún retornamos arreglo vacio
  if (!notSerializedGifs) {
    return [];
  }

  // Deserializamos el valor string a un JSON y lo retornamos
  const gifs = JSON.parse(notSerializedGifs);
  return gifs;
};
