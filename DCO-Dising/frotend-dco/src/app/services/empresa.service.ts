import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Empresa } from '../models/empresa.model'

@Injectable({
    providedIn: 'root'
})

export class empresaService {
    url = 'http://localhost:8888/empresa';

    constructor(private http: HttpClient) { }
    agregar(empresa: Empresa): Observable<any> {
        return this.http.post(this.url + "/registro", empresa)
    }
    buscar (correo: string): Observable<any> {
        return this.http.get(this.url+"/registro/"+correo)
    }
    login(infoLogin: object): Observable<any>{
        return this.http.post(this.url+"/login",infoLogin)
    }
    rellenar (idEmpresa: string): Observable<any>{
        return this.http.get(this.url+"/rellenarInfo/"+idEmpresa)
    }
    actualizar (infoEmpresa: object): Observable<any>{
        return this.http.post(this.url+"/actualizarInfo/",infoEmpresa)
    }
}