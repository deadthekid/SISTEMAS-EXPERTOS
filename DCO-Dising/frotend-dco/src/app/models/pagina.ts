export class Pagina {
    _id?: number;
    html: string;
    css: string;
    javascript: string;
    empresaId: number;

    constructor(html:string,css: string,javascript: string, empresaId: number){
        this.html=html;
        this.css=css;
        this.javascript=javascript;
        this.empresaId=empresaId;

    }

}