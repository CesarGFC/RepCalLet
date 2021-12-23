import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"
import { ICustomers } from "../interfaces/customers.interface"

@Injectable({
    providedIn: 'root'
  })
  export class CustomersService {
    base:string = environment.API_URL
    constructor(private HttpClient:HttpClient) { 
  
    }
    getCustomers():Observable<ICustomers[]>{
      return this.HttpClient.get(this.base + "customers") as any
    }
    getById(customerid:string):Observable<ICustomers>{
      return this.HttpClient.get(this.base + "customers"+'/'+customerid) as any
    }
  
  }