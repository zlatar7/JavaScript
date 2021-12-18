const formularioCiudad = document.querySelector('.change-location');
const tarjeta = document.querySelector('.tarjeta');
const detalles = document.querySelector('.details');
const tiempo = document.querySelector('img.time')
const icono = document.querySelector('.icon img')

const actualizarInfo = (data) =>{

const detallesCiudad = data.detallesCiudad;
const clima = data.clima;

detalles.innerHTML = `<h6 class="my-3">${detallesCiudad.EnglishName}</h6>
                    <div class="my-3">${clima.WeatherText}</div>
                    <div class="display-4 my-4">
                    <span>${clima.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                    </div>`;

                    //agregar los iconos al DOM

const iconSrc = `../JavaScript/archivos multimedia/iconos/${clima.WeatherIcon}.png`;
                    icono.setAttribute('src', iconSrc)

                    //agregar imagenes al card del clima

                    let tiempoSrc = null;

if (clima.IsDayTime) {
    tiempoSrc = '../JavaScript/archivos multimedia/iconos/dia.jpg';  
}else{
    tiempoSrc = '../JavaScript/archivos multimedia/iconos/noche.jpg';  
}

tiempo.setAttribute('src', tiempoSrc)

//remover el display:none (d-none) de la clase "tarjeta"

if (tarjeta.classList.contains('d-none')) {
    tarjeta.classList.remove('d-none');
}
                    
};


                        //FUNCIÓN DE ACTUALIZAR LA UBICACIÓN


const actualizarCiudad = async (city) =>{

const detallesCiudad = await getCity(city);
const clima = await getWeather(detallesCiudad.Key);

return{detallesCiudad, clima,};

};

formularioCiudad.addEventListener('submit', e =>{

    e.preventDefault();

    const city = formularioCiudad.city.value.trim();
    formularioCiudad.reset();

    actualizarCiudad(city)
    .then(data => actualizarInfo(data))
    .catch(error => console.log(console.log(error))
    );
});