let formulario = document.querySelector(".buscador")

let querystring = location.search
console.log(querystring)

let querystringobj = new URLSearchParams (querystring)

let informacionformulario = querystringobj.get("formulario")

console.log(informacionformulario)

fetch("https://api.themoviedb.org/3/search/movie?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2")

.then(function(response) {
    return response.json()
    })

.then(function(data) {
    contenido = data.results
    console.log(contenido)
    document.querySelector("#search-results").innerHTML = "";
  
   })

.catch(function(error) {
    console.log("Error: " + error);
    })




