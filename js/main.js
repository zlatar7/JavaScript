                          // SELECT CON PRECIO DEL PASAJE

const selectElement = document.querySelector('#select');

selectElement.addEventListener('change', (event) => {
    const result = document.querySelector('#resultado');
    result.textContent = `Su viaje cuesta ARS$ ${event.target.value}`;});

                //CREACION DE UN PARRAFFO CON LA COTIZACIÓN DEL VIAJE

/* let personas = parseInt(prompt("Cuantas personas van a ser?"))
let dias = parseInt(prompt("Cuantos días piensa alojarse?"))
let habitacion = parseInt(prompt("Cuantas habitaciones necesitas?"))

function Disponibilidad (d, p, h) {
    this.dias = d;
    this.personas = p;
    this.habitacion = h;
    this.reserva = function (){
        if (this.personas <= 5 && this.dias <= 6 && this.habitacion <= 3) {
            document.write("Hay disponibilidad para esos días.")
        } else { document.write("No hay disponibilidad.")  }
    }
}

const hotel = new Disponibilidad (dias, personas, habitacion);

hotel.reserva(); */

                    //BOTON DE +INFO

let btnVerMas = document.querySelector("#btn-verMas");
                btnVerMas.addEventListener('click', agregarInfo)

function agregarInfo (){
    let infoCompleta = document.createElement("p");
    infoCompleta.innerHTML =`<p id="oa" > Esta es toda la informacion completa que tenemos por el momento</p>
                            <hr>`;
    document.querySelector("#masInfo").appendChild(infoCompleta);
    btnVerMas.removeEventListener('click', agregarInfo, false)
}

                    // SEGUNDO BOTON DE +DETALLES

let btnVerMas1 = document.querySelector("#btn-verMas1");
                btnVerMas1.addEventListener('click', verMasInfo)

function verMasInfo (){
    let informacion = document.createElement("p");
    informacion.innerHTML =`<p> La orientación del hotel es en dirección norte con una vista panorámica al Lago Nahuel</p>
                            <hr>`;
    document.querySelector("#infoHabitacion").appendChild(informacion);
    btnVerMas1.removeEventListener('click', verMasInfo, false)
}

                    // ARRAY DE OBJETOS CON LAS HABITACIONES

const arrayHabitacion = [ {nombre: "SIMPLE", capacidad: 1, disponible: "Hay disponilidad"},
                    {nombre: "DOBLE", capacidad: 2, disponible: "No hay disponilidad"},
                    {nombre: "TRIPLE", capacidad: 3, disponible: "No hay disponilidad"},
                    {nombre: "CUADRUPLE", capacidad: 4, disponible: "Hay disponilidad"},
                    {nombre: "SUITE", capacidad: 2, disponible: "Hay disponilidad"},
                    {nombre: "DUPLEX", capacidad: 4, disponible: "Hay disponilidad"}];

                    //AGREGA DIV CON LAS HABITACIONES DISPONIBLES


let verDetalles = document.querySelector("#btn-verDetalles")
                  verDetalles.addEventListener('click', opa);


function opa () {
        for (const room of arrayHabitacion){
                        
            let contenedor = document.createElement("div");
                
            contenedor.innerHTML = `<p> Tipos de habitaciones: ${room.nombre} </p>
            <p> Disponibilidad: ${room.disponible} </p>
            <hr>`;
            document.querySelector('#rooms').appendChild(contenedor)};
            verDetalles.removeEventListener('click', opa, false)
}        