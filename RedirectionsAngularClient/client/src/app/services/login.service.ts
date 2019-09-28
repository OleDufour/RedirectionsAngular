import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn = false;
  login(username, password) {
    if (username === "ole" && password === "123")
      this.isLoggedIn = true;
    else
      this.isLoggedIn = false;

    return this.isLoggedIn;
  }

  private loginStatusSource = new Subject<boolean>();

  // Observable string streams
  loginStatusRaised$ = this.loginStatusSource.asObservable();

  passLoggedIn(loggedIn: boolean) {
    this.loginStatusSource.next(loggedIn);
  }


  constructor() { }
}