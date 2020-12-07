import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  lat = -12.1748632;
  lng = -76.9645651;

  constructor() { }

  ngOnInit(): void {
  }

}
