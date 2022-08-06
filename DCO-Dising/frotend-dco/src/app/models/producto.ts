export class Producto {
    _id?: number;
    nombre: string;
    precio: number;
    img: string;
    descripcion: string;
    vendedor: string;

    constructor(nombre:string,precio: number,img: string, descripcion:string,vendedor:string){
        this.nombre=nombre;
        this.precio=precio;
        this.img=img;
        this.descripcion=descripcion;
        this.vendedor=vendedor;
    }

}