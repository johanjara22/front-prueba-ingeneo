import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Cliente } from '../models/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private urlEndPoint: string = URL_BACKEND + 'api/cliente/';

  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}

  getAllClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.urlEndPoint}getAll`, {
      headers: this.httpHeader,
    });
  }

  saveLogisticaTerrestre(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.urlEndPoint}save`, cliente, {
      headers: this.httpHeader,
    });
  }

}
