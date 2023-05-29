import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Puerto } from '../models/puerto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PuertoServiceService {
  private urlEndPoint: string = URL_BACKEND + 'api/puerto/';

  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}
  getAllPuertos(): Observable<Puerto[]> {
    return this.http.get<Puerto[]>(`${this.urlEndPoint}getAll`, {
      headers: this.httpHeader,
    });
  }
}
