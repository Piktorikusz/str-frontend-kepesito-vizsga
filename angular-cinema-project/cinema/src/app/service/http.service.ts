import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  //BASE_URL = 'http://localhost:3000/movies';
  ApiUrl :string = 'https://tr360-frontend-exam-april.azurewebsites.net/piktorikusz/movies';

  constructor(
    private http: HttpClient
  ) { }
    

  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.ApiUrl);
  }

  update(movie: Movie): Observable<Movie> {
    return this.http.patch<Movie>(`${this.ApiUrl}/${movie.id}`, movie);
  }


  
  deleteMovie(id: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.ApiUrl}/${id}`);
  }
}
