let formulario = document.querySelector(".buscador")
let moviesapi = "https://api.themoviedb.org/3/movie/now_playing?api_key=1173214cf5e2ac8f2c0ac1c242d0ec8a"

let querystringmovies = location.search

let querystringmoviesobj = new URLSearchParams(querystringmovies)
let querystringformulario = querystringmoviesobj.get("formulario")
console.log(querystringformulario)

fetch(moviesapi)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    let contenido = data.results;
    if (querystringformulario == "Movies") {
      for (let i = 0; i < contenido.length; i++) {
        let titulopelicula = contenido[i].title;
        console.log(titulopelicula);
      }
    }
      for (let i = 0; i < contenido.length; i++) {
        let titulopelicula = contenido[i].title;
        console.log(titulopelicula);
     
      }
  })
  .catch(function(error) {
    console.log("Error: " + error);
  })
