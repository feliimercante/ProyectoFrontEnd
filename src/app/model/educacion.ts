export class educacion {
    id? : number;
    titulo : string;
    fechaInicio : Date;
    fechaFin : Date;
    descripcion : string;

    constructor(titulo: string, descripcion: string, fechaInicio: Date, fechaFin: Date){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
    }
}
