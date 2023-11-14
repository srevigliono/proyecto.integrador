let sectiongeners = document.querySelector("#sectiongeners");

let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=3e70f944e54851d50cccbf55e9b26736`;

fetch(url)
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
        `
      <a href="./detail-genres.html" class="suspenso">
        <article>
          <h4>${generos[i].name}</h4>
        </article>
      </a> `;
    }

    sectiongeners.innerHTML = contenido;

  })
  .catch(function (error) {
    console.log("Error : " + error);
  });

  
