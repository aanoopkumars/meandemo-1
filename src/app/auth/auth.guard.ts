import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { LbCallService } from '../lb-call.service';

 @Injectable({providedIn: "root"})
export class authGuard implements CanActivate{

    constructor(private serv: LbCallService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        console.log('In routGuard');
        
        return true;
    }
}