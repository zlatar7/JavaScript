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
*/

let dias = parseInt(prompt("Cuantos días piensa alojarse?"))
let personas = parseInt(prompt("Cuantas personas van a ser?"))
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

hotel.reserva();

