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

      generosRecorridos += `<li> <a href= "./detail-genres.html?id=${pelicula.genres[i].id}" style="text-decoration: none; color: inherit;"> <h5>${pelicula.genres[i].name}</h5> </a > </li>`;

    

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


           


                <div>
                
            </article>
           
`;
    }

    searchResults.innerHTML = contenido;

  })
  .catch(function(error) {
    console.log("Error: " + error);
  });




  let recomendadosLoaded = false;

document.querySelector("#recomendados").addEventListener("click", function() {
  if (!recomendadosLoaded) {
  
    urlrecomendados = 'https://api.themoviedb.org/3/movie/top_rated?api_key=2824d7c18fccbca72f06f7f29e7ebcd8';

    


    fetch(urlrecomendados)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        let recomendados = document.querySelector("#info_recomendados");

        for (let i = 0; i < 5; i++) {
          recomendados.innerHTML +=
            `<a href="./detail-movie.html?id=${data.results[i].id}" class="section_html">
              <article>
                <img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}" alt="Movie Poster">
              </article>
            </a>`;
        }

        recomendadosLoaded = true;
      })
      .catch(function(error) {
        console.log("Error: " + error);
      });
  }

  let section = document.querySelector("#info_recomendados");
  section.style.display ="flex";
});

//Para hacer lo de la recomendación de películas lo buscamos por nuestra cuenta a algunas cosas ya que no logramos hacerlo con el contenido de la clase. 