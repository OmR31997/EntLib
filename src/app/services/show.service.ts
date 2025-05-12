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
    this.apiUrl = environment.entertaiment.SHOW_API;
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
