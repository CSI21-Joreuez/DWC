(() =>{
    interface Personaje{
        nombre: string;
        arma: string;
        fuerza: number;
        magia: boolean;
        curar(salud:number): void
    }
    class Villano implements Personaje
    {
        nombre: string;
        arma: string;
        fuerza: number;
        magia: boolean;
        curar(salud: number): void {
            throw new Error("Method not implemented.");
        }
        constructor(n:string,arma:string,fuerza:number,magia:boolean)
        {
            this.nombre = n;
            this.arma = arma;
            this.fuerza = fuerza;
            this.magia = magia;
            this.magia = magia
        }
        

    }

    let montaraz : Personaje ={
        nombre: "Aragorn",
        arma: "Anduril",
        fuerza: 30,
        magia: false,
        curar: function (salud: number): void {
            throw new Error("Function not implemented.");
        }
    }
    let Uruk = new Villano("Lurtz","Espada",25,false);
    console.log(Uruk);
    
})()