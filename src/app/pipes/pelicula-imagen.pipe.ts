import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any, size: number = 500): any {

    const urlImg = `http://image.tmdb.org/t/p/w${size}`;

    if (pelicula.backdrop_path) {
      return urlImg + pelicula.backdrop_path;
    } else if (pelicula.poster_path) {
      return urlImg + pelicula.poster_path;
    } else {
      return 'assets/img/no-image-found.png';
    }
  }

}
