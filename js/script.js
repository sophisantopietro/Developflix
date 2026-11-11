import peliculas from './peliculas.js'
//VARIABLES
const generoAccion = document.getElementById('genero-28');
const generoThriller = document.getElementById('genero-53');
const generoAventura = document.getElementById('genero-12');
const headerContainer = document.querySelector('.header-container');
const categoriasHeader = [
    {
        nombre: 'Accion',
        id: 28
    },
    {
        nombre: 'Thriller',
        id: 53
    },
    {
        nombre: 'Aventura',
        id: 12
    }
]

//FUNCIONES
function recorrerPeliculas(peliculas) {
    peliculas.forEach(pelicula => {
        agregarPelicula(pelicula);
    });
}
function agregarPelicula(pelicula) {
    if (pelicula.genre_ids.includes(28)) {
        agregarTarjeta(pelicula, generoAccion);
    }
    if(pelicula.genre_ids.includes(53)){
        agregarTarjeta(pelicula, generoThriller);
    }
    if(pelicula.genre_ids.includes(12)){
        agregarTarjeta(pelicula, generoAventura);
    }
}

function agregarTarjeta(pelicula, generoTarjeta) {
    const tarjeta = document.createElement('DIV');
    tarjeta.classList.add('tarjeta');
    tarjeta.innerHTML= `
        <img class="imagen-pelicula" src="https://image.tmdb.org/t/p/w500${pelicula.poster_path}" alt="${pelicula.title}">
        <h3>${pelicula.title}</h3>
    `;
    generoTarjeta.appendChild(tarjeta);
}

function generarHeader(categoriasHeader) {
    const contenedorCategorias = document.createElement('DIV');
    contenedorCategorias.classList.add('categorias-header');
    categoriasHeader.forEach(categoria =>{
        const elementoHeader = document.createElement('a');
        elementoHeader.href = `#genero-${categoria.id}`;
        elementoHeader.innerHTML=`
            <p>${categoria.nombre}</p>
        `
        contenedorCategorias.appendChild(elementoHeader);
    });
     headerContainer.appendChild(contenedorCategorias); 
}

//LLAMADA DE FUNCIONES
generarHeader(categoriasHeader);
recorrerPeliculas(peliculas);