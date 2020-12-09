import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Marcador } from '../../classes/marcador.class';
import {MatDialog} from '@angular/material/dialog';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores : Marcador[] = [];
  lat = -12.1748632;
  lng = -76.9645651;

  constructor(private _snackBar: MatSnackBar,
              public dialog: MatDialog) {
    //const nuevoMarcador = new Marcador(-12.1748632, -76.9645651);
    //this.marcadores.push(nuevoMarcador);

    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
   }

  ngOnInit(): void {
  }

  agregarMarcador(evento){
    console.log(evento);

    const coords: { lat: number, lng: number } = evento.coords;
    const nuevoMarcador = new Marcador(coords.lat, coords.lng);
    this.marcadores.push(nuevoMarcador);
    
    this.guardarStorage();
    this._snackBar.open('Marcador agregado', 'Cerrar', {duration: 3000});
  }

  borrarMarcador(i: number){
    console.log(i);
    this.marcadores.splice(i, 1);
    this.guardarStorage();

    this._snackBar.open('Marcador borrado', 'Cerrar', {duration: 3000});
  }

  editarMarcador(marcador: Marcador){
    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {
        titulo: marcador.titulo,
        desc: marcador.desc
      }
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
