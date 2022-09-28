"use strict";
(() => {
    let saludo1 = () => 'Hola Mundo';
    let saludo = () => { return 'Hola Mundo'; };
    const suma = (a, b) => {
        return a + b;
    };
    const juntar = (x, y) => {
        return `${x} ${y}`;
    };
    const longitud = (texto) => {
        return texto.length;
    };
    let miFuncion = suma;
    console.log(miFuncion(2, 55));
})();
