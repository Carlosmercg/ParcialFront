import { Component } from '@angular/core';
import { Entidad } from '../../models/entidad.model';
import { EntidadService } from '../../service/entidadapi.service';

@Component({
  selector: 'app-insertar-entidad',
  templateUrl: './insertar-entidad.component.html',
  styleUrls: ['./insertar-entidad.component.css']
})
export class InsertarEntidadComponent {

  entidad: Entidad = {
    nit: '',
    nombre: ''
  };

  mensaje = '';

  constructor(private entidadService: EntidadService) { }

  crearEntidad(): void {
    if (!this.entidad.nit || !this.entidad.nombre) {
      this.mensaje = 'Por favor llena todos los campos.';
      return;
    }

    this.entidadService.crearEntidad(this.entidad).subscribe({
      next: data => {
        this.mensaje = 'Entidad creada correctamente!';
        this.entidad = { nit: '', nombre: '' }; // limpiar formulario
      },
      error: err => {
        console.error(err);
        this.mensaje = 'Error al crear la entidad.';
      }
    });
  }
}
