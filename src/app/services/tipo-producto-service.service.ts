import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoProducto } from '../models/tipo-producto';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoServiceService {
  private urlEndPoint: string = URL_BACKEND + 'api/tipoProducto/';

  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}
  getAllTipoProductos(): Observable<TipoProducto[]> {
    return this.http.get<TipoProducto[]>(`${this.urlEndPoint}getAll`, {
      headers: this.httpHeader,
    });
  }
}
