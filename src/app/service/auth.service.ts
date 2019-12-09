import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth :Boolean = false;

  constructor() { }

  public getAuth(){
    return this.auth;
  }

  public setAuth(boo:Boolean){
    this.auth=boo;
  }

}
