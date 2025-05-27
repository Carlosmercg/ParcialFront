import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entidad } from '../models/entidad.model';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  private baseUrl = 'http://localhost:8080/api/entidad'; // Ajusta el puerto y URL si cambia

  constructor(private http: HttpClient) { }

  getEntidades(): Observable<Entidad[]> {
    return this.http.get<Entidad[]>(this.baseUrl);
  }

  crearEntidad(entidad: Entidad): Observable<Entidad> {
    return this.http.post<Entidad>(this.baseUrl, entidad);
  }
}