import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './services/auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AuthTokenGuard implements CanActivate {

  constructor(
    private router: Router,
    private auth: AuthService
    ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.authJWT()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }

}
