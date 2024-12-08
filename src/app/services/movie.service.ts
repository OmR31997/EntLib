import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Models/movie.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService 
{
  apiUrl:string;
  constructor(private hClient:HttpClient) 
  {
    if (environment.entertaiment) 
      {
        this.apiUrl = environment.entertaiment.movieApiUrl;
      } 
      else 
      {
        throw new Error('Environment "entertaiment" is not defined');
      }
  }

  getMovies():Observable<Movie[]>
  {
    return this.hClient.get<Movie[]>(this.apiUrl);
  }

  getMovie(id:string):Observable<Movie>
  {
    return this.hClient.get<Movie>(`${this.apiUrl}/${id}`);
  }
  
}
