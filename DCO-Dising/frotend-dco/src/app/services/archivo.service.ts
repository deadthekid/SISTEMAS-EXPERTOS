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
}