import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiKey = '09ab2888813d6a43075a587dba1aed1f';
  private urlMoviedb = 'https://api.themoviedb.org/3';
  private discover: string;

  peliculas: any[];

  constructor(private http: HttpClient) {
    this.discover = `${this.urlMoviedb}/discover/movie?api_key=${this.apiKey}&language=es`;
  }


  getPopulares() {
    const url = `${this.discover}&sort_by=popularity.desc`; // &callback=JSONP_CALLBACK

    return this.http.jsonp(url, 'callback').pipe(
      map((res: any) => res.results)
    );

    // return this.http.get(url).pipe(
    //   map((res: any) => res)
    // );
  }

  getInfantiles() {
    const url = `${this.discover}&certification_country=US&certification=G`;

    return this.http.jsonp(url, 'callback').pipe(
      map((res: any) => res.results)
    );
  }

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    const desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDate()}`;
    const hastaStr = `${hasta.getFullYear()}-${hasta.getMonth() + 1}-${hasta.getDate()}`;

    const url = `${this.discover}&primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}`;

    return this.http.jsonp(url, 'callback').pipe(
      map((res: any) => res.results)
    );
  }


  buscarPelicula(texto: string) {

    const url = `${this.urlMoviedb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;

    return this.http.jsonp(url, 'callback').pipe(
      map((res: any) => {
        this.peliculas = res.results;
        return res.results;
      })
    );
  }

  getPelicula(idp: number) {
    const url = `${this.urlMoviedb}/movie/${idp}?api_key=${this.apiKey}&language=es`;
    return this.http.jsonp(url, 'callback').pipe(
      map((res: any) => res)
    );
  }

}
