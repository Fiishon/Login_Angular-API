import { Component, EventEmitter, Output } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginacion',
  imports: [MatPaginatorModule],
  templateUrl: './paginacion.html',
  styleUrl: './paginacion.css'
})
export class Paginacion {

  @Output() cambioPagina = new EventEmitter<PageEvent>();

  length = 1025;
  pageSize = 50;

  onPageChange(event: PageEvent) {
    this.cambioPagina.emit(event);
  }
}
