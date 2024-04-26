const SERVICE_URL = "https://api.giphy.com/v1";
const API_KEY = "IB0m2jpRhH56Z3nvylXDtNPPDW2bowyj";
const LIMIT = 8;

const getGifs = async (word, offset = 0) => {
  // Preparamos la solicitud (la url o endpoint).
  const url = `${SERVICE_URL}/gifs/search?`;
  const queryParams = new URLSearchParams({
    api_key: API_KEY,
    limit: LIMIT,
    q: word,
    offset: offset,
  });

  // Consumir web service
  const response = await fetch(url + queryParams, {
    method: "GET",
  });

  // Verificamos el estado de la solicitud ¿fue exitoso?
  if (!response.ok) {
    console.warn("Ocurrio un error al consultar la API");
    return undefined;
  }

  // Obtenemos el resultado del servicio web.
  const responseBody = await response.json();

  // Limpiamos nuestro modelo.
  const gifs = responseBody.data.map((item) => {
    const gif = new Gif(item.id, item.title, item.images.downsized.url, false);
    return gif;
  });
  return gifs;
};
