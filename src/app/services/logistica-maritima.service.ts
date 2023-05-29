import { Injectable } from '@angular/core';
import { URL_BACKEND } from '../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LogisticaMaritima } from '../models/logistica-maritima';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogisticaMaritimaService {
  private urlEndPoint: string = URL_BACKEND + 'api/logisticaMar/';

  private httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {}
  getAllLogisticasMaritimas(): Observable<LogisticaMaritima[]> {
    return this.http.get<LogisticaMaritima[]>(`${this.urlEndPoint}getAll`, {
      headers: this.httpHeader,
    });
  }
  getLogisticasMaritimaById(IdLogistica: number): Observable<LogisticaMaritima> {
    return this.http.get<LogisticaMaritima>(`${this.urlEndPoint}getLogisticaMaritima/${IdLogistica}`, {
      headers: this.httpHeader,
    });
  }

  saveLogisticaMaritima(logisticaTerrestre: LogisticaMaritima): Observable<LogisticaMaritima> {
    return this.http.post<LogisticaMaritima>(`${this.urlEndPoint}save`, logisticaTerrestre, {
      headers: this.httpHeader,
    });
  }

  deleteById(IdLogistica: number): Observable<LogisticaMaritima> {
    return this.http.delete<LogisticaMaritima>(`${this.urlEndPoint}delete//${IdLogistica}`, {
      headers: this.httpHeader,
    });
  }
}
