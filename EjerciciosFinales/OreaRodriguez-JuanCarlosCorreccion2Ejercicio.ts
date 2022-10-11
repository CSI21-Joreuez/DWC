(() => {

    class Libro {
        constructor(titulo:string,autor:string){
            this.titulo = titulo;
            this.autor = autor;
        }
        titulo: string;
        autor: string;
   }
   class Revista extends Libro {
       tematica: string;
       numero: number;
       Archivar():string
       {
        return "arhivado";
       }
       constructor(tematica:string,titulo:string,autor:string,numero:number){
        super(titulo,autor),
        this.tematica = tematica;
        this.autor = autor;
        this.titulo = titulo;
        this.autor = autor;
        this.numero = numero
    }

   }
   interface Publicacion {
      autor: string,
      titulo: string,
      mes: string,
      anio: number
   }
   class Cuaderno implements Publicacion {
    cientifica: boolean;
    universidad: string;
    autor: string;
    titulo: string;
    mes: string;
    anio: number;
    Archivar():string
    {
        return "arhivado";
    }
    constructor( cientifica:boolean,  universidad:string, mes:string, anio:number, autor:string, titulo:string)
    {
        this.cientifica = cientifica;
        this.universidad = universidad;
        this.mes = mes;
        this.anio = anio;
        this.titulo = titulo;
        this.autor = autor;
    }
   }

   let cuadernillo:Cuaderno = new Cuaderno(true, "oxford","junio",2019,"Juan Carlos","ejerciciosDeAngular");
   let elquisquilloso:Revista = new Revista("Actualidad","Luna","LoveGood",236);
   console.log(elquisquilloso.Archivar());
   console.log(cuadernillo.Archivar());

})()
