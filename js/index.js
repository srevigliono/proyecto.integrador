let urlpeliculaspopulares = `https://api.themoviedb.org/3/movie/popular?api_key=3e70f944e54851d50cccbf55e9b26736`;

fetch(urlpeliculaspopulares)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let movies = data.results;
    console.log(movies);

    let contenido = "";

    for (let i = 0; i < 5; i++) {
      contenido += `<a href="./detail-movie.html?id=${movies[i].id}">
      <article>
          <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="Movie Poster">
          <h4>${movies[i].title}</h4>
          <p>${movies[i].release_date} | ${movies[i].vote_average}</p>
      </article>
    </a>`;
    }

    let peliculaspopulares = document.querySelector("#peliculaspopulares");
    peliculaspopulares.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });

let urlseries = `https://api.themoviedb.org/3/tv/popular?api_key=3e70f944e54851d50cccbf55e9b26736`;

fetch(urlseries)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let series = data.results;
    console.log(series);

    let contenido = "";

    for (let i = 0; i < 5; i++) {
      contenido += `<a href="./detail-serie.html?id=${series[i].id}">
      <article>
          <img src="https://image.tmdb.org/t/p/w500/${series[i].poster_path}" alt="Movie Poster">
          <h4>${series[i].name}</h4>
          <p>${series[i].first_air_date} | ${series[i].vote_average}</p>
      </article>
    </a>`;
    }

    let seriesspopulares = document.querySelector("#seriesspopulares");
    seriesspopulares.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error: " + error);
  });

let urlpeliculasclasificadas = `https://api.themoviedb.org/3/movie/top_rated?api_key=3e70f944e54851d50cccbf55e9b26736`;

fetch(urlpeliculasclasificadas)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let calificadas = data.results;
    console.log(calificadas);

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

    let peliculascalificadas = document.querySelector("#peliculascalificadas");
    peliculascalificadas.innerHTML = contenido;
  })
  .catch(function(error) {
    console.log("Error : " + error);
  });


