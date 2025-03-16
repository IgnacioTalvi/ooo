/*
Ejercicio 1
Crea una función que pida un número por parámetro y guarde su tabla de multiplicar en un array. El array será el valor devuelto por la función
Ejemplo --> Tabla del 3 --> [3,6,9,12,15,18,21,24,27,30]

Ejercicio 2
Crea una función que pida números por teclado (prompt) y mételos en un array. Cuando el usuario meta un 0, dejaremos de insertar (habrá que usar un bucle que pregunte constantemente). Por último, ordena los números ordenados de menor a mayor y devuelve el array. Prompt() devuelve un string. hay que convertirlo a entero con parseInt() https://www.tutorialspoint.com/how-to-convert-a-string-into-integer-in-javascript

Ejercicio 3
Escriba un programa que pida un año y que escriba si es bisiesto o no. Se recuerda que los años bisiestos son múltiplos de 4, pero los múltiplos de 100 no lo son, aunque los múltiplos de 400 sí.

Ejercicio 4
Contar todas las "o" almacenadas en un array de palabras. En cada posición del array hay una palabra almacenada. Tip: piensa en doble bucle
Ejemplo de datos y llamada a la función
let data = ["yoda", "best", "has", "tortilla", "cAfe", "barrita tomate", "zumo"];
contarCaracteres(data,"a");
*/

// Ejercicio 1

// function tablaMultiplicar(numero) {
//   let array = [];
//   let numeroInicial = 1;

//   for (let i = 0; i < 100; i++)
//     if (numero % (numeroInicial * i) == 0) {
//       array.push(numero);
//     }
// }

// console.log(tablaMultiplicar(8));

// // Ejercicio 2

// let insertarNumero = parseInt(prompt("Inserte un numero aleatorio"));
// let arrayDeNumeros = [];

// function chequearNumero() {
//   while (insertarNumero !== 0) {
//     arrayDeNumeros.push(insertarNumero);
//     insertarNumero = parseInt(prompt("Inserte un numero aleatorio"));
//   }

//   arrayDeNumeros.sort((a, b) => a - b);
//   console.log(arrayDeNumeros);
// }

// chequearNumero();

// Ejercicio 3

function anoBisiesto(ano) {
  if (ano % 400 === 0) {
    console.log("Año bisiesto");
  } else if (ano % 100 === 0) {
    console.log("Año no bisiesto");
  } else if (ano % 4 === 0) {
    console.log("Año bisiesto");
  } else console.log("Año no bisiesto");
}

anoBisiesto(2000);
