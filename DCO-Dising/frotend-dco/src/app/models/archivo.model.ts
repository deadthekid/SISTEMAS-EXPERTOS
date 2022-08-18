export class Archivo {
    _id?: number;
    archivo: string;
    tipo: string;
    tamaño: number;
    nombre: string;
    idEmresa: string;
    shortcut: string;

    constructor(
        archivo: string,
        tipo: string,
        tamaño: number,
        nombre: string,
        idEmresa: string,
        shortcut: string
    ) {
        this.archivo = archivo
        this.tipo = tipo
        this.tamaño = tamaño
        this.nombre = nombre
        this.idEmresa = idEmresa
        this.shortcut=shortcut
    }
}