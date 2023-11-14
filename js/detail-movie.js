let formulario = document.querySelector(".buscador");

let querystring = location.search;
console.log(querystring);

let querystringobj = new URLSearchParams(querystring);

let informacionformulario = querystringobj.get("formulario");

console.log(informacionformulario);

let url = `https://api.themoviedb.org/3/search/movie?api_key=3e70f944e54851d50cccbf55e9b26736&query=${informacionformulario}`;

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let detalle = data.results;
    console.log(detalle);

    let contenido = "";
    let searchResults = document.querySelector("#sectiondetalle");

    for (let i = 0; i < detalle.length; i++) {
      contenido +=
        `<article>
          <img src="https://image.tmdb.org/t/p/w500/${detalle[i].poster_path}" alt="Movie Poster">
        </article>
  
        <article>
          <h2>${detalle[i].title}</h2>
  
          <div class="info-trailer">
            <h5><span style="text-decoration: underline; margin-right: 8px;">FECHA DE ESTRENO:</span>${detalle[i].release_date}</h5>
            <h5><span style="text-decoration: underline; margin-right: 8px;">DURACIÓN:</span>${detalle[i].runtime} mins</h5>
            <h5><span style="text-decoration: underline; margin-right: 8px;">GENERO:</span>${detalle[i].genres}</h5>
            <h5><span style="text-decoration: underline; margin-right: 8px;">SIPNOSIS:</span>${detalle[i].overview}</h5>
            <h5><span style="text-decoration: underline; margin-right: 8px;">CALIFICACIÓN:</span>${detalle[i].vote_average}</h5>
          </div>
  
          <h4 class="boton-agregar-favoritos">AGREGAR A FAVORITOS</h4>
        </article>`;
    }

    searchResults.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
