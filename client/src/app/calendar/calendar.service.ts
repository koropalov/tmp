import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Foto, Price} from '../datachange/datachange.component'

interface BookedDates{

   day:number;
   month:number;
   year:number;
   _id:string;
 }
//  interface Price{
//    cost:{
//       type:string,
//       _id:string
//    }
  
//  }


@Injectable()
export class CalendarService{
  gallery:Foto[]
  price:Price
  priceNY:Price
  priceW:Price
  bookedDates:BookedDates[]=[]
 constructor(private http:Http,
             private http1:HttpClient){ }
            
 getDate():Observable<BookedDates[]>{
  return this.http1.get<BookedDates[]>('api/date')
  
 }
 getPrice():Observable<Price>{
    return this.http1.get<Price>('api/cost')
 }

 getPriceNY():Observable<Price>{
   return this.http1.get<Price>('api/costny')
}

getPriceW():Observable<Price>{
   return this.http1.get<Price>('api/costw')
}

 getGallery():Observable<Foto[]>{
   return this.http1.get<Foto[]>('api/gallery')
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
createPrice(nPrice:string):Observable<Price>{
   let data={
         cost:nPrice,
         _id:nPrice
   }
 return this.http1.post<Price>('api/cost',data)
}


deletePrice(price:Price):Observable<null>{
    return this.http1.delete<null>(`api/cost/${price}`)
}

createPriceNY(nPriceNY:string):Observable<Price>{
    let data={
      costny:nPriceNY,
      _id:nPriceNY
    }
   return this.http1.post<Price>('api/costny',data)
  }

  deletePriceNY(priceNY:Price):Observable<null>{
    return this.http1.delete<null>(`api/costny/${priceNY}`)
  }
  createPriceW(nPriceW:string):Observable<Price>{
    let data={
      costw:nPriceW,
      _id:nPriceW
    }
 
   return this.http1.post<Price>('api/costw',data)
  }

  deletePriceW(priceW:Price):Observable<null>{
    return this.http1.delete<null>(`api/costw/${priceW}`)
  }

addFoto(image:File):Observable<Foto>{
   const fd=new FormData()
   fd.append('image',image,image.name)
 return this.http1.post<Foto>('api/gallery',fd)
}
            
deleteDate(dDate:string){
   const 
      _id = (dDate.substr(8,2)+dDate.substr(5,2)+dDate.substr(0,4))
         return this.http1.delete(`api/date/${_id}`)
}

deleteFoto(_id:string):Observable<null>{
return this.http1.delete<null>(`api/gallery/${_id}`)
}
 
}
