import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bodega } from '../models/bodega';

@Injectable({
  providedIn: 'root'
})
export class BodegaServiceService {

  private urlEndPoint: string = URL_BACKEND + 'api/bodega/';

  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}
  getAllBodegas(): Observable<Bodega[]> {
    return this.http.get<Bodega[]>(`${this.urlEndPoint}getAll`, {
      headers: this.httpHeader,
    });
  }
}
