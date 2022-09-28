(()=>{
let compania = {
    portador: 'Frodo',
    porGondor: 'Boromir',
    porElfos: 'Legolas',
}
//!Hay 2 Formas de Hacer esto, Pero necesitas saber cuantas cosas tiene el objeto
/*
let elPortador = compania.portador;
let deGondor = compania.porGondor;
let deElfos = compania.porElfos;
*/
let {portador, porGondor, porElfos} = compania;


})()