import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores : Marcador[] = [];
  lat = -12.1748632;
  lng = -76.9645651;

  constructor() {
    const nuevoMarcador = new Marcador(-12.1748632, -76.9645651);
    this.marcadores.push(nuevoMarcador);
   }

  ngOnInit(): void {
  }

  agregarMarcador(evento){
    console.log(evento);

    const coords: { lat: number, lng: number } = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);

  }

}
