import { Injectable } from '@angular/core';
import { 
  CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router 
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): boolean {
    const currentUser = localStorage.getItem('currentUser');
    
    if (currentUser) {
      return true;
    }

    // Redirect to signup page if not authenticated
    this.router.navigate(['/signup']);
    return false;
  }
}