import { Component, OnInit, Input } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  from: string;
  termino = '';

  constructor(public ps: PeliculasService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pelicula = this.ps.getPelicula(params.idp).subscribe(data => this.pelicula = data);
      this.from = params.pag;
      if (params.termino) {
        this.termino = params.termino;
      }
    });
  }

  // Si se usa routerLink en html no hace falta llamar a esta funcion
  volver() {
    if (this.from && this.from === 'home') {
      this.router.navigate(['/home']);
    } else if (this.from && this.from === 'search') {
      this.router.navigate(['/search', this.termino]);
    } else {
      return;
    }
  }

}
