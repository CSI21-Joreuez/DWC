/*
1.  Crea una interface para definir un coche de carreras
    la Interfaz se llamara coche y tendrá las propiedades:
    -Modelo
    -Equipo
    -Pilotos (array de 2 nombres)
    -Color
    Metodos: Acelerar y Frenar

2.  Crear dos variables del tipo de la interfaz coche

3.  Crear una Clase que implemente la interfaz coche
    Añadirle un constructor y dos metodos:
    -Acelerar
    -Frenar
    Para ello aádire una propiedad que sea velocidad, acelerar le sumará 10 a velocidad
    frenar le restará 10 a Velocidad

4.  Crear dos instancias de Coche
*/

(() => {
    interface Coche {
        Modelo: string;
        Equipo: string;
        Pilotos: string[];
        Color: string;
        velocidad: number;
        //!Metodos
        Acelerar(): void;
        Frenar(): void;
    }

    let Nissan: Coche
    {
        Modelo: "GTR";
        Equipo: "Nissan";
        Pilotos: "Wissan";
        color: "Rojo"
        velocidad: 0;
    }
    let Toyota: Coche
    {
        Modelo: "Supra";
        Equipo: "Toyota";
        Pilotos: "Vazquez";
        color: "Azul Oscuro"
        velocidad: 0;
    }

    class Automoviles implements Coche {
        constructor(m: string, e: string, p: string[], c: string, v: number) {
            this.Modelo = m;
            this.Equipo = e;
            this.Pilotos = p;
            this.Color = c;
            this.velocidad = v;

        }
        Modelo: string;
        Equipo: string;
        Pilotos: string[];
        Color: string;
        velocidad: number;
        Acelerar(): void {
            this.velocidad +=10;
        }
        Frenar(): void {
            this.velocidad -=10;        }


        }

    }) ()