import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../services/jugador.service';
import { Jugador } from '../models/jugador';

@Component({
  selector: 'app-lista-jugador',
  templateUrl: './lista-jugador.component.html',
  styleUrls: ['./lista-jugador.component.css']
})
export class ListaJugadorComponent implements OnInit {

  listaJugadores: Jugador[];
  constructor(public jugadorService: JugadorService) { }

  ngOnInit() {
    this.getPuntuaciones();

  }

  getPuntuaciones(){
    this.jugadorService.getAllJugadores().subscribe(
      result => {
        console.log(result);
        this.listaJugadores = result['datos'];
    },
    error => {
      alert('Error al listar las puntuaciones');
    },
    () => {

    }
    );
  }


  borrarPuntuacion(id: string) {
    this.jugadorService.removeJugador(id).subscribe(
      result => {
        this.getPuntuaciones();
      },
      error => {
        alert(`Error al borrar la puntuacion ${error}`);
      },
      () => {

      }
    );
  }

}
