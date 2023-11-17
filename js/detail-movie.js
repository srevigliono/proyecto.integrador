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
    let generosRecorridos = " ";
    console.log(pelicula.genres)
    for (let i = 0; i < pelicula.genres.length; i++) {

    generosRecorridos += `<li> <a href = ""> ${pelicula.genres[i].name} </a > </li>`

    }

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
                        <h5> <span style="text-decoration: underline; margin-right: 8px;"> GÉNERO:</span> </h5>
                        <ul>
                         ${generosRecorridos}
                        </ul>
                

                        <h5> <span style="text-decoration: underline; margin-right: 8px;"> CALIFICACIÓN:</span> ${pelicula.vote_average}</h5>

      
                    </div>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/x7Yq9MJUqjY?si=2zZo9agVTBjZ3iil=${pelicula.video}"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen class="video"></iframe>
                </div>

                <div class="parrafo-trailer">
                    <p> ${pelicula.overview}</p>
                </div>


                <h4 class="boton-agregar-favoritos">AGREGAR A FAVORITOS </h4>

                <div>
                <button id = "recomendados">        
                    <h4 class="boton-agregar-favoritos">RECOMENDADOS </h4>
                </button>
                </div>


            </article>`;
    }

    searchResults.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });







  
let recomendados = document.querySelector("#recomendados");

recomendados.addEventListener( "click" , function() {

let APIKey = "3e70f944e54851d50cccbf55e9b26736";
let urlRecomendados = `https://api.themoviedb.org/3/movie/${idPelicula}/recommendations?api_key=${APIKey}`;

fetch(urlRecomendados)
.then(function(response){
	return response.json();
})
.then(function(data){
console.log(data);

let contenido = "";

    for (let i = 0; i < 5; i++) {
      contenido += `<a href="./detail-movie.html?id=${calificadas[i].id}">
      <article>
          <img src="https://image.tmdb.org/t/p/w500/${calificadas[i].poster_path}" alt="Movie Poster">
          <h4>${calificadas[i].title}</h4>
          <p>${calificadas[i].release_date} | ${calificadas[i].vote_average}</p>
      </article>
    </a>`;
    
    }


})

.catch(function(error){
console.log('El error es: ' + error);
})

})