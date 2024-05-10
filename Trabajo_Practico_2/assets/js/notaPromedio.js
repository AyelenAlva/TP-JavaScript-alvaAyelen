let nota1 = parseInt(prompt("ingrese una nota"))
let nota2 = parseInt(prompt("ingrese una nota"))
let nota3 = parseInt(prompt("ingrese una nota"))

if ( nota1 < 1 || nota1 > 10|| nota2 < 1 || nota2 > 10 || nota3 < 1 || nota3 > 10 ){

console.log("Error: Las notas deben estar entre 1 y 10");
} else {
    let promedio = (nota1 + nota2 + nota3) / 3;
    if (promedio >= 1 && promedio <= 3) {
        console.log("Nota Insuficiente");
    } else if (promedio >= 4 && promedio <= 5) {
        console.log("Nota Regular");
    } else if (promedio >= 6 && promedio <= 7) {
        console.log(" Nota Buena");
    } else if (promedio >= 8 && promedio <= 9) {
        console.log("Nota Muy Buena");
    } else {
        console.log("Nota Sobresaliente");
    }
}