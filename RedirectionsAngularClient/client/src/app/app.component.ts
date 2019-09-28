import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { LoginService } from './services/login.service'
import { LoginComponent } from './pages/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  isLoggedIn: boolean = false;
  constructor(private translate: TranslateService, _loginService: LoginService) {
    this.translate.addLangs(['en', 'fr'])
    this.translate.setDefaultLang('fr');
    //this.  isLoggedIn=_loginService.isLoggedIn;

    _loginService.loginStatusRaised$.subscribe(err => {
      alert('islogged in: '+_loginService.isLoggedIn);
      this.isLoggedIn = _loginService.isLoggedIn;

      //alert(this.errorMessage)
    });


  }




  chosenLanguageHasChanged(lang: string) {
    this.translate.use(lang);
  }
}
