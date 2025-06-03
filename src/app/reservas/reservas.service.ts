import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Reservas } from './reservas.model';

@Injectable({
  providedIn: 'root',
})
export class ReservasService {
  private apiURL = 'http://localhost:3000/reserva';

  constructor(private http: HttpClient) {}

  listarReservas(): Observable<Reservas[]> {
    return this.http.get<Reservas[]>(this.apiURL);
  }
  cadastrarReservas(reservas: Reservas): Observable<Reservas> {
    return this.http.post<Reservas>(this.apiURL, {
      id: reservas.id,
      nome: reservas.nome,
      telefone: reservas.telefone,
      numMesa: reservas.numMesa,
      dataRes: new Date(reservas.dataRes).toISOString(),
    });
  }
  buscarReservas(id: string): Observable<Reservas> {
    return this.http.get<Reservas>(`${this.apiURL}/${id}`);
  }
  atualizarReservas(id: string, reservas: Reservas): Observable<Reservas> {
    return this.http.patch<Reservas>(`${this.apiURL}/${id}`, {
      nome: reservas.nome,
      telefone: reservas.telefone,
      numMesa: reservas.numMesa,
      dataRes: new Date(reservas.dataRes).toISOString(),
    });
  }
  deletarReservas(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
