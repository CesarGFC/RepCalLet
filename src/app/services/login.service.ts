import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private HttpClient:HttpClient) { 

  }
  validateLogin(username, password){
    return this.HttpClient.post('/api/user/login',{
        username, password 
    })
}
}
