import { Component, Input } from '@angular/core';
import { Clientes } from '../../interfaces/clientes.interface';

@Component({
    selector: 'app-list-component',
    templateUrl: './list.component.html'
})

export class ListComponent  {

  @Input()
  public ListaClientesx:Clientes[] =[]

 }
