import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Departamento } from '../models/departamento';

@Injectable()
export class DepartamentoService {
    private url: string;

    constructor(private _http: HttpClient) {
        this.url = Global.urldept;
    }

    getDepartamentos(): Observable<any> {
        var request = "/api/departamentos";
        return this._http.get(this.url + request);
    }

    buscarDepartamento(iddept: string): Observable<any> {
        var request = "/api/departamentos/" + iddept;
        return this._http.get(this.url + request);
    }

    deleteDepartamento(iddept: string): Observable<any> {
        var request = "/api/departamentos/" + iddept;
        return this._http.delete(this.url + request);
    }

    insertarDepartamento(departamento: Departamento): Observable<any> {
        var request = "/api/departamentos";
        //NECESITAMOS CONVERTIR EL OBJETO A JSON
        var json = JSON.stringify(departamento);
        //PARA ENVIAR LA INFORMACIÓN AL SERVICIO SE REALIZA
        //MEDIANTE CABECERAS
        var header = new HttpHeaders().set("Content-Type", "application/json");
        return this._http.post(this.url + request, json, { headers: header});
    }

    updateDepartamento(departamento: Departamento): Observable<any> {
        let json = JSON.stringify(departamento);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = "/api/departamentos";
        return this._http.put(this.url + request, json, { headers: header });
    }
}