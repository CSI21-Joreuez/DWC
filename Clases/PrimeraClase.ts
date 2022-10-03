(() =>{
class Heroe {
    //!Puedes declarar las variables así
    protected raza: string ;
    private edad: number;
    esGuerrero: Boolean;
    fuerza: number;
    //! Tambien se puede declarar las variables en las porpiedades , como en el "nombre"
    //!                  |       
    //!                 |
    constructor(public nombre: string,raza: string,edad: number,esGuerrero: Boolean,fuerza: number) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.esGuerrero = esGuerrero;
        this.fuerza = fuerza;
    }
public bio(): void
{
let mensaje: string = `${this.nombre} Guerrero: ${this.esGuerrero} su fuerza es: ${this.fuerza}`;
console.log(mensaje);
}

public cambiarEstado(cambio: boolean): string{
return this.cambiaGuerrero(cambio);
}
protected cambiaGuerrero(varlor:boolean): string{
    if(varlor)
    return "Ahora es un Guerrero.";
    else
        return "Ya no es un Guerrero.";
    }
}


let aragorn = new Heroe('Aragorn','Numenoreano',87,true,50);

console.log(aragorn.nombre);

console.log(aragorn.cambiarEstado(true));
})();


