
import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Clientes } from '../../interfaces/clientes.interface';

@Component({
	selector: 'app-formulario-cliente',
	templateUrl: 'formulario_cliente.component.html',
	// add NgbModalConfig and NgbModal to the component providers
	providers: [NgbModalConfig, NgbModal],
})
export class FormularioClienteComponent {
    formData:Clientes[]=[]
	constructor(
		config: NgbModalConfig,
		private modalService: NgbModal,
	) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	open(content:any) {
		this.modalService.open(content);
	}
}