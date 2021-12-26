                    // ARRAY DE OBJETOS CON LAS HABITACIONES

const arrayHabitacion = [ {nombre: "SIMPLE", capacidad: 1, precio: 1000},
                    {nombre: "DOBLE", capacidad: 2, precio: 1300},
                    {nombre: "TRIPLE", capacidad: 3, precio: 1600},
                    {nombre: "CUADRUPLE", capacidad: 4, precio: 2000},
                    {nombre: "SUITE", capacidad: 2, precio: 2500},
                    {nombre: "DUPLEX", capacidad: 4, precio: 3100}];

                    
                            // SECTION CALENDARIO

//Check-in

let inputCalendario = document.querySelector("#check-in")

    inputCalendario.addEventListener('change', (evt) => {
        let ingreso = `${evt.target.value}`;
        sessionStorage.setItem('fechaIngreso', ingreso)

        let infoIngreso = document.querySelector("#miFechaI");
        infoIngreso.innerHTML = `- Fecha de entrada: ${ingreso}`
});

//Select de "hospedaje"

let selectHospedaje= document.querySelector("#hospedaje");
            
 selectHospedaje.addEventListener('change', (evt)=> {
    let habitacion = `${evt.target.value}`;
    sessionStorage.setItem('habitacion', habitacion)

    let infobuscar = document.querySelector("#miHabitacion");
       infobuscar.innerHTML = `- ${habitacion}`
});

//Input "noches"

inputNoches = document.querySelector("#noches");

inputNoches.addEventListener('change', (evt)=>{

    let noches = `${evt.target.value}`;
    sessionStorage.setItem('noches', noches)

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

    if (sessionStorage.length != 0){
    let miFechaIngreso = sessionStorage.getItem('fechaIngreso')
    let mihabitacion = sessionStorage.getItem('habitacion')
    let miNoches = sessionStorage.getItem('noches')
    let infoReserva = document.querySelector("#verMiReserva");
    infoReserva.innerHTML =`Su consulta es por ${mihabitacion}, a partir de la fecha ${miFechaIngreso}, por un total de: ${miNoches} noche(s)`;
    }else{
        let infoNull = document.querySelector("#verMiReserva");
        infoNull.innerHTML = "No hay consultas en el historial";
    }
})

                        //FUNCIONES COTIZAR ESTADIA

// Precios de las habitaciones

let hSimple = arrayHabitacion[0].precio;
let hDoble = arrayHabitacion[1].precio;
let hTriple = arrayHabitacion[2].precio;
let hCuadruple = arrayHabitacion[3].precio;
let hSuite = arrayHabitacion[4].precio;
let hDuplex = arrayHabitacion[5].precio;

// Valores del Storage

let noches = parseInt(sessionStorage.getItem('noches'));
let habitacion = sessionStorage.getItem('habitacion');

// Funcion para imprimir el precio en el DOM

function imprimir (precio) {
    let parrafo = document.querySelector("#verPrecio");
    parrafo.innerHTML = `${precio}`;
}

//Función de cotización ()

const cotizar = (a , b) => a * b;


// Funcion "night", valida entradas. Aplica "cotizar" e "imprimir"

function nights (tipoHabitacion){

if (tipoHabitacion == "Habitación Simple") {
    let simple = cotizar(noches, hSimple);
    imprimir(simple);

}else if (tipoHabitacion == "Habitación Doble") {
   let doble = cotizar(noches, hDoble);
    imprimir(doble);

}else if (tipoHabitacion == "Habitación Triple") {
    let triple = cotizar(noches, hTriple);
    imprimir(triple);

}else if(tipoHabitacion == "Habitación Cuadruple"){
    let cuadruple = cotizar(noches, hCuadruple);
    imprimir(cuadruple);

}else if (tipoHabitacion == "Suite"){
    let suite = cotizar(noches, hSimple);
    imprimir(suite);

}else if (tipoHabitacion == "Duplex"){
    let duplex = cotizar(noches, hDuplex);
    imprimir(duplex);     
}
}

                            //BOTONES DEL SECTION "MI RESERVA"

// boton para "VER PRECIO"

let refrescar = document.querySelector("#btn-cotizacion");
refrescar.addEventListener('click', ()=>{location.reload();} );
 let reservaCompleta = document.querySelector("#btn-cotizacion");
                        reservaCompleta.addEventListener('click', nights(habitacion));




//Boton de "BORRAR COTIZACIÓN"

let botonBorrar = document.querySelector("#btn-refrescar");

    botonBorrar.addEventListener('click', () => {
        let a = document.querySelector("#verPrecio");
        a.innerHTML = "";
});

//Boton "LIMPIAR HISTORIAL" (limpia el storage)

let btnLimpiar = document.querySelector("#btn-limpiar");
btnLimpiar.addEventListener('click', limpiarStorage)


function limpiarStorage () {
sessionStorage.clear();
}