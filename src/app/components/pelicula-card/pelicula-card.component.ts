import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pelicula-card',
  templateUrl: './pelicula-card.component.html',
  styles: []
})
export class PeliculaCardComponent implements OnInit {

  @Input() pelicula: any;

  constructor() { }

  ngOnInit() {
  }

}
