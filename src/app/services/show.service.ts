import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Show } from '../Models/show.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  apiUrl:string;
  constructor(private hClient:HttpClient) 
  {
    if (environment.entertaiment) 
      {
        this.apiUrl = environment.entertaiment.showApiUrl;
      } 
      else 
      {
        throw new Error('Environment "entertaiment" is not defined');
      }
    this.getShows();
  }

  getShows():Observable<Show[]>
  {
    return this.hClient.get<Show[]>(this.apiUrl);
  }

  getShow(id:string):Observable<Show>
  {
    return this.hClient.get<Show>(`${this.apiUrl}/${id}`);
  }
}
