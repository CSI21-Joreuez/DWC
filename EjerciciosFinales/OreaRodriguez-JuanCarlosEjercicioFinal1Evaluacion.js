// Vamos a repasar todo lo relacionado con los tipos, las clases, las interfaces
// 0. Crea la carpeta de ejercicioFinal.
// 1. Crea un tipo de nombre Libro con las propiedades titulo, autor, editorial, añoEdicion
// 2. Crea un par de variables del tipo Libro
// 3. Crea un tipo de nombre Revista que herede de libro y que añada la propiedad tematica
// 4. Crea un par de revistas del tipo Revista
// 5. Crea una interfaz Barco con las propiedades tipo, nombre, numeroSerie
// 6. Crea una clase Navio que implemente la interfaz Barco y le añada el constructor correspondiente
// 7. Crea una instancia de Navio: tipo: Fragata, nombre: Santa María, numeroSerie: 101
// 8. Haz los console.log necesarios para comprobar las variables creadas, y el navio creado.
// 9. Modifica el tsconfig para que sólo se compile la carpeta de este ejercicio, pista: usa include
(function () {
    var LordOfTheRings = {
        titulo: "Lord of the Rings",
        autor: "JRR. Tolkien",
        editorial: "George Allen & Unwin HarperCollins",
        anioedicion: 29061954
    };
    var LasCronicasDeNarnia = {
        titulo: "Las Cronicas de Narnia",
        autor: "C.S. Lewis",
        editorial: "Andrés Bello",
        anioedicion: 1952
    };
    var navios = /** @class */ (function () {
        function navios(nombre, numeroSerie, tipo) {
            this.nombre = nombre;
            this.numeroSerie = numeroSerie;
            this.tipo = tipo;
            this.nombre = nombre;
            this.tipo = tipo;
            this.numeroSerie = numeroSerie;
        }
        return navios;
    }());
    var fragata = new navios("Santa María", 101, "Fragata");
    console.log("Se ha Creado un navio con el nombre: " + fragata.nombre + " es un tipo: " + fragata.tipo + " y tiene un numero de Serie: " + fragata.numeroSerie);
    console.log("Se ha Creado un Libro con el nombre: " + LordOfTheRings.titulo + " su autor es: " + LordOfTheRings.autor + " ,La editorial es: " + LordOfTheRings.editorial + " y su año de edicion es: " + LordOfTheRings.anioedicion);
    console.log("Se ha Creado un Libro con el nombre: " + LasCronicasDeNarnia.titulo + " su autor es: " + LasCronicasDeNarnia.autor + " ,La editorial es: " + LasCronicasDeNarnia.editorial + " y su año de edicion es: " + LasCronicasDeNarnia.anioedicion);
})();
