import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  cartelera: any;
  infantiles: any;
  populares: any;

  constructor(public ps: PeliculasService) {
    this.ps.getCartelera().subscribe(data => { this.cartelera = data; });
    this.ps.getPopulares().subscribe(data => { this.populares = data; console.log(data); });
    this.ps.getInfantiles().subscribe(data => { this.infantiles = data; console.log(data); });
  }

  ngOnInit() {
  }

}
