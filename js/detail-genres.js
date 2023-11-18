
let querystring = location.search;
let querystringobj = new URLSearchParams(querystring);
let idGenero = querystringobj.get("id");
let APIKey = "3e70f944e54851d50cccbf55e9b26736";

let urlGenerospeliculas = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKey}&with_genres=${idGenero}`;

let tituloGenero = document.querySelector("#tituloGenero");



fetch(urlGenerospeliculas)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let peliculas = data.results; 
    console.log(peliculas);

    let contenido = "";
    let searchResults = document.querySelector("#peliculasGeneros");
    console.log(peliculas.genres)
  
   for (let i = 0; i < peliculas.length; i++) {
      contenido += 
      `
      <a href="./detail-movie.html?id=${peliculas[i].id}">
          <article>
              <img src="https://image.tmdb.org/t/p/w500/${peliculas[i].poster_path}" alt="Movie Poster">
              <h4>${peliculas[i].title}</h4>
              <p>${peliculas[i].release_date} | ${peliculas[i].vote_average}</p>
          </article>
        </a>`;
    }

  searchResults.innerHTML = contenido;

  tituloGenero.innerText = " RESULTADOS"

})

  .catch(function(error) {
    console.log("Error: " + error);
  });


  urlGenerosseries = `https://api.themoviedb.org/3/discover/tv?api_key=${APIKey}&with_genres=${idGenero}`;

  fetch(urlGenerosseries)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let series = data.results; 
      console.log(series)

      let contenido = " ";
      let searchResults = document.querySelector("#seriesGeneros");
      
      for (let i = 0; i < series.length; i++) {
        contenido += 
        `<a href="./detail-serie.html?id=${series[i].id}">
      <article>
          <img src="https://image.tmdb.org/t/p/w500/${series[i].poster_path}" alt="Movie Poster">
          <h4>${series[i].name}</h4>
          <p>${series[i].first_air_date} | ${series[i].vote_average}</p>
      </article>
    </a>`;
      }
  
    searchResults.innerHTML = contenido;
    tituloGenero.innerText = " RESULTADOS"

    })
    .catch(function(error) {
      console.log("Error: " + error);
    });
  