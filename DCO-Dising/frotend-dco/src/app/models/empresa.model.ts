export class Empresa {
    _id?: number;
    nombre: string;
    correo: string;
    descripcion: string;
    logo: string;
    contrasena: string;
    plan: string;
    bancoMultimedia: any;
    pagina: any;
    productos: any;
    categorias: any;
    activo: boolean=true

    constructor(nombre: string, correo: string, descripcion: string,logo: string, contrasena: string, plan: string, bancoMultimedia: any, pagina: any, productos: any, categorias: any, activo: boolean
    ) {
        this.nombre = nombre
        this.correo = correo
        this.descripcion=descripcion
        this.logo=logo
        this.contrasena = contrasena
        this.plan = plan
        this.bancoMultimedia = bancoMultimedia
        this.pagina = pagina
        this.productos = productos
        this.categorias=categorias
        this.activo=activo
    }
}