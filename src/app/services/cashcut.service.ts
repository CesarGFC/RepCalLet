import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { ICashcut } from "../interfaces/cashcut.interface"

@Injectable({
    providedIn: 'root'
  })
  export class CashcutsService {
    base:string = environment.API_URL
    constructor(private HttpClient:HttpClient) { 
  
    }
    getCashcuts():Observable<ICashcut[]>{
      return this.HttpClient.get(this.base + "cashcuts") as any
    }
    getById(cashcutid:string):Observable<ICashcut>{
      return this.HttpClient.get(this.base + "cashcuts"+'/'+cashcutid) as any
    }
  
  }