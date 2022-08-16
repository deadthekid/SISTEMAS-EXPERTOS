export class Pagina {
    _id?: number;
    html: string;
    css: string;
    javascript: string;
    empresaId: string;

    constructor(html:string,css: string,javascript: string, empresaId: string){
        this.html=html;
        this.css=css;
        this.javascript=javascript;
        this.empresaId=empresaId;

    }

}