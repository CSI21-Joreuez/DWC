(() =>{
class Heroe {
    nombre: string;
    raza: string ;
    edad: number;
    esGuerrero: Boolean;
    fuerza: number;
    constructor(nombre: string,raza: string,edad: number,esGuerrero: Boolean,fuerza: number) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.esGuerrero = esGuerrero;
        this.fuerza = fuerza;
    }

}

let aragorn = new Heroe('Aragorn','Numenoreano',87,true,50);


})();