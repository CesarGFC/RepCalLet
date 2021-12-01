import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private localStorage = window.localStorage
  public _userSession = new BehaviorSubject('')
  constructor() {  
  }
  get asObservable():Observable<string>{ 
    return this._userSession.asObservable()
  }
  get userSession():string{
    return this._userSession.getValue()
  }
  set userSession(user:string){
    if(user){
      this.localStorage.setItem("token",user)
    }else{
      this.localStorage.removeItem("token")
    }
    this._userSession.next(user)
  }
}
