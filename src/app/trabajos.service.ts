import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vacante } from "./trabajos"
import { environment } from "../environments/environment"
@Injectable({
  providedIn: 'root'
})
export class TrabajosService {
  baseUrl = environment.baseUrl

  constructor(private http: HttpClient) { }

  getVacante(tipo_v: string) {
    return this.http.get(`${this.baseUrl}/get.php?tipo_v=${tipo_v}`);
  }

  addVacante(vacante: Vacante) {
    return this.http.post(`${this.baseUrl}/post.php`, vacante);
  }

  deleteVacante(vacante: Vacante) {
    return this.http.delete(`${this.baseUrl}/delete.php?tipo_v=${vacante.tipo_v}`);
  }
}
