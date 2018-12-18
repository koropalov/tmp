import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

interface BookedDates{

   day:number;
   month:number;
   year:number;
   _id:string;
 }
 interface Price{
   cost:string;
 }
interface Gallery{
   // imageSrc:string,
   // _id:string
   imageSrc:{
      type:string,
      _id:string
  }
  
}

@Injectable()
export class CalendarService{
  gallery:Gallery[]=[]
  price:Price[]=[]
  bookedDates:BookedDates[]=[]
 constructor(private http:Http,
             private http1:HttpClient){
                
             }
            
 getDate():Observable<BookedDates[]>{
  return this.http1.get<BookedDates[]>('api/date')
  
 }
 getPrice():Observable<Price[]>{
    return this.http1.get<Price[]>('api/cost')
 }
 getGallery():Observable<Gallery[]>{
   return this.http1.get<Gallery[]>('api/gallery')
}

addDate(nDate:string):Observable<BookedDates[]>{
   const data = {
               day: +nDate.substr(8,2),
               month: +nDate.substr(5,2)-1,
               year: +nDate.substr(0,4),
               _id: (nDate.substr(8,2)+nDate.substr(5,2)+nDate.substr(0,4))
          }
          for(var i=0; this.bookedDates.length;i++){
             console.log(this.bookedDates[i])
          }
          return this.http1.post<BookedDates[]>('api/date',data)
}
createPrice(nPrice:string):Observable<Price[]>{
 
 return this.http1.post<Price[]>('api/cost',nPrice)
}

createGallery(image:File):Observable<Gallery>{
   const fd=new FormData()
   fd.append('image',image,image.name)
 return this.http1.post<Gallery>('api/gallery',fd)
}
            
deleteDate(dDate:string){
   const 
      _id = (dDate.substr(8,2)+dDate.substr(5,2)+dDate.substr(0,4))
         return this.http1.delete(`api/date/${_id}`)
}

deleteGallery(_id:string):Observable<Gallery>{
return this.http1.delete<Gallery>(`api/gallery/${_id}`)
}
 
}