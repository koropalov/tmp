import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service'
import { CalendarService} from '../calendar/calendar.service';
interface Gallery{
  // imageSrc:string,
  // _id:string
  imageSrc:{
     type:string,
     _id:string
 }
 
}
export class Foto{
  _id:string;
   imageSrc:string;
}

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
   
 
  gallery:Foto[]=[];
 i:number;
  constructor(public appService: AppService, public calendarService:CalendarService) { }
    ngOnInit() {
     
      this.calendarService.getGallery().subscribe((gallery:Foto[])=>{this.gallery=gallery,console.log(gallery)})
    }
    ngDoCheck(){
       this.i=this.appService.i;
    }

photoGallery=['Фото галерея','Фото галерея','Photo gallery'];
}
