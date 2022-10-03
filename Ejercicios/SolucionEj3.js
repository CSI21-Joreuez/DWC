(function () {
    var poder;
    (function (poder) {
        poder[poder["min"] = 1] = "min";
        poder[poder["med"] = 2] = "med";
        poder[poder["alto"] = 3] = "alto";
    })(poder || (poder = {}));
    var sauron = {
        nombre: 'Sauron el Grande',
        raza: 'Maiar',
        fuerza: poder.alto,
        getNombre: function () {
            return this.nombre;
        }
    };
    var saruman = {
        nombre: 'Saruman el Sabio',
        raza: 'Ainur',
        fuerza: poder.med,
        getNombre: function () {
            return this.nombre;
        }
    };
    var Grima = {
        nombre: 'Grima Lengua de Serpiente',
        raza: 'Humano',
        fuerza: poder.min,
        getNombre: function () {
            return this.nombre;
        }
    };
    var getNombre = function (nombre) { return console.log(nombre); };
    var VillanoArray = [sauron, saruman, Grima];
    VillanoArray.forEach(function (villano) { return console.log(villano.nombre); });
})();
