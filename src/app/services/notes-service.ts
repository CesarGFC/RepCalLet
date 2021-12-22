import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { INotes } from '../interfaces/notes.interface';

@Injectable({
  providedIn: 'root'
})
export class notesService {
  base:string = environment.API_URL
  constructor(private HttpClient:HttpClient) { 

  }
  getNotes():Observable<INotes[]>{
    return this.HttpClient.get(this.base + "notes") as any
  }
  getById(noteid:string):Observable<INotes>{
    return this.HttpClient.get(this.base + "notes"+'/'+noteid) as any
  }

}