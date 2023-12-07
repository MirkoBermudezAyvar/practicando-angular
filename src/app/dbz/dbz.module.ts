
import { NgModule } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClientesService } from './services/clientes/clientes.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormularioClienteComponent } from './components/formulario_cliente/formulario_cliente.component';




@NgModule({
    imports: [CommonModule,HttpClientModule,ReactiveFormsModule],
    exports: [MainPageComponent],
    declarations: [MainPageComponent,
                   ListComponent,
                   FormularioClienteComponent,
              
                    
    ],
    providers: [],
})
export class DbzModule { }
