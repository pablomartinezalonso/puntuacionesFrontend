import { Component, OnInit } from '@angular/core';
import { Jugador } from '../models/jugador';
import { ActivatedRoute, Router } from '@angular/router';
import { JugadorService } from '../services/jugador.service';

@Component({
  selector: 'app-edit-jugador',
  templateUrl: '../add-jugador/add-jugador.component.html',
  styleUrls: ['./edit-jugador.component.css']
})
export class EditJugadorComponent implements OnInit {

  public jugador: Jugador;

  constructor(private activatedRoute: ActivatedRoute, private jugadorService: JugadorService, private router: Router) {
    this.jugador = new Jugador('','',0);
  }

  ngOnInit() {
    let elId = this.activatedRoute.snapshot.params.id;
    this.jugadorService.getJugador(elId).subscribe(
      result => {
        this.jugador = result['datos'];
      },
      error =>{
        alert(`Error al cargar el jugador ${error}`);
      }
    )
  }


  onSubmit() {
    let elId = this.activatedRoute.snapshot.params.id;
    this.jugadorService.updateJugador(elId, this.jugador).subscribe(
      response => {
        this.router.navigate(['/listaJugadores']);
      },
      error => {
        alert('Error al guardar el jugador' + error);
      }
    );
  }


}
