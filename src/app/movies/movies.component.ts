import { Component } from '@angular/core';
import { MovieCardComponent } from "../movie-card/movie-card.component";
import { MoviesService } from '../movies.service';



@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent{
  constructor(private _movies : MoviesService){

  }

  data !: any;

  ngOnInit(){
    this._movies.getMovies().subscribe((res)=>this.data = res.results)
  }
}
