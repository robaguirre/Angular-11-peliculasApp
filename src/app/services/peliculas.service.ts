import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = '09ab2888813d6a43075a587dba1aed1f';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  private urlImg = 'http://image.tmdb.org/t/p/w';

  constructor(private http: HttpClient) { }


  getPopulares() {

    const url = `${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`; // &callback=JSONP_CALLBACK

    return this.http.jsonp(url, 'callback').pipe(
      map((res: any) => res)
    );

    // return this.http.get(url).pipe(
    //   map((res: any) => res)
    // );
  }


  buscarPelicula(texto: string) {

    const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

    return this.http.jsonp(url, 'callback').pipe(
      map((res: any) => res)
    );
  }

}
