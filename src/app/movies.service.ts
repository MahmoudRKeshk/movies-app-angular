import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private _http : HttpClient){

  }
  getMovies() : Observable<any>{
    return this._http.get('https://api.themoviedb.org/3/trending/all/day?api_key=866cd3a065ef9304a549f1d65e494940');
  }
}
