import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IQuotes } from '../interfaces/quotes.interface';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  base:string = environment.API_URL
  constructor(private HttpClient:HttpClient) { 

  }
  newQuote(data:IQuotes):Observable<IQuotes>{
    return this.HttpClient.post(this.base + "quotes",{
      ...data
    }) as any
  }
  getQuotes():Observable<Array<IQuotes>>{
    return this.HttpClient.get(this.base+ "quotes") as any
  }
}
