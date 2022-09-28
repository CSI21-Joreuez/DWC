"use strict";
(() => {
    let aragorn = {
        nombre: 'Aragorn Hijo de Arathorn',
        apodos: 'Trancos',
        espada: 'Anduril',
        edad: 85,
        amigos: ['Frodo', 'Gandalf', 'Elrond'],
        getNombre() {
            return `${this.nombre}`;
        }
    };
    let gandalf = {
        nombre: 'Gandalf',
        apodo: 'El Gris',
        espada: 'Glamdring',
        edad: 100,
        amigos: ['Frodo', 'Gandalf', 'Aragorn'],
        getNombre() {
            return this.nombre;
        }
    };
    if (typeof gandalf.edad == 'number') {
        console.log(gandalf.edad);
    }
    else {
        console.log('La edda no es un Numero');
    }
})();
