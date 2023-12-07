
import { Component, OnInit } from '@angular/core';
import { ClientesService } from '../services/clientes/clientes.service';
import { Clientes } from '../interfaces/clientes.interface';
@Component({
    selector: 'app-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
 listaclientesmain:Clientes[]=[]
 
  constructor(private clientes:ClientesService){
   this.ObtenerClientes()

  }  
   ObtenerClientes(){
    this.clientes.ObtenerClientes().subscribe((data:any)=>{
        this.listaclientesmain=data;
    })



   }
 
}