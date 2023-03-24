export class Experiencia {
    id? : number;
    tituloE : string;
    fechaInicioE : date;
    fechaFinE : date;
    descripcionE : string;

    constructor(tituloE: string, descripcionE: string, fechaInicioE: date, fechaFinE: date){
        this.tituloE = tituloE;
        this.descripcionE = descripcionE;
        this.fechaInicioE = fechaInicioE;
        this.fechaFinE = fechaFinE;
    }
}

