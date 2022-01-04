import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { ISales } from "../interfaces/sales.interface"

@Injectable({
    providedIn: 'root'
  })
  export class salesService {
    base:string = environment.API_URL
    constructor(private HttpClient:HttpClient) { 
  
    }
    getSales():Observable<ISales[]>{
      return this.HttpClient.get(this.base + "sales") as any
    }
    getById(saleid:string):Observable<ISales>{
      return this.HttpClient.get(this.base + "sales"+'/'+saleid) as any
    }
  
  }