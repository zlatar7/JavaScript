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

//Check-out

let inputCalendario1 = document.querySelector("#check-out")

    inputCalendario1.addEventListener('change', (evt) => {
        let salida = `${evt.target.value}`;
        localStorage.setItem('fechaSalida', salida)

       let infoSalida = document.querySelector("#miFechaS");
       infoSalida.innerHTML = `- Fecha de salida: ${salida}`
});

//Selcet de "personas"

let selectPersonas = document.querySelector("#personas");
            
 selectPersonas.addEventListener('change', (evt)=> {
    let buscar = `${evt.target.value}`;
    localStorage.setItem('personas', buscar)

    let infobuscar = document.querySelector("#miPersonas");
       infobuscar.innerHTML = `- Para ${buscar} persona(s)`
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
    let miFechaSalida = localStorage.getItem('fechaIngreso')
    let miPersonas = localStorage.getItem('personas')
    let miNoches = localStorage.getItem('noches')
    let infoReserva = document.querySelector("#verMiReserva");
    infoReserva.innerHTML =`Su consulta es por ${miPersonas} personas, entre las fechas ${miFechaIngreso} y ${miFechaSalida}, un total de: (${miNoches} noches)`;
    }else{
        let infoNull = document.querySelector("#verMiReserva");
        infoNull.innerHTML = "No hay consultas en el historial";
    }
})

//Boton "limpiar" del calendario

let btnLimpiar = document.querySelector("#btn-limpiar");

btnLimpiar.addEventListener('click', limpiarStorage)

function limpiarStorage () {
localStorage.clear();
location.reload();
}

                        //FUNCIONES COTIZAR ESTADIA
/* 
const preciosHab = arrayHabitacion.map(a => a.precio);

let hSimple = preciosHab.slice(0,1);
let hDoble = preciosHab.slice(1,2);
let hTriple = preciosHab.slice(2,3);
let hCuadruple = preciosHab.slice(3,4);
let hSuite = preciosHab.slice(4,5);
let hDuplex = preciosHab.slice(5,6);

let noches = localStorage.getItem('noches')

switch(noches){
    case 1:cotizar(noches, hSimple)
    break;
    case 2:cotizar(noches, hDoble)
    break;
    case 3:cotizar(noches, hTriple)
    break;
    case 4:cotizar(noches, hCuadruple)
    break;
    case 5:cotizar(noches, hSuite)
    break;
    case 6:cotizar(noches, hDuplex)
    break;
}
let reservaCompleta = document.querySelector("#btn-cotizacion");

reservaCompleta.addEventListener('click', (evt)=>{
    console.log(mulitplicacion());
})

const cotizar = (noches, precio) => {noches * precio}; */