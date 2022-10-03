/*
En el ejercicio 4 te vamos a dar una serie de elementos que tendrás que corregir/completar
para que estén lo más acorde con la forma de hacer que estamos viendo en clase
*/
(() => {

    type Personaje = {
    nombre: string;
    raza:string;
    alias: string;
    ejercito: string;
    fuerza: number;
    getFuerza: () => number;
    }

    enum fuerza {
        min = 10,
        med = 50,
        alto = 100
    }

    //? Ejercicio 0. Sigue las instrucciones
    let aragorn: Personaje = { //! 0.1 Crea el tipo Personaje
      nombre: 'Aragorn',
      raza: 'Numenoreano',
      alias: 'Trancos',
      ejercito: 'La Compañía',
      fuerza: fuerza.alto, //! 0.2 Crea la enumeración fuerza (alto=100, medio=50, bajo=10)
      getFuerza() {return this.fuerza}
    }
    
    //? Ejercicio 1. Covierte las siguientes funciones en funciones flecha
    
    // 1.1 Función para devolver la fuerza multiplicada por el resultado aleatorio de una tirada de dados
    // function golpe(tirada: number, personaje: Personaje): number {
    //  return personaje.fuerza * tirada;
    //}

    let golpe = (tirada: number, personaje: Personaje): number =>  personaje.fuerza * tirada;

    
    // 1.2 Función tirada de dados y resolución de la misma
    //function tirada(personaje: Personaje): number {
    //  const DADO = Math.random() * 6;
    //  let resultado = golpe(DADO, personaje);
    //  return resultado;
    //}
    let tirada = (personaje: Personaje): number => {
        const DADO = Math.random() * 6;
      let resultado = golpe(DADO, personaje);
      return resultado;
    }
    
    
    // Ejecutamos la tirada del turno del personaje
    console.log(tirada(aragorn));
    
    })()