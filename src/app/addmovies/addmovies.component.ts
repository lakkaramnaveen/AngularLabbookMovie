import { Component, OnInit } from '@angular/core';
import { Movies } from '../movies';
import { MoviesService } from '../movies.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmovies',
  templateUrl: './addmovies.component.html',
  styleUrls: ['./addmovies.component.css']
})
export class AddmoviesComponent implements OnInit {

  movies : Movies = new Movies();
  temp : Movies = new Movies();
  constructor(private route: ActivatedRoute,private service : MoviesService,private router: Router) { }

  ngOnInit(): void {
  }

  createMovies()
  {
    console.log(this.movies);
    this.service.createMovies(this.movies).subscribe(data=>this.temp=data,error=>alert(error.error.errorMessage));
    alert("Added Succesfully");
    this.router.navigate(['view']);
  }

  searchMovie(){
    this.router.navigate(['search']);
  }

}
