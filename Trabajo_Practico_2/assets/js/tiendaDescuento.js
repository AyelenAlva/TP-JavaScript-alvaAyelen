let cantidad = parseInt(prompt("Ingrese la cantidad de artículos"));
let precioUnitario = parseFloat(prompt("Ingrese el precio unitario de cada artículo en pesos"))

if (cantidad <= 0 || precioUnitario <= 0) {
    console.log("Error, la cantidad y el precio deben ser números mayores a 0")
} else {
    let precioTotal = cantidad * precioUnitario;

    switch (true) {
        case cantidad >= 10 && precioTotal > 20000:
            let descuento = precioTotal * 0.15;
            precioTotal = descuento;
            console.log("Se aplicó un descuento del 15%");
            break;
        case cantidad < 10:
            console.log("No se supero la cantidad mínima de artículos para aplicar el descuento");
            break;
        case precioTotal <= 20000:
            console.log("No se superó el monto minimo para aplicar el descuento");
            break;
        default:
            console.log("Error: No se pudo calcular el descuento");
    }

    console.log("Cantidad de artículos:", cantidad);
    console.log("Precio unitario:", precioUnitario, "pesos");
    console.log("Precio total a pagar:", precioTotal, "pesos");
}
