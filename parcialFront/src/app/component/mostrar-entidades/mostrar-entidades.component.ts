import { Component, OnInit } from '@angular/core';
import { Entidad } from '../../models/entidad.model';
import { EntidadService } from '../../service/entidadapi.service';

@Component({
  selector: 'app-mostrar-entidades',
  templateUrl: './mostrar-entidades.component.html',
  styleUrls: ['./mostrar-entidades.component.css']
})
export class MostrarEntidadesComponent implements OnInit {

  entidades: Entidad[] = [];

  constructor(private entidadService: EntidadService) { }

  ngOnInit(): void {
    this.cargarEntidades();
  }

  cargarEntidades(): void {
    this.entidadService.getEntidades().subscribe(
      data => this.entidades = data,
      err => console.error(err)
    );
  }
}