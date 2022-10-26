/*
  1. Crear una interface para definir un coche de carreras
     La interface se llamará Coche y tendrá las propiedades:
     Modelo
     Equipo
     Pilotos (array de 2 nombres)
     Color
     Velocidad
     Métodos: acelerar y frenar
     
  2. Crear dos variables del tipo de la interfaz Coche

  3. Crear una clase que implemente la interface Coche
     Añadirle un constructor
     y dos métodos: Acelerar y Frenar (para ello añadiré una propiedad que sea Velocidad, acelerar le sumará 10 a Velocidad, frenar le restará 10)

  4. Crea dos instancias de Coche.
*/
(function () {
    //! Creamos Dos Variables del tipo de la interfaz Coche 
    var Toyota;
    {
        Modelo: "Supra";
        Equipo: "Toyota";
        Pilotos: ["Juan", "Albero"];
        Color: "Azul Oscuro";
        Velocidad: 0;
    }
    var Nissan;
    {
        Modelo: "GTR";
        Equipo: "Nissan";
        Pilotos: ["Pablo", "Sergui"];
        Color: "Rojo";
        Velocidad: 0;
    }
    //!Creamos la Clase Automovil que se implementa de Coche y Añadimos el Constructor y los metodos de Acelerado y frenado
    var Automovil = /** @class */ (function () {
        function Automovil(m, e, p, c, v) {
            this.Modelo = m;
            this.Equipo = e;
            this.Pilotos = p;
            this.Color = c;
            this.Velocidad = v;
        }
        Automovil.prototype.Frenar = function () {
            this.Velocidad -= 10;
        };
        Automovil.prototype.Acelerar = function () {
            this.Velocidad += 10;
        };
        return Automovil;
    }());
    //! Creamos Dos Instancias de Tipo Coche
    var Skyline = new Automovil("R34", "Nissan", ["Alberto", "Juan"], "Gris", 0);
    var Shelby = new Automovil("GT500", "Mustang", ["Fran", "Ana"], "Negro Azabache", 0);
    //!Ejecucion de Codigo en Consola
    console.log(Skyline.Equipo + " " + Skyline.Modelo + " conducido por: " + Skyline.Pilotos[0] + " y " + Skyline.Pilotos[1]);
    console.log("***VS***");
    console.log(Shelby.Equipo + " " + Shelby.Modelo + " conducido por: " + Shelby.Pilotos[0] + " y " + Shelby.Pilotos[1]);
    console.log("1...2...3");
    console.log("--------START-------");
    for (var a = 0; a < 10; a++) {
        Skyline.Acelerar();
        Shelby.Acelerar();
    }
    console.log("Skyline: " + Skyline.Velocidad);
    console.log("Skyline: Baja una Marcha");
    Skyline.Frenar();
    console.log("Skyline: " + Skyline.Velocidad);
    console.log("Shelby: " + Shelby.Velocidad);
    console.log("¡¡Ganador " + Shelby.Equipo + ' ' + Shelby.Modelo + '!!');
})();
