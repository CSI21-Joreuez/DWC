/*
Crea una Clase llamada personaje, que tenga las siguiente porpiedades y metodos
Propiedades:
Nombre, alias, raza, fuerza
Metodos:
    getNombre() --> Devuelve el nombre y el alias
    getFuerza() --> Devuelve la fuerza
La raza no se puede cambiar desde fuera de la clase
*/

class personaje
{
    constructor(public Nombre:string, private raza:string, public fuerza:string)
    {
        this.Nombre = Nombre;
        this.fuerza = fuerza;
        this.raza = raza;
    }
    //!Metodos;
    getNombre():string
    {
        return this.Nombre;
    }
    getFuerza():string
    {
        return this.fuerza;
    }
}
