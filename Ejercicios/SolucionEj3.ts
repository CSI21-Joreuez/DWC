(() => {

type Villano = {
    nombre: string;
    raza:string;
    fuerza: number;
    getNombre: () => string;
}
enum poder {
    min = 1,
    med,
    alto
}

let sauron:Villano = {
    nombre: 'Sauron el Grande',
    raza: 'Maiar',
    fuerza: poder.alto,
    getNombre () {
        return this.nombre;
    }
}
    let saruman:Villano = {
        nombre: 'Saruman el Sabio',
        raza: 'Ainur',
        fuerza: poder.med,
        getNombre () {
            return this.nombre;
        }
    }
let Grima:Villano = {
    nombre: 'Grima Lengua de Serpiente',
    raza: 'Humano',
    fuerza: poder.min,
    getNombre () {
        return this.nombre;
    }
}

let getNombre = (nombre: string) => console.log(nombre);
let VillanoArray: Villano[] = [sauron,saruman,Grima];
VillanoArray.forEach(villano => console.log(villano.nombre));    


})()