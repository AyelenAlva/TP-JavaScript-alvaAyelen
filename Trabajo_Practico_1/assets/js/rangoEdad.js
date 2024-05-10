let edad= parseInt(prompt ("ingrese la edad que desee")) ; 

if (edad >= 0 && edad <=12){
console.log ("es niño");
}else if (edad >= 13 && edad <= 19){
    console.log ("adolecente")

}else if (edad >= 20 && edad <= 59){
    console.log ("adulto")

}else{
    console.log ("la edad ingresada es invalida")
}