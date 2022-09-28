"use strict";
var saludo = "Hola Mundo";
var frutas = ["Manzanas", "Banana"];
var nuevoArray = new Array();
var arrayNuevo;
arrayNuevo = ["Alo", "Bye"];
let heroe = ["Spiderman", 6, false];
alert(saludo);
function area(nombre, alto, ancho) {
    var laArea = alto * ancho;
    return "Yo soy " + nombre + " con un area de " + laArea + " cm";
}
document.body.innerHTML = area("Cuadrado", 30, 60);
