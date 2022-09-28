var saludo = "Hola Mundo";
// ! Como se Declara un Array

var frutas = ["Manzanas","Banana"];
// ! Declaración Normal

var nuevoArray = new Array();
// ! Declaracion resumida

var arrayNuevo: string[];
arrayNuevo = ["Alo","Bye"];

// ! Array con Distintos tipos de datos
// Tupla
let heroe: [string,number,boolean] = ["Spiderman",6,false];

alert(saludo);
function area(nombre: string, alto: number, ancho: number)
{
    var laArea = alto*ancho;

    return "Yo soy " + nombre + " con un area de " + laArea+ " cm";
    
}
document.body.innerHTML = area("Cuadrado",30,60);
