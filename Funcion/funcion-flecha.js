"use strict";
(() => {
    let faraminr = {
        nombre: 'Faramir',
        darOrdenFaramir: function () {
            setTimeout(() => console.log(this.nombre + ' ataca!!!'), 1000);
        }
    };
    faraminr.darOrdenFaramir();
})();
