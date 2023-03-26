export class educacion {
    id? : number;
    tituloE : string;
    fechaInicioE : Date;
    fechaFinE : Date;
    descripcionE : string;

    constructor(tituloE: string, descripcionE: string, fechaInicioE: Date, fechaFinE: Date){
        this.tituloE = tituloE;
        this.descripcionE = descripcionE;
        this.fechaInicioE = fechaInicioE;
        this.fechaFinE = fechaFinE;
    }
}
