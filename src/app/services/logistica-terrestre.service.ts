import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_BACKEND } from '../config/config';
import { Observable } from 'rxjs';
import { LogisticaTerrestre } from '../models/logistica-terrestre';

@Injectable({
  providedIn: 'root'
})
export class LogisticaTerrestreService {

  private urlEndPoint: string = URL_BACKEND + 'api/logisticaTerr/';

  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}
  getAllLogisticasTerrestres(): Observable<LogisticaTerrestre[]> {
    return this.http.get<LogisticaTerrestre[]>(`${this.urlEndPoint}getAll`, {
      headers: this.httpHeader,
    });
  }
  getLogisticasTerrestresById(IdLogistica: number): Observable<LogisticaTerrestre> {
    return this.http.get<LogisticaTerrestre>(`${this.urlEndPoint}getLogisticaTerrestre/${IdLogistica}`, {
      headers: this.httpHeader,
    });
  }

  saveLogisticaTerrestre(logisticaTerrestre: LogisticaTerrestre): Observable<LogisticaTerrestre> {
    return this.http.post<LogisticaTerrestre>(`${this.urlEndPoint}save`, logisticaTerrestre, {
      headers: this.httpHeader,
    });
  }

  deleteById(IdLogistica: number): Observable<LogisticaTerrestre> {
    return this.http.delete<LogisticaTerrestre>(`${this.urlEndPoint}delete/${IdLogistica}`, {
      headers: this.httpHeader,
    });
  }
}
