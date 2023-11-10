let formulario = document.querySelector(".buscador")
let moviesapi = "https://api.themoviedb.org/3/movie/now_playing?api_key=1173214cf5e2ac8f2c0ac1c242d0ec8a"

let querystringmovies = location.search
console.log(location.search)

let querystringmoviesobj = new URLSearchParams(querystringmovies)
console.log(querystringmoviesobj.get("resultadosbusqueda"))

fetch(moviesapi)
.then(function(response) {
  return response.json()
})
.then(function(data) {
    console.log(data);
    console.log(data.results)
    let contenidomovies = data.results
    formulario.addEventListener("submit" , function() {



    }
    )



})
.catch(function(error) {
  console.log("Error: " + error);
})
