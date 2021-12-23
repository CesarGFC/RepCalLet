import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { IProducts } from "../interfaces/products.interface"

@Injectable({
    providedIn: 'root'
  })
  export class productsService {
    base:string = environment.API_URL
    constructor(private HttpClient:HttpClient) { 
  
    }
    getProducts():Observable<IProducts[]>{
      return this.HttpClient.get(this.base + "products") as any
    }
    getById(productid:string):Observable<IProducts>{
      return this.HttpClient.get(this.base + "products"+'/'+productid) as any
    }
  
  }