import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { GlobalStateService } from '../services/global-state.service';


@Injectable({providedIn:"root"})
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private authService: GlobalStateService, private router: Router) { }

    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        if (!this.authService.isLogged()) {
            console.log('No estás logueado');
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }
    
}
@Injectable({providedIn:"root"})
export class CanDeActivateViaAuthGuard implements CanActivate {

    constructor(private authService: GlobalStateService, private router: Router) { }

    canActivate() {
        // If the user is not logged in we'll send them back to the home page
        if (this.authService.isLogged()) {
            this.router.navigate(['/tabs/notes']);
            return false;
        }
        return true;
    }
    
}
