import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    
    constructor(private _authService: AuthService, private _router: Router) { }
      
      canActivate(): boolean {
        //boolean to check whether or not user is logged in
        if (this._authService.loggedIn()) {
          return true
          //return true, show page
        } else {
          this._router.navigate(['/login'])
          return false
          //ask user to login
        }
      }

      canLoad(): boolean {
        if (this._authService.loggedIn()) {
          return true
          //return true, show page
        } else {
          this._router.navigate(['/login'])
          return false
          //ask user to login
        }

      }
    
  
}
