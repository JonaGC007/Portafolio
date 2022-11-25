window.addEventListener('load', obtenerDatos);

function obtenerDatos() {

    const Nasa_API = 'UehjVdBSR0VCHT2IiSJEqBty7Rlie0zaHH2IrcGS';
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${Nasa_API}`;

    fetch(ruta)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarDatos(resultado))
}

function mostrarDatos({ date, explanation, media_type, title, url }) {

    const titulo = document.querySelector('#titulo');
    titulo.innerHTML = title;
    const fecha = document.querySelector('#fecha');
    fecha.innerHTML = date;
    const descripcion = document.querySelector('#descripcion');
    descripcion.innerHTML = explanation;
    const multimedia = document.querySelector('#c_multimedia');
    if (media_type == 'video') {
        multimedia.innerHTML = `
        <iframe class="embed-responsive-item" style="height: 400px; width: 80%" src="${url}" allowfullscreen></iframe>
     `;
    } else {
        multimedia.innerHTML = `<img src="${url}" class="img-fluid" style="height: 400px; width: 80%" alt="${url}">`;
    }
}