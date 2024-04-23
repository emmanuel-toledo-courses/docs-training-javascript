const _serviceURL = "https://restcountries.com/v3.1/";

const _elementLoader = document.querySelector("#loader");
const _elementFilterForm = document.querySelector("#filter-form");
const _elementCountriesContainer = document.querySelector(
  "#countries-container"
);

const initializeComponents = () => {
  _elementFilterForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.querySelector("#txt-name").value;
    const region = document.querySelector("#chk-region").value;

    await getCountries(name, region);
  });
};

const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const cleanCountries = (data) => {
  return data.map((country) => {
    return {
      common: country.name.common,
      official: country.name.official,
      capital: country.capital,
      population: country.population,
      region: country.region,
      flag: country.flags.svg,
      map: country.maps.googleMaps,
    };
  });
};

const filterCountriesByName = (data, name) => {
  return data.filter((country) => {
    if (
      country.official.toLowerCase().includes(name) ||
      country.common.toLowerCase().includes(name)
    ) {
      return country;
    }
  });
};

const addCountriesToView = (countries) => {
  if (countries.length === 0) {
    _elementCountriesContainer.innerHTML = `
      <p class="empty">No se encontraron países con los datos proporcionados</p>
    `;
    return;
  }

  countries.forEach((country) => {
    const elementCountry = document.createElement("div");
    elementCountry.classList.add("country");

    elementCountry.innerHTML = `
      <div class="info">
          <p>Nombre oficial: <span>${country.official}</span></p>
          <p>Nombre común: <span>${country.common}</span></p>
          <p>Región: <span>${country.region}</span></p>
          <p>Cápital: <span>${country.capital}</span></p>
          <p>Población: <span>${numberWithCommas(country.population)}</span></p>
      </div>
    `;

    const img = document.createElement("img");
    img.src = country.flag;
    img.alt = country.official;
    img.loading = "lazy";
    img.addEventListener("click", () => window.open(country.map));

    elementCountry.prepend(img);
    _elementCountriesContainer.append(elementCountry);
  });
};

const getCountries = async (name = undefined, region = undefined) => {
  _elementCountriesContainer.innerHTML = "";

  _elementLoader.classList.remove("display-hide");
  _elementLoader.classList.add("display-flex");

  let url = _serviceURL;
  if (region) url += `region/${region}`;
  else url += "all";

  const response = await fetch(url);
  const data = await response.json();

  let countries = cleanCountries(data);

  if (name) {
    countries = filterCountriesByName(countries, name.toLowerCase());
  }

  setTimeout(() => {
    addCountriesToView(countries);
    _elementLoader.classList.remove("display-flex");
    _elementLoader.classList.add("display-hide");
  }, 1000);
};

initializeComponents();
getCountries();
