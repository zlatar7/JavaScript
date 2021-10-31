let kilometros = parseInt(prompt("Ingrese la distancia (km) del destino deseado"))
let dolar = 195
let pesoKm = 10

const dolarizar = (a, b) => a/b;
const distancia = (c, d) => c*d;

function mostrar (monto){
    document.write(`Su viaje tiene una cotización de ${monto} dolares.`);
}

let cotizacion = dolarizar (distancia(kilometros, pesoKm), dolar).toFixed(2);

mostrar(cotizacion);
