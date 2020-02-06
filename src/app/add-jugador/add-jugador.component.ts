import { Component, OnInit } from '@angular/core';
import { Jugador } from '../models/jugador';
import { JugadorService } from '../services/jugador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-jugador',
  templateUrl: './add-jugador.component.html',
  styleUrls: ['./add-jugador.component.css']
})
export class AddJugadorComponent implements OnInit {

  public jugador: Jugador;

  constructor(private jugadorService: JugadorService, private router: Router) {
    this.jugador = new Jugador('', '', 0);
  }

  ngOnInit() {
  }

  onSubmit() {
    this.jugadorService.addJugador(this.jugador).subscribe(
      response => {
        this.router.navigate(['/listaJugadores']);
      },
      error => {
        alert('Error al guardar el jugador' + error);
      }
    );
  }

}
