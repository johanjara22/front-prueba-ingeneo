import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Flota } from '../models/flota';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlotaServiceService {

  private urlEndPoint: string = URL_BACKEND + 'api/flota/';

  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}
  getAllFlotas(): Observable<Flota[]> {
    return this.http.get<Flota[]>(`${this.urlEndPoint}getAll`, {
      headers: this.httpHeader,
    });
  }
}
