import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private localStorage = window.localStorage
  public listenUsr = new BehaviorSubject('')
  constructor() {  
  }
  getSession(){
    return this.localStorage.getItem('token')
  }
  setSession(value){
    this.listenUsr.next(value)
    return this.localStorage.setItem('token', value)
  }


}
