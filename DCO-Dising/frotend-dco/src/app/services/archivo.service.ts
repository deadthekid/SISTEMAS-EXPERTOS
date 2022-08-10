import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Archivo } from '../models/archivo.model';

@Injectable({
    providedIn: 'root'
})

export class archivoService {
    url = 'http://localhost:4000/empresa';

    constructor(private http: HttpClient) { }
    agregar(archivo: object): Observable<any> {
        return this.http.post(this.url + "/subirArchivo", archivo)
    }
    listaImagenes(idEmpresa: string): Observable<any>{
        return this.http.get(this.url+'/listaImagenes/'+idEmpresa)
    }
    listaVideos(idEmpresa: string): Observable<any>{
        return this.http.get(this.url+'/listaVideos/'+idEmpresa)
    }
    listaOtrosArchivos(idEmpresa: string): Observable<any>{
        return this.http.get(this.url+'/listaOtrosArchivos/'+idEmpresa)
    }
    detalles(idArchivo: string):Observable<any>{
        return this.http.get(this.url+'/detallesArchivos/'+idArchivo)
    }
    actualizar(archivo: object, idArchivo: string): Observable<any> {
        return this.http.post(this.url + "/actualizarArchivo/"+idArchivo, archivo)
    }
    eliminar(idArchivo: string, idEmpresa: string): Observable<any>{
        return this.http.delete(this.url+`/eliminarArchivo/?idArchivo=${idArchivo}&idEmpresa=${idEmpresa}`)
    }
}