// 1. Crea una Funcion flecha autoinvocada
// 2. Define un tipo llamado "Villanos" con las propiedades:
//    nombre, raza, fuerza(1-3)
// 3. Crea 3 Villanos diferentes usando el tipo
// 4. Crea una Funcion flecha para mostrar en la terminal el nombre del los villanos
// 5. Comprueba en el navegador que todo está Correcto.
(()=>{

     type Villanos ={nombre:string,raza:string,fuerza:Enumerator}  
    {
        nombre: 'Morgomir'
        raza: 'Numenoreanos'
        fuerza: 2
    
        nombre: 'Sauron'
        raza: 'Ainur'
        fuerza: 3
    
        
        nombre: 'Gothmog'
        raza: 'Orcos'
        fuerza: 1
        
        function Muestrate()
        {
            return console.log("Yo Soy " + Object.name);
        }
        
    }


})()
