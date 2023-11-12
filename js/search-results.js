let formulario = document.querySelector(".buscador")

let querystring = location.search
console.log(querystring)

let querystringobj = new URLSearchParams (querystring)

let informacionformulario = querystringobj.get("formulario")

console.log(informacionformulario)

let url = `https://api.themoviedb.org/3/tv/airing_today?api_key=8ba8bbe7dfab5ab5da50fbbbaf3e12a2&$query=${informacionformulario}`


fetch(url)

.then(function(response) {
    return response.json()
    })

.then(function(data) {
    console.log(data)
    contenido = data.results
    console.log(contenido)

    let series = ""

    for (let i = 0 ; i < contenido.lenght ; i++) {


    }



   })

.catch(function(error) {
    console.log("Error: " + error);
    })




