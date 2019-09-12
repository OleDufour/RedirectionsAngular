import { Injectable } from '@angular/core';
import { CanActivate ,Router, ActivatedRouteSnapshot, RouterStateSnapshot ,UrlTree } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGardService implements CanActivate {

  _canActivate: boolean;

  constructor(private loginService: LoginService,  private router: Router) {
    // alert('construcgort')
    // loginService.loginStatusRaised$.subscribe(x => {
    //   console.log('xxxxxxxxxxx', x);
    //   this._canActivate = x;
    // });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
      // if(this.authService.isLoggedIn){
      //   return true;
      // }
      // else{
        return this.router.parseUrl("/admin/login"); // bestaat niet.
      //}
  }

}
