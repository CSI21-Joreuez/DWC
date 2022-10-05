/*
Crea una Clase llamada personaje, que tenga las siguiente porpiedades y metodos
Propiedades:
Nombre, alias, raza, fuerza
Metodos:
    getNombre() --> Devuelve el nombre y el alias
    getFuerza() --> Devuelve la fuerza
La raza no se puede cambiar desde fuera de la clase
*/
(() => {
class personaje
{
    constructor(public Nombre:string, private raza:string, public fuerza:number,public alias:string)
    {
        this.Nombre = Nombre;
        this.fuerza = fuerza;
        this.raza = raza;
        this.alias = alias;
    }
    //!Metodos;
    getNombre():string
    {
        return this.Nombre;
    }
    getFuerza():number
    {
        return this.fuerza;
    }
}

let rey:personaje = new personaje('Theoden','Rohirrim',20,'Domador de Caballos');



})()
