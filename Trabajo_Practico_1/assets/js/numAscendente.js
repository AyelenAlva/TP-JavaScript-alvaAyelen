let num2 = parseInt(prompt("ingrese el primer numero"))
let num1 = parseInt(prompt("ingrese el segundo numero"))
let num3 = parseInt(prompt("ingrese el tercer numero"))
console.log("Números de menor a mayor:");

if (num1 <= num2 && num1 <= num3) {
    console.log(num1);
    if (num2 <= num3) {
        console.log(num2);
        console.log(num3);
    } else {
        console.log(num3);
        console.log(num2);
    }
} else if (num2 <= num1 && num2 <= num3) {
    console.log(num2);
    if (num1 <= num3) {
        console.log(num1);
        console.log(num3);
    } else {
        console.log(num3);
        console.log(num1);
    }
} else {
    console.log(num3);
    if (num1 <= num2) {
        console.log(num1);
        console.log(num2);
    } else {
        console.log(num2);
        console.log(num1);
    }
}