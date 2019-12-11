import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pelicula-card',
  templateUrl: './pelicula-card.component.html',
  styles: []
})
export class PeliculaCardComponent implements OnInit {

  @Input() pelicula: any;
  @Input() from: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verMas() {
    this.router.navigate(['/pelicula', this.pelicula.id, this.from]);
  }

}
