let querystring = location.search;
let querystringobj = new URLSearchParams(querystring);
let idPelicula = querystringobj.get("id");

let APIKey = "3e70f944e54851d50cccbf55e9b26736";
let urlPelicula = `https://api.themoviedb.org/3/movie/${idPelicula}?api_key=${APIKey}`

fetch(urlPelicula)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let pelicula = data; 

    let contenido = "";
    let searchResults = document.querySelector("#detail-movie");

    if (pelicula) {
      contenido += `
      <article>
      <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" alt="Portada stranger things" />

            </article>

            <article>

                <h2>${pelicula.original_title}</h2>

                <div class="trailer">

                    <div class="info-trailer">

                        <h5> <span style="text-decoration: underline; margin-right: 8px;"> FECHA DE ESTRENO:</span>${pelicula.release_date} </h5>
                        <h5> <span style="text-decoration: underline; margin-right: 8px;"> DURACIÓN: </span> ${pelicula.runtime} m  </h5>
                        <h5> <span style="text-decoration: underline; margin-right: 8px;"> GÉNERO:</span> ${pelicula.genres[1][1]}</h5>
                        <h5> <span style="text-decoration: underline; margin-right: 8px;"> CALIFICACIÓN:</span> ${pelicula.popularity}</h5>

                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </div>
                    </div>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/x7Yq9MJUqjY?si=2zZo9agVTBjZ3iil"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen class="video"></iframe>
                </div>

                <div class="parrafo-trailer">
                    <p> ${pelicula.overview}</p>
                </div>


                <h4 class="boton-agregar-favoritos">AGREGAR A FAVORITOS </h4>


            </article>`;
    }

    searchResults.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });




/*
let formulario = document.querySelector(".buscador");

let querystring = location.search;
console.log(querystring);

let querystringobj = new URLSearchParams(querystring);

let informacionformulario = querystringobj.get("formulario");


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

 
   if (detalle.length>0){
      contenido +=
        `<article>
          <img src="https://image.tmdb.org/t/p/w500/${detalle[0].poster_path}" alt="Movie Poster">
        </article>
  
        <article>
          <h2>${detalle[0].title}</h2>
  
          <div class="info-trailer">
            <h5><span style="text-decoration: underline; margin-right: 8px;">FECHA DE ESTRENO:</span>${detalle[0].release_date}</h5>
            <h5><span style="text-decoration: underline; margin-right: 8px;">DURACIÓN:</span>${detalle[0].runtime} mins</h5>
            <h5><span style="text-decoration: underline; margin-right: 8px;">GENERO:</span>${detalle[0].genres}</h5>
            <h5><span style="text-decoration: underline; margin-right: 8px;">SIPNOSIS:</span>${detalle[0].overview}</h5>
            <h5><span style="text-decoration: underline; margin-right: 8px;">CALIFICACIÓN:</span>${detalle[0].vote_average}</h5>
          </div>
  
          <h4 class="boton-agregar-favoritos">AGREGAR A FAVORITOS</h4>
        </article>`;
   }
  
    searchResults.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
  */