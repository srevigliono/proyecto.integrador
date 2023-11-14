let querystring = location.search;
console.log(querystring);

let querystringobj = new URLSearchParams(querystring);

let url = `https://api.themoviedb.org/3/movie/top_rated?api_key=3e70f944e54851d50cccbf55e9b26736`;

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let movies = data.results;
    console.log(movies);

    let contenido = "";
    let searchResults = document.querySelector("#searchresults");

    for (let i = 0; i < 6; i++) {
        contenido += `<a href="./detail-movie.html?id=${movies[i].id}">
        <article>
             <img src="https://image.tmdb.org/t/p/w500/${movies[i].poster_path}" alt="${movies[i].title}">
             <h4>${movies[i].title}</h4>
             <p>${movies[i].release_date} | ${movies[i].vote_average}</p>
        </article>
      </a>`;
      }

    searchResults.innerHTML = contenido;
  })
  .catch(function (error) {
    console.log("Error en la solicitud API: " + error);
  });


