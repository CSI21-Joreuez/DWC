(() =>{

    interface Heroe{
        nombre: string;
        arma: string;
        fuerza: number;
        magia: boolean;
        curar(salud:number): void
    }

    let montaraz:Heroe = {
        nombre: 'Aragorn',
        arma: 'Anduril',
        fuerza: 20,
        magia: false,
        curar(salud)
        {
            this.fuerza += salud
        }
    }
    let mago:Heroe = {
        nombre: 'Gandalf',
        arma: 'Baston',
        fuerza: 70,
        magia: true,
        curar(salud)
        {
            this.fuerza *= salud
        }
        
    }
    montaraz.curar(3);
    console.log(montaraz.fuerza);


})()