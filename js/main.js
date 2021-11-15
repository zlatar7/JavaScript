                        //FUNCIONES DE PEDIDO DE DISTANCIA Y DOLARIZACIÓN

let kilometros = parseInt(prompt("Ingrese la distancia (km) del destino deseado"))
let dolar = 195
let pesoKm = 10 

const dolarizar = (a, b) => a/b;
const distancia = (c, d) => c*d;

let cotizacion = dolarizar (distancia(kilometros, pesoKm), dolar).toFixed(2); 

                //CREACION DE UN PARRAFFO CON LA COTIZACIÓN DEL VIAJE


let show = document.createElement("p");
show.innerHTML = "Su viaje cuesta USD$ " + cotizacion;
document.body.appendChild(show);


/*
let personas = parseInt(prompt("Cuantas personas van a ser?"))
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

hotel.reserva();*/
                    // ARRAY DE OBJETOS CON LAS HABITACIONES

const arrayHabitacion = [ {nombre: "SIMPLE", capacidad: 1, disponible: "Hay disponilidad"},
                    {nombre: "DOBLE", capacidad: 2, disponible: "No hay disponilidad"},
                    {nombre: "TRIPLE", capacidad: 3, disponible: "No hay disponilidad"},
                    {nombre: "CUADRUPLE", capacidad: 4, disponible: "Hay disponilidad"},
                    {nombre: "SUITE", capacidad: 2, disponible: "Hay disponilidad"},
                    {nombre: "DUPLEX", capacidad: 4, disponible: "Hay disponilidad"}];

                    //AGREGA DIV CON LAS HABITACIONES DISPONIBLES

  for (const room of arrayHabitacion){

    let contenedor = document.createElement("div");
    
    contenedor.innerHTML = `<p> Tipos de habitaciones: ${room.nombre} </p>
                            <p> Disponibilidad: ${room.disponible} </p>
                            <br>`;
    document.body.appendChild(contenedor);
}
        //ORDENAMIENTO DESCENDENTE DE ACUERDO A LA CAPACIDAD DE PERSONAS

 //arrayHabitacion.sort( (a, b) => (a.capacidad > b.capacidad) ? 1 : -1);