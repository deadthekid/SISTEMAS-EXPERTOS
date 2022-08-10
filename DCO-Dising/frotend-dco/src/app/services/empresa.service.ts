import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Empresa } from '../models/empresa.model'

@Injectable({
    providedIn: 'root'
})

export class empresaService {
    url = 'http://localhost:4000/empresa';

    constructor(private http: HttpClient) { }
    agregar(empresa: Empresa): Observable<any> {
        return this.http.post(this.url + "/registro", empresa)
    }
    buscar(correo: string): Observable<any> {
        return this.http.get(this.url + "/registro/" + correo)
    }
    login(infoLogin: object): Observable<any> {
        return this.http.post(this.url + "/login", infoLogin)
    }
    seguridad(idEmpresa: string): Observable<any> {
        return this.http.get(this.url + "/seguridad/" + idEmpresa)
    }
    rellenar(idEmpresa: string): Observable<any> {
        return this.http.get(this.url + "/rellenarInfo/" + idEmpresa)
    }
    actualizar(infoEmpresa: object): Observable<any> {
        return this.http.post(this.url + "/actualizarInfo/", infoEmpresa)
    }
    logo(idEmpresa: string): Observable<any> {
        return this.http.get(this.url + "/logo/" + idEmpresa)
    }
    aggCategoria(infoCategoria: object): Observable<any> {
        return this.http.post(this.url + "/aggCategoria", infoCategoria)
    }
    getCategorias(idEmpresa: string): Observable<any> {
        return this.http.get(this.url + "/getCategorias/" + idEmpresa)
    }
    editCategorias(infoCategoria: object): Observable<any> {
        return this.http.put(this.url + "/updCategorias", infoCategoria)
    }
    delCategorias(idEmpresa: string, categoria: string): Observable<any> {
        return this.http.delete(this.url + `/delCategorias/?idEmpresa=${idEmpresa}&categoria=${categoria}`)
    }
    getProductos(idEmpresa: string): Observable<any> {
        return this.http.get(this.url+'/getProductos/'+idEmpresa)
    }
    actualizarProducto(infoActualizar: object):Observable<any>{
      return this.http.put(this.url+'/actualizarProducto',infoActualizar)
    }
    eliminarProducto(idProducto: string, idEmpresa:string):Observable<any>{
        return this.http.delete(this.url+`/eliminarProducto/?idProducto=${idProducto}&idEmpresa=${idEmpresa}`)
    }
}