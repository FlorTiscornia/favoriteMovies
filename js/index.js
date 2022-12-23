const requestURL = "../json/peliculas.json";


async function fetchMoviesJson(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJson().then(movies => {
    for (let index = 0; index < movies.peliculas.length; index++){

        const moviesSection = document.getElementById('movieSection');

        let id = movies.peliculas[index].id;
        let title = movies.peliculas[index].titulo;
        let director = movies.peliculas[index].director
        let genre= movies.peliculas[index].genero;
        let img = movies.peliculas[index].caratula;
        let abstract = movies.peliculas[index].resumen;

    //console.log(movies.peliculas[index].titulo);

        moviesSection.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${img}" class="card-img-top" alt="image movie">
                <div class="card-body">
                <h3 class="card-title">${id}. ${title}</h3>
                <p class="card-text">Resúmen: ${abstract}</p>
                </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">Género: ${genre}</li>
                    <li class="list-group-item">Director: ${director}</li>
                    </ul>
                </div>
            </div>
    `
    };
})