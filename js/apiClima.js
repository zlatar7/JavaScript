                                 //API DE ACCUWEATHER


                                //   CLAVES

const apiKey = 'igZykABGWowe24FoJZkpqyfn4sVTcpgY';
const brcKey = '1-5857_1_AL'

                                // SELECTORES

const formularioCiudad = document.querySelector('.change-location');
const tarjeta = document.querySelector('.tarjeta');
const detalles = document.querySelector('.details');
const tiempo = document.querySelector('img.time')
const icono = document.querySelector('.icon img')
const card = document.querySelector("#resultadoClima");


                                // función "MOSTRAR PRONÓSTICO EXTENDIDO"

const mostrarClima = async (data) => {
    
    card.innerHTML = `<h3>BARILOCHE</h3>
    <div>${data.Temperature}</div>
    <div></div>
    <div></div>
    <div></div>`;
}

                                // función "OBTENER DATOS DEL CLIMA"

const getWeather = async (id) => {
    
    const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${id}?apikey=${apiKey}&metric=true`;

    const respuesta = await fetch(baseUrl + query);
    const data = await respuesta.json();
    
        return data[0];
}

                                // función "ELEGIR CIUDAD"

const getCity = async (city) =>{
    const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const query = `?apikey=${apiKey}&q=${city}`;

    const respuesta = await fetch(baseUrl + query);
    const data = await respuesta.json();
    
    return data[0];
}

                        // función "ACTUALIZAR LA INFORMACION" del clima

const actualizarInfo = (data) =>{

const detallesCiudad = data.detallesCiudad;
const clima = data.clima;

detalles.innerHTML = `<h6 class="my-3">${detallesCiudad.EnglishName}</h6>
                    <div class="my-3">${clima.WeatherText}</div>
                    <div class="display-4 my-4">
                    <span>${clima.Temperature.Metric.Value}</span>
                    <span>&deg;C</span>
                    </div>`;

                    //agrega los iconos del clima al DOM

const iconSrc = `../JavaScript/archivos multimedia/iconos/${clima.WeatherIcon}.png`;
                    icono.setAttribute('src', iconSrc)

                    //agrega imagenes al card del clima

    let tiempoSrc = null;

if (clima.IsDayTime) {
        tiempoSrc = '../JavaScript/archivos multimedia/iconos/dia.gif';

        let dia = document.querySelector("#parrafoDia");
        dia.innerHTML="DÍA";  
    }else{
        tiempoSrc = '../JavaScript/archivos multimedia/iconos/noche.gif';
        let noche = document.querySelector("#parrafoDia");
        noche.innerHTML="NOCHE";
    }

    tiempo.setAttribute('src', tiempoSrc)                    
};


                        //FUNCIÓN DE ACTUALIZAR LA UBICACIÓN


const actualizarCiudad = async (city) =>{

const detallesCiudad = await getCity(city);
const clima = await getWeather(detallesCiudad.Key);

return{detallesCiudad, clima,};

};

                    //EVENTO SUBMIT DEL INPUT "UBICACIÓN (ciudad)"

formularioCiudad.addEventListener('submit', e =>{

    e.preventDefault();

    const city = formularioCiudad.city.value.trim();
    formularioCiudad.reset();

    actualizarCiudad(city)
    .then(data => actualizarInfo(data))
    .catch(error => console.log(console.log(error))
    );
});