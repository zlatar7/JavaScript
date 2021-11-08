/* let kilometros = parseInt(prompt("Ingrese la distancia (km) del destino deseado"))
let dolar = 195
let pesoKm = 10

const dolarizar = (a, b) => a/b;
const distancia = (c, d) => c*d;

function mostrar (monto){
    document.write(`Su viaje tiene una cotización de ${monto} dolares.`);
}

let cotizacion = dolarizar (distancia(kilometros, pesoKm), dolar).toFixed(2); 

mostrar(cotizacion);

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

hotel.reserva(); */

                    // ARRAY DE OBJETOS CON LAS HABITACIONES

const arrayHabitacion = [ {nombre: "SIMPLE", capacidad: 1, disponible: "Hay disponilidad"},
                    {nombre: "DOBLE", capacidad: 2, disponible: "No hay disponilidad"},
                    {nombre: "TRIPLE", capacidad: 3, disponible: "No hay disponilidad"},
                    {nombre: "CUADRUPLE", capacidad: 4, disponible: "Hay disponilidad"},
                    {nombre: "SUITE", capacidad: 2, disponible: "Hay disponilidad"},
                    {nombre: "DUPLEX", capacidad: 4, disponible: "Hay disponilidad"},
]

                    //MUESTRA LAS HABITACIONES DISPONIBLES

  for (const dia of arrayHabitacion){
    document.write(dia.nombre + ": ");
    document.write(dia.disponible + ". ");
}
        //ORDENAMIENTO DESCENDENTE DE ACUERDO A LA CAPACIDAD DE PERSONAS

arrayHabitacion.sort( (a, b) => (a.capacidad > b.capacidad) ? 1 : -1);
console.log(arrayHabitacion);
                
