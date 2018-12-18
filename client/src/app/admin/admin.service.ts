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
setToken(token){
this.token=token
}
logout(){
    this.setToken(null)
    localStorage.clear()
}


// addDate(nDate:string){
//     const data = {
//          day: +nDate.substr(8,2),
//          month: +nDate.substr(5,2)-1,
//          year: +nDate.substr(0,4),
//          id: +(nDate.substr(8,2)+nDate.substr(5,2)+nDate.substr(0,4))
//     }
//     return this.http.post('http://localhost:3000/bookedDates',data)
//     .map((response:Response)=> response.json());
// }

// deleteDate(dDate:any){
//     const data = {
//         day: +dDate.substr(8,2),
//         month: +dDate.substr(5,2)-1,
//         year: +dDate.substr(0,4),
//         id:+(dDate.substr(8,2)+dDate.substr(5,2)+dDate.substr(0,4))
//    }
//    return this.http.delete(`http://localhost:3000/bookedDates/${data.id}`)
//     .map((response:Response)=> response.json());
// }
}