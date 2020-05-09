import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movies } from '../movies';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-viewmovies',
  templateUrl: './viewmovies.component.html',
  styleUrls: ['./viewmovies.component.css']
})
export class ViewmoviesComponent implements OnInit {

 
   arr : Observable<Movies[]>;

  constructor(private route: ActivatedRoute,private service : MoviesService,private router: Router )
  {
    // service.findAllMovies().subscribe( data =>{this.arr = data.body;console.log(data);})
  }


  ngOnInit(): void {

    this.arr=this.service.findAllMovies();
  }

  add(){
    this.router.navigate(['add']);
  }
}
