import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoIdentificacion } from '../models/tipo-identificacion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoIdentificacionServiceService {

  private urlEndPoint: string = URL_BACKEND + 'api/tipoIdentificacion/';

  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}
  getAllTipoIdentificaciones(): Observable<TipoIdentificacion[]> {
    return this.http.get<TipoIdentificacion[]>(`${this.urlEndPoint}getAll`, {
      headers: this.httpHeader,
    });
  }
}
