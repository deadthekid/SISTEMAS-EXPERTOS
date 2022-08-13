export class Plan {
    _id?: number;
    nombre: string;
    descripcion: string
    maxArchivos: number;
    maxPaginas: number;
    ePersonalizados: boolean=false;
    comision: number;

    constructor(nombre: string, descripcion: string, maxArchivos: number, maxPaginas: number, ePersonalizados: boolean, comision: number
    ) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.maxArchivos = maxArchivos
        this.maxPaginas = maxPaginas
        this.ePersonalizados = ePersonalizados
        this.comision = comision
    }
}