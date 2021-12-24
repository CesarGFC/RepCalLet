import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { IServices } from "../interfaces/services.interface"

@Injectable({
    providedIn: 'root'
  })
  export class ServicesService {
    base:string = environment.API_URL
    constructor(private HttpClient:HttpClient) { 
  
    }
    getServices():Observable<IServices[]>{
      return this.HttpClient.get(this.base + "services") as any
    }
    getById(serviceid:string):Observable<IServices>{
      return this.HttpClient.get(this.base + "services"+'/'+serviceid) as any
    }
  
  }