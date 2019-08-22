import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _loginService: LoginService) { }

  login() {
    var result = this._loginService.login("ole", "123");
    if (result)
      this._loginService.passLoggedIn(true);
  }

  ngOnInit() {
  }

}
