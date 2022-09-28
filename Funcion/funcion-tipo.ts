(() => {
    //!Funcion Tipo Flecha
    let saludo1 = () => 'Hola Mundo';
    //!Funcion Normal
    let saludo = () => { return 'Hola Mundo';};

    const suma = (a:number,b:number):number =>{
        return a + b;
    }
    const juntar = (x:string,y:string):string =>{
        return `${ x } ${ y }`;
    }
        const longitud = (texto:string):number =>{
            return texto.length;
        }
        //!Hay dos Formas de Hacerlo:
        //! Tipo 1
            /*let miFuncion: (x:number,y:number) =>number ;
            miFuncion =suma;*/
       //!Tipo 2
            let miFuncion: (x:number,y:number) =>number = suma ;
            console.log(miFuncion(2,55));
   // miFuncion = 33;

})()