import { Injectable } from '@angular/core';
import { Jugador } from '../models/jugador';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  url: string;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:5200/puntuacion';
  }

  getAllJugadores(): Observable<any> {
    const header = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.get(this.url);
  }

  getJugador(id: string){
    return this.httpClient.get(this.url + `/${id}`);
  }

  addJugador(jugador: Jugador) {
    const body = JSON.stringify(jugador);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.post(this.url, body, {headers});
  }

  removeJugador(id: string){
    return this.httpClient.delete(this.url + `/${id}`);
  }


  updateJugador(id: string, jugador: Jugador){
    const body = JSON.stringify(jugador);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpClient.put(this.url + '/' + id, body, {headers});
  }

  // TODO: insert delete update
}
