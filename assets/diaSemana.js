let semanas = parseInt(prompt("ingrese un numero del 1 al 7"))

let lunes= 1
let martes = 2
let miercoles = 3
let jueves = 4
let viernes = 5
let sabado = 6
let domingo = 7



if (semanas === lunes) {
    console.log("El número ingresado es lunes");
} else if (semanas === martes) {
    console.log("El número ingresado es martes");
} else if (semanas === miercoles) {
    console.log("El número ingresado es miercoles");
} else if (semanas === jueves) {
    console.log("El número ingresado es jueves");
} else if (semanas === viernes) {
    console.log("El número ingresado es viernes");
} else if (semanas === sabado) {
    console.log("El número ingresado es sabado");
} else if (semanas === domingo ) {
    console.log("El número ingresado es domingo");
} else {
    console.log("Número fuera de rango");
}