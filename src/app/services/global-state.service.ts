import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../interfaces/auth-response.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private localStorage = window.localStorage
  public _userSession = new BehaviorSubject<Login>(null)
  constructor() { 
    this.isLogged() 
  }
  get asObservable():Observable<Login>{ 
    return this._userSession.asObservable()
  }
  get userSession():Login{
    return this._userSession.getValue()
  }
  set userSession(user:Login){
    if(user){
      this.localStorage.setItem("token", JSON.stringify(user))
    }else{
      this.localStorage.removeItem("token")
    }
    this._userSession.next(user)
  }
  isLogged(){ 
   let userSession=JSON.parse(this.localStorage.getItem("token"))
   this.userSession=userSession
    return !!userSession
  }
  logout(){
    this.localStorage.clear()
    this.userSession=null
  }
}
