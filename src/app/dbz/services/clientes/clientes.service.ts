import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({providedIn: 'root'})
export class ClientesService {
    constructor(private http:HttpClient) { }
    ObtenerClientes(){
     let url="https://localhost:44310/GetClientes";
     return this.http.get(url);
    }
}