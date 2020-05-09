import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-searchmovies',
  templateUrl: './searchmovies.component.html',
  styleUrls: ['./searchmovies.component.css']
})
export class SearchmoviesComponent implements OnInit {

  arr : Movies[]=[];
  movie : Movies = new Movies();
  movies : Observable<Movies[]>;

  constructor(private service : MoviesService) { }
  find(){
//this.service.findMovieByGenre(this.movie.moviesGenre).subscribe(data=>{this.arr=data,(error: { error: { errorMessage: any; }; })=>alert(error.error.errorMessage)});
    this.movies=this.service.findMovieByGenre(this.movie.moviesGenre);
    
  }

  ngOnInit(): void {
    
    
  }

  
}
