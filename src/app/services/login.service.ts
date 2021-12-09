import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Login } from '../interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  base:string = environment.API_URL
  constructor(private HttpClient:HttpClient) { 

  }
  validateLogin(username, password):Observable<Login>{
    return this.HttpClient.post(this.base + "auth/login",{
        username, password 
    }) as any
  }

}
