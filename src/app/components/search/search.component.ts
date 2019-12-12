import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  termino = '';
  loading: boolean;

  constructor(public ps: PeliculasService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params.termino) {
        this.termino = params.termino;
        this.buscarPelicula();
      }
    });
  }

  buscarPelicula() {
    this.loading = true;
    if (this.termino.length === 0) { return; }
    this.ps.buscarPelicula(this.termino).subscribe(data => this.loading = false);
  }

}
