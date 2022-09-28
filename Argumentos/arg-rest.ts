const fullname = (nombre: string , esHomnbre: boolean = false, ...apodos:String[]):String =>{
    return `${ nombre } ${ apodos.join(" ")}`
};
console.log(fullname('Aragorn',true,'Hijo de Arathorn','Rey Elessar','Trancos'));

console.log(fullname('Gandalf',false,'El Gris','Mitherandir'))
