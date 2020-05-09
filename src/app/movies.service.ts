import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from './movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  



  url ="http://localhost:9090/movies/" ;

  constructor(private http : HttpClient ) {

  }
 
 
  findAllMovies() : Observable<Movies[]>
  {
    return this.http.get<Movies []>(`${this.url}`);
  }

  findMovieByGenre(moviesGenre : String) : Observable<Movies[]>
  {
    console.log(" Id = "+moviesGenre);
    return this.http.get<Movies[]>("http://localhost:9090/movies/"+moviesGenre);
  }

  createMovies(movies : Movies ) : Observable<Movies>
  {
    console.log("Service : "+movies.moviesId);
    return this.http.post<Movies>("http://localhost:9090/movies/",movies);
  }
}
