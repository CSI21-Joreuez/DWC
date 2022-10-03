/*
En el ejercicio 4 te vamos a dar una serie de elementos que tendrás que corregir/completar
para que estén lo más acorde con la forma de hacer que estamos viendo en clase
*/
(function () {
    var fuerza;
    (function (fuerza) {
        fuerza[fuerza["min"] = 10] = "min";
        fuerza[fuerza["med"] = 50] = "med";
        fuerza[fuerza["alto"] = 100] = "alto";
    })(fuerza || (fuerza = {}));
    //? Ejercicio 0. Sigue las instrucciones
    var aragorn = {
        nombre: 'Aragorn',
        raza: 'Numenoreano',
        alias: 'Trancos',
        ejercito: 'La Compañía',
        fuerza: fuerza.alto,
        getFuerza: function () { return this.fuerza; }
    };
    //? Ejercicio 1. Covierte las siguientes funciones en funciones flecha
    // 1.1 Función para devolver la fuerza multiplicada por el resultado aleatorio de una tirada de dados
    // function golpe(tirada: number, personaje: Personaje): number {
    //  return personaje.fuerza * tirada;
    //}
    var golpe = function (tirada, personaje) { return personaje.fuerza * tirada; };
    // 1.2 Función tirada de dados y resolución de la misma
    //function tirada(personaje: Personaje): number {
    //  const DADO = Math.random() * 6;
    //  let resultado = golpe(DADO, personaje);
    //  return resultado;
    //}
    var tirada = function (personaje) {
        var DADO = Math.random() * 6;
        var resultado = golpe(DADO, personaje);
        return resultado;
    };
    // Ejecutamos la tirada del turno del personaje
    console.log(tirada(aragorn));
})();
