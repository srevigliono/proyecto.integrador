let querystring = location.search;
let querystringobj = new URLSearchParams(querystring);
let idSerie = querystringobj.get("id");

let APIKey = "3e70f944e54851d50cccbf55e9b26736";
let urlSerie = `https://api.themoviedb.org/3/tv/${id}?api_key=${APIKey}`


fetch(urlSerie)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let serie = data; 

    let contenido = "";
    let searchResults = document.querySelector("#detail-serie");

    if (serie) {
      contenido += `
      <article>
      <img src="https://image.tmdb.org/t/p/w500/${serie.poster_path}" alt="Portada stranger things" />
            </article>

            <article>

                <h2>${serie.original_title}</h2>

                <div class="trailer">

                    <div class="info-trailer">

                        <h5> <span style="text-decoration: underline; margin-right: 8px;"> FECHA DE ESTRENO:</span>${serie.release_date} </h5>
                        <h5> <span style="text-decoration: underline; margin-right: 8px;"> DURACIÓN: </span> ${serie.runtime} m  </h5>
                        <h5> <span style="text-decoration: underline; margin-right: 8px;"> GÉNERO:</span> ${serie.genres[1][1]}</h5>
                        <h5> <span style="text-decoration: underline; margin-right: 8px;"> CALIFICACIÓN:</span> ${serie.popularity}</h5>

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
                    <p> ${serie.overview}</p>
                </div>


                <h4 class="boton-agregar-favoritos">AGREGAR A FAVORITOS </h4>


            </article>`;
    }

    searchResults.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
