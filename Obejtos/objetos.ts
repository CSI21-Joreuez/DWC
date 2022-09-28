(() =>
{
    //!Definicion de Interfaz (es decir, un tipo propio)
    type Personaje = {
        nombre: string;
        apodo:string;
        espada:string;
        edad:number;
        amigos:string[];
        getNombre:()=>string;

    }


    //!Definicion de un Objeto
    //! Hay Dos Formas de Hacerlo
    //!Tipo 1
   /* let aragorn = {
        nombre: 'Aragorn Hijo de Arathorn',
        apodos: 'Trancos',
        espada: 'Anduril',
        edad: 85,
        amigos: ['Frodo','Gandalf','Elrond'] 
    }*/
    //!Tipo 2
    /*let aragorn: {nombre:string;apodos:string;espada:string;edad:number;amigos:string[]} = {
        nombre: 'Aragorn Hijo de Arathorn',
        apodos: 'Trancos',
        espada: 'Anduril',
        edad: 85,
        amigos: ['Frodo','Gandalf','Elrond'] 
    }*/
    //! Llamando a un Metodo
    let aragorn: {nombre:string;apodos:string;espada:string;edad:number;amigos:string[];getNombre:()=>string} = {
        nombre: 'Aragorn Hijo de Arathorn',
        apodos: 'Trancos',
        espada: 'Anduril',
        edad: 85,
        amigos: ['Frodo','Gandalf','Elrond'],
        getNombre(){
            //return this.nombre;
            return `${this.nombre}`;
        } 
    }

    let gandalf:Personaje ={
        nombre: 'Gandalf',
        apodo: 'El Gris',
        espada: 'Glamdring',
        edad: 100,
        amigos: ['Frodo','Gandalf','Aragorn'],
        getNombre() {
            return this.nombre;
        }
    }
    if(typeof gandalf.edad == 'number'){
        console.log(gandalf.edad);
    }else{
        console.log('La edda no es un Numero');
    }



})()