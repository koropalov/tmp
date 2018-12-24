import { CanActivate } from "@angular/router/src/utils/preactivation";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";
import { AdminService } from "src/app/admin/admin.service";

@Injectable({
    providedIn:'root'
})

export class AuthGuard implements CanActivate{
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
    
    constructor(private auth:AdminService,
        private router:Router){

    }
    canActivate(router:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>{
 if(this.auth.isAuthenticated()){
     return of(true)
 }else{
alert('Вы не авторизированны')
this.router.navigate(['/admin'])
return of(false)
 }
    }
}