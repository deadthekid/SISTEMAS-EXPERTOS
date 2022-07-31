export class Empresa {
    _id?: number;
    nombre: string;
    correo: string;
    contrasena: string;
    plan: string;
    bancoMultimedia: any;
    pagina: any;
    productos: any;

    constructor(nombre: string, correo: string, contrasena: string, plan: string, bancoMultimedia: any, pagina: any, productos: any
    ) {
        this.nombre = nombre
        this.correo = correo
        this.contrasena = contrasena
        this.plan = plan
        this.bancoMultimedia = bancoMultimedia
        this.pagina = pagina
        this.productos = productos
    }
}