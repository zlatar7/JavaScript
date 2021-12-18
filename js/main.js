                    // ARRAY DE OBJETOS CON LAS HABITACIONES

const arrayHabitacion = [ {nombre: "SIMPLE", capacidad: 1, disponible: true, precio: 1000},
                    {nombre: "DOBLE", capacidad: 2, disponible: false, precio: 1300},
                    {nombre: "TRIPLE", capacidad: 3, disponible: false, precio: 1600},
                    {nombre: "CUADRUPLE", capacidad: 4, disponible: false, precio: 2000},
                    {nombre: "SUITE", capacidad: 2, disponible: true, precio: 2500},
                    {nombre: "DUPLEX", capacidad: 4, disponible: true, precio: 3100}];

                    
                            // CALENDARIO

//Check-in

let inputCalendario = document.querySelector("#check-in")

    inputCalendario.addEventListener('change', (evt) => {
        let ingreso = `${evt.target.value}`;
        localStorage.setItem('fechaIngreso', ingreso)

        let infoIngreso = document.querySelector("#miFechaI");
        infoIngreso.innerHTML = `- Fecha de entrada: ${ingreso}`
});

//Select de "hospedaje"

let selectHospedaje= document.querySelector("#hospedaje");
            
 selectHospedaje.addEventListener('change', (evt)=> {
    let habitacion = `${evt.target.value}`;
    localStorage.setItem('habitacion', habitacion)

    let infobuscar = document.querySelector("#miHabitacion");
       infobuscar.innerHTML = `- ${habitacion}`
});

//Input "noches"

inputNoches = document.querySelector("#noches");

inputNoches.addEventListener('change', (evt)=>{

    let noches = `${evt.target.value}`;
    localStorage.setItem('noches', noches)

    let infoNoches = document.querySelector("#miNoches");
    infoNoches.innerHTML = `- ${noches} noche(s)`;
})

//Boton "ver completo" del calendario

let btnVerCompleto = document.querySelector("#btn-verCompleto");

btnVerCompleto.addEventListener('click', () => {
        let infoReserva1 = document.querySelector("#verCompleto")
        infoReserva1.innerHTML ="Su consulta es por lo siguiente: ";
})

//Boton "cargar" del calendario

let btnCargar = document.querySelector("#btn-cargar");

btnCargar.addEventListener('click', () => {

    if (localStorage.length != 0){
    let miFechaIngreso = localStorage.getItem('fechaIngreso')
    let mihabitacion = localStorage.getItem('habitacion')
    let miNoches = localStorage.getItem('noches')
    let infoReserva = document.querySelector("#verMiReserva");
    infoReserva.innerHTML =`Su consulta es por ${mihabitacion}, a partir de la fecha ${miFechaIngreso}, por un total de: ${miNoches} noche(s)`;
    }else{
        let infoNull = document.querySelector("#verMiReserva");
        infoNull.innerHTML = "No hay consultas en el historial";
    }
})

//Boton "limpiar" del calendario (limpia el storage)

let btnLimpiar = document.querySelector("#btn-limpiar");

btnLimpiar.addEventListener('click', limpiarStorage)

function limpiarStorage () {
localStorage.clear();
location.reload();
}

                        //FUNCIONES COTIZAR ESTADIA

// Precios de las habitaciones
const preciosHab = arrayHabitacion.map(a => a.precio);

let hSimple = parseInt(JSON.stringify(arrayHabitacion[0].precio))
let hDoble = parseInt(JSON.stringify(arrayHabitacion[1].precio));
let hTriple = parseInt(JSON.stringify(arrayHabitacion[2].precio));
let hCuadruple = parseInt(JSON.stringify(arrayHabitacion[3].precio));
let hSuite = parseInt(JSON.stringify(arrayHabitacion[4].precio));
let hDuplex = parseInt(JSON.stringify(arrayHabitacion[5].precio));

// Valores del Storage
let noches = parseInt(localStorage.getItem('noches'));
let habitacion = localStorage.getItem('habitacion');
 
function nights (){

    if (habitacion == "Habitación Simple") {
        cotizar(noches, hSimple);
        
    }else if (habitacion == "Habitación Doble") {
        cotizar(noches, hDoble);

    }else if (habitacion == "Habitación Triple") {
        cotizar(noches, hTriple);

    }else if(habitacion == "Habitación Cuadruple"){
        cotizar(noches, hCuadruple);

    }else if (habitacion == "Suite"){
        cotizar(noches, hSuite)

    }else if (habitacion == "Duplex"){
        cotizar(noches, hDuplex)       
    }
}

// Funcion Refrescar

const refrescar = () => { location.reload();}

// Funcion Cotizar
function cotizar  (noches, precio) {
    let a = noches * precio;
    let b = document.querySelector("#verPrecio");
            b.innerHTML= `Precio de la estadía ${a}`;
}

let reservaCompleta = document.querySelector("#btn-cotizacion");
                        reservaCompleta.addEventListener('click', nights);

let botonRefrescar = document.querySelector("#btn-refrescar");
                    botonRefrescar.addEventListener('click', refrescar);

                    //API DE ACCUWEATHER


const apiKey = 'VjTLvbdq7O59OLPPoM3LISt6fjBovVAm';
const brcKey = '1-5857_1_AL'

const card = document.querySelector("#resultadoClima");
//const detalles = document.querySelector("#")


// función "MOSTRAR PRONÓSTICO EXTENDIDO"

const mostrarClima = async (data) => {
    
    card.innerHTML = `<h3>BARILOCHE</h3>
    <div>${data.Temperature}</div>
    <div></div>
    <div></div>
    <div></div>`;
}
/* const btnMostrarClima = document.querySelector("#btn-clima")
                        btnMostrarClima.addEventListener('click', mostrarClima)
 */
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
/* 
getCity('manchester').then(data => {
    return getWeather(data.Key);
}).then(data => {console.log(data);
}).catch(error => console.log(error)); */