import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from '../models/vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoServiceService {

  private urlEndPoint: string = URL_BACKEND + 'api/vehiculo/';

  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}
  getAllTipoVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(`${this.urlEndPoint}getAll`, {
      headers: this.httpHeader,
    });
  }
}
