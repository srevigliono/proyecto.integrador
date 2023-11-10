let formulario = document.querySelector(".buscador");
let moviesapi = "https://api.themoviedb.org/3/movie/now_playing?api_key=1173214cf5e2ac8f2c0ac1c242d0ec8a";
let querystringmovies = location.search;
let querystringmoviesobj = new URLSearchParams(querystringmovies);
let querystringformulario = querystringmoviesobj.get("formulario");
console.log(querystringformulario);

fetch(moviesapi)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let contenido = data.results;
    console.log(contenido)
    let h1 = document.querySelector("#busquedatitulo").innerText = `BUSCASTE ACERCA DE ${querystringformulario}`;

    if (querystringformulario == "Movies" || querystringformulario == "peliculas") {
      document.querySelector("#busquedatitulo").innerText = "BUSCASTE ACERCA DE PELÍCULAS: ";

      let peliculas_string = `
        <a href="./detail-movie.html">
          <article>
            <img src="./Imagenes/pelicula2012.jpeg" alt="2012">
            <h4>2012</h4>
            <p>2009 | 2h 38m  </p>
          </article>
        </a>

        <a href="./detail-movie.html">
          <article>
            <img src="./Imagenes/olimpobajof.jpeg" alt="Olimpo Bajo Fuego">
            <h4>Olimpo Bajo Fuego</h4>
            <p>2013 | 2h  </p>
          </article>
        </a>

        <a href="./detail-movie.html">
          <article>
            <img src="./Imagenes/cars.jpeg" alt="Cars 1">
            <h4>Cars 1</h4>
            <p>2006 | 1h 57m  </p>
          </article>
        </a>

        <a href="./detail-movie.html">
          <article>
            <img src="./Imagenes/son_niños.jpeg" alt="Son como niños">
            <h4>Son como niños</h4>
            <p>2017 | 1h 42m </p>
          </article>
        </a>

        <a href="./detail-movie.html">
          <article>
            <img src="./Imagenes/dia_del_atentado.jpeg" alt="Día del Atentado">
            <h4>Día del Atentado</h4>
            <p>2017 | 2h 13m  </p>
          </article>
        </a>

        <a href="./detail-movie.html">
        <article>
          <img src="./Imagenes/pelicula2012.jpeg" alt="2012">
          <h4>2012</h4>
          <p>2009 | 2h 38m  </p>
        </article>
      </a>

      <a href="./detail-movie.html">
        <article>
          <img src="./Imagenes/olimpobajof.jpeg" alt="Olimpo Bajo Fuego">
          <h4>Olimpo Bajo Fuego</h4>
          <p>2013 | 2h  </p>
        </article>
      </a>

      <a href="./detail-movie.html">
        <article>
          <img src="./Imagenes/cars.jpeg" alt="Cars 1">
          <h4>Cars 1</h4>
          <p>2006 | 1h 57m  </p>
        </article>
      </a>

      <a href="./detail-movie.html">
        <article>
          <img src="./Imagenes/son_niños.jpeg" alt="Son como niños">
          <h4>Son como niños</h4>
          <p>2017 | 1h 42m </p>
        </article>
      </a>

      <a href="./detail-movie.html">
        <article>
          <img src="./Imagenes/dia_del_atentado.jpeg" alt="Día del Atentado">
          <h4>Día del Atentado</h4>
          <p>2017 | 2h 13m  </p>
        </article>
      </a>

      <a href="./detail-movie.html">
      <article>
        <img src="./Imagenes/pelicula2012.jpeg" alt="2012">
        <h4>2012</h4>
        <p>2009 | 2h 38m  </p>
      </article>
    </a>

    <a href="./detail-movie.html">
      <article>
        <img src="./Imagenes/olimpobajof.jpeg" alt="Olimpo Bajo Fuego">
        <h4>Olimpo Bajo Fuego</h4>
        <p>2013 | 2h  </p>
      </article>
    </a>

    <a href="./detail-movie.html">
      <article>
        <img src="./Imagenes/cars.jpeg" alt="Cars 1">
        <h4>Cars 1</h4>
        <p>2006 | 1h 57m  </p>
      </article>
    </a>

    <a href="./detail-movie.html">
      <article>
        <img src="./Imagenes/son_niños.jpeg" alt="Son como niños">
        <h4>Son como niños</h4>
        <p>2017 | 1h 42m </p>
      </article>
    </a>

    <a href="./detail-movie.html">
      <article>
        <img src="./Imagenes/dia_del_atentado.jpeg" alt="Día del Atentado">
        <h4>Día del Atentado</h4>
        <p>2017 | 2h 13m  </p>
      </article>
    </a>
      `;
      document.querySelector("#searchresults").innerHTML = peliculas_string;
    } else if (querystringformulario == "Series" ) {
      document.querySelector("#busquedatitulo").innerText = "BUSCASTE ACERCA DE SERIES: ";

      let series_string = `
        <a href="./detail-serie.html">
          <article>
            <img src="./Imagenes/house_of_cards_netflix.jpg" alt="House of Cards">
            <h4>House of Cards</h4>
            <p>2018 | 6 Temporadas  </p>
          </article>
        </a>

        <a href="./detail-serie.html">
          <article>
            <img src="./Imagenes/blacklist.png" alt="Black List">
            <h4>Black List</h4>
            <p>2016 | 10 Temporadas  </p>
          </article>
        </a>

        <a href="./detail-serie.html">
          <article>
            <img src="./Imagenes/portada-breaking-bad.jpeg" alt="Breaking Bad">
            <h4>Breaking Bad</h4>
            <p>2012 | 5 Temporadas  </p>
          </article>
        </a>

        <a href="./detail-serie.html">
          <article>
            <img src="./Imagenes/ozark.jpeg" alt="Ozark">
            <h4>Ozark</h4>
            <p>2018 | 4 Temporadas  </p>
          </article>
        </a>

        <a href="./detail-serie.html">
          <article>
            <img src="./Imagenes/strangerthings.jpeg" alt="Stranger Things">
            <h4>Stranger Things</h4>
            <p>2017 | 4 Temporadas   </p>
          </article>
        </a>

        <a href="./detail-serie.html">
        <article>
          <img src="./Imagenes/house_of_cards_netflix.jpg" alt="House of Cards">
          <h4>House of Cards</h4>
          <p>2018 | 6 Temporadas  </p>
        </article>
      </a>

      <a href="./detail-serie.html">
        <article>
          <img src="./Imagenes/blacklist.png" alt="Black List">
          <h4>Black List</h4>
          <p>2016 | 10 Temporadas  </p>
        </article>
      </a>

      <a href="./detail-serie.html">
        <article>
          <img src="./Imagenes/portada-breaking-bad.jpeg" alt="Breaking Bad">
          <h4>Breaking Bad</h4>
          <p>2012 | 5 Temporadas  </p>
        </article>
      </a>

      <a href="./detail-serie.html">
        <article>
          <img src="./Imagenes/ozark.jpeg" alt="Ozark">
          <h4>Ozark</h4>
          <p>2018 | 4 Temporadas  </p>
        </article>
      </a>

      <a href="./detail-serie.html">
        <article>
          <img src="./Imagenes/strangerthings.jpeg" alt="Stranger Things">
          <h4>Stranger Things</h4>
          <p>2017 | 4 Temporadas   </p>
        </article>
      </a>

      <a href="./detail-serie.html">
      <article>
        <img src="./Imagenes/house_of_cards_netflix.jpg" alt="House of Cards">
        <h4>House of Cards</h4>
        <p>2018 | 6 Temporadas  </p>
      </article>
    </a>

    <a href="./detail-serie.html">
      <article>
        <img src="./Imagenes/blacklist.png" alt="Black List">
        <h4>Black List</h4>
        <p>2016 | 10 Temporadas  </p>
      </article>
    </a>

    <a href="./detail-serie.html">
      <article>
        <img src="./Imagenes/portada-breaking-bad.jpeg" alt="Breaking Bad">
        <h4>Breaking Bad</h4>
        <p>2012 | 5 Temporadas  </p>
      </article>
    </a>

    <a href="./detail-serie.html">
      <article>
        <img src="./Imagenes/ozark.jpeg" alt="Ozark">
        <h4>Ozark</h4>
        <p>2018 | 4 Temporadas  </p>
      </article>
    </a>

    <a href="./detail-serie.html">
      <article>
        <img src="./Imagenes/strangerthings.jpeg" alt="Stranger Things">
        <h4>Stranger Things</h4>
        <p>2017 | 4 Temporadas   </p>
      </article>
    </a>
      `;
      document.querySelector("#searchresults").innerHTML = series_string;
    }
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
