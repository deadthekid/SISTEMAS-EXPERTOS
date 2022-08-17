export class Plan {
    _id?: number;
    nombre: string;
    descripcion: string
    maxArchivos: number;
    comision: number;

    constructor(nombre: string, descripcion: string, maxArchivos: number, comision: number
    ) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.maxArchivos = maxArchivos
        this.comision = comision
    }
}