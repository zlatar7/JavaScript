                    //BOTON DE +INFO
/*
let btnVerMas = document.querySelector("#btn-verMas");
                btnVerMas.addEventListener('click', agregarInfo)

 function agregarInfo (){
    let infoCompleta = document.createElement("p");
    infoCompleta.innerHTML =`<p" > Esta es toda la informacion completa que tenemos por el momento</p>
                            <hr>`;
    document.querySelector("#masInfo").appendChild(infoCompleta);
    btnVerMas.removeEventListener('click', agregarInfo, false)
}

                    // SEGUNDO BOTON DE +DETALLES

let btnVerMas1 = document.querySelector("#btn-verMas1")
                btnVerMas1.addEventListener('click', verMasInfo);

function verMasInfo (){
    let informacion = document.createElement("p");
    informacion.innerHTML =`<p> La orientación del hotel es en dirección norte con una vista panorámica al Lago Nahuel</p>
                            <hr>`;
    document.querySelector("#infoHabitacion").appendChild(informacion);
    btnVerMas1.removeEventListener('click', verMasInfo, false)
} */

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

inputNoches = document.querySelector("#noches")

inputNoches.addEventListener('change', (evt)=>{

    let noches = `${evt.target.value}`;
    localStorage.setItem('noches', noches)

    let infoNoches = document.querySelector("#miNoches");
    infoNoches.innerHTML = `- ${noches} noche(s)`;
})

//Boton "ver completo" del calendario

let btnVerCompleto = document.querySelector("#btn-verCompleto");

btnVerCompleto.addEventListener('click', () => {
    let infoReserva = document.querySelector("#verCompleto");
        infoReserva.innerHTML ="Su consulta es por lo siguiente: ";
    
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
