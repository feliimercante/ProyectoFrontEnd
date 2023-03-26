export class proyecto {
    id?: Number;
    nombre: String;
    fecha: Date;
    descripcion: String;
    link: String;
    
    constructor(nombre: String, fecha: Date, descripcion: String, link: String){
    this.nombre = nombre;
    this.fecha = fecha;
    this.descripcion = descripcion;
    this.link = link;
    }
    
    }
