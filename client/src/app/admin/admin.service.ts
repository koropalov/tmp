import { Injectable } from "@angular/core";
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';
import { Key } from "protractor";


interface Admin{
    email:string,
    password:string
}

@Injectable()
export class AdminService{
    private token=null;
constructor(private http:HttpClient){}

login(user:Admin):Observable<{token:string}>{
return this.http.post<{token:string}>('/api/auth/login',user)
.pipe(
    tap(
        ({token})=>{
            localStorage.setItem('auth-token',token)
            this.setToken(token)
        }
    )
)
}
setToken(token:string){
this.token=token
}
getToken():string{
return this.token
}
isAuthenticated():boolean{
return !!this.token
}
logout(){
    this.setToken(null)
    localStorage.clear()
}


}