


/*
let formulario = document.querySelector(".buscador");

let querystring = location.search;
console.log(querystring);

let querystringobj = new URLSearchParams(querystring);

let informacionformulario = querystringobj.get("formulario");

console.log(informacionformulario);

let APIKey = "3e70f944e54851d50cccbf55e9b26736";
let urlpeliculasGeneros = `https://api.themoviedb.org/3/genre/movie/list?api_key=${APIKey}&query=${informacionformulario}`;

fetch(urlpeliculasGeneros)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let generos = data.results;
    console.log(generos);

    let contenido = "";
    let searchResults = document.querySelector("#peliculasGeneros");

    for (let i = 0; i < peliculasGeneros.length; i++) {
      contenido +=
      `<a href="./detail-movie.html=${generos[i].id}">
      <article>
           <img src="./Imagenes/pelicula2012.jpeg=${generos[i].poster_path}" alt="2012">
           <h4>${generos[i].title}</h4>
           <p>${generos[i].release_date} | ${generos[i].vote_average}</p>
      </article>
  </a>`;
    }

    searchResults.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
*/
