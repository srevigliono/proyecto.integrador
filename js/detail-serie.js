let querystring = location.search;
let querystringobj = new URLSearchParams(querystring);
let idSerie = querystringobj.get("id");

let APIKey = "3e70f944e54851d50cccbf55e9b26736";
let urlSerie = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${APIKey}`;

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
                <img src=""https://image.tmdb.org/t/p/w500/${serie.poster_path}">
            </article>

            <article>

                <h2>${serie.name}</h2>

                <div class="trailer">

                    <div class="info-trailer">

                        <h5> <span style="text-decoration: underline; margin-right: 8px;"> FECHA DE ESTRENO:</span>2016 </h5>
                        <h5> <span style="text-decoration: underline; margin-right: 8px;"> DURACIÓN: </span> 4 TEMPORADAS  </h5>
                        <h5> <span style="text-decoration: underline; margin-right: 8px;"> GÉNERO:</span> Ciencia
                            ficción</h5>

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
                    <p> "Stranger Things" es una serie de ciencia ficción ambientada en los años 80, donde la
                        desaparición de un niño desencadena eventos paranormales en el pueblo de Hawkins, Indiana. Un
                        grupo de amigos se embarca en una búsqueda para encontrarlo, enfrentando criaturas aterradoras y
                        un laboratorio gubernamental oscuro. La serie combina nostalgia, amistad y terror sobrenatural
                        mientras los personajes luchan por sobrevivir y descubrir los secretos de su comunidad.=${serie.overview}</p>
                </div>


                <h4 class="boton-agregar-favoritos">AGREGAR A FAVORITOS </h4>


            </article>`;
    }

    searchResults.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });
