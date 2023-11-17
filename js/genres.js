let urlParams = new URLSearchParams(location.search);
let genreId = urlParams.get("id");

let sectiongeners = document.querySelector("#sectiongeners");

let urlgeneropeliculas = `https://api.themoviedb.org/3/genre/movie/list?api_key=3e70f944e54851d50cccbf55e9b26736`;

let botonPeliculas = document.querySelector("#boton_peliculas")
    
  botonPeliculas.addEventListener( "click" , function () {

    fetch(urlgeneropeliculas)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let generos = data.genres;
      console.log(generos);
  
      let contenido = "";
  
      for (let i = 0; i < generos.length; i++) {
        contenido += 
        
        `<a href="./detail-genres.html?id=${generos[i].id}" class="suspenso">
        <article>
          <h4>${generos[i].name}</h4>
        </article>
        </a>`;
  
      }
  
    sectiongeners.innerHTML = contenido;
  
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });

  })

let urlgeneroseries = `https://api.themoviedb.org/3/genre/tv/list?api_key=3e70f944e54851d50cccbf55e9b26736`;

let botonSeries = document.querySelector("#boton_series")
    
  botonSeries.addEventListener( "click" , function () {

    fetch(urlgeneroseries)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let generos = data.genres;
      console.log(generos);
  
      let contenido = "";
  
      for (let i = 0; i < generos.length; i++) {
        contenido += 
        
        `<a href="./detail-genres.html?id=${generos[i].id}" class="suspenso">
        <article>
          <h4>${generos[i].name}</h4>
        </article>
        </a>`;
  
      }
  
    sectiongeners.innerHTML = contenido;
  
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });

  })