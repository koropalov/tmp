import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CalendarService} from '../calendar/calendar.service'

interface Gallery{
  // imageSrc:string,
  // _id:string
  imageSrc:{
     type:string,
     _id:string
 }
 
}

@Component({
  selector: 'app-datachange',
  templateUrl: './datachange.component.html',
  styleUrls: ['./datachange.component.css']
})
export class DatachangeComponent implements OnInit {
  @ViewChild('input') inputRef:ElementRef
  nDate: string;
  dDate:string;
  pU:string;
  pNY:string;
  pW:string;
  image:File;
  imagePreview;
  gallery:Gallery[]=[];
 
  constructor(private calendarService:CalendarService) { }
ngOnInit() {
  this.calendarService.getGallery().subscribe((gallery:Gallery[])=>{this.gallery=gallery})
  }
 
  addDate(){
    this.calendarService.addDate(this.nDate)
    .subscribe((json)=>{
     console.log(json);
    });
    
 }
 
 deleteDate(){
  this.calendarService.deleteDate(this.dDate)
  .subscribe((json)=>{
    console.log(json);
   });

  }
  chengePrice(){
    this.calendarService.createPrice(this.pU)
    .subscribe((json)=>{
      console.log(json)
    })
  }
  chengePriceNY(){
    this.calendarService.createPrice(this.pNY)
    .subscribe((json)=>{
      console.log(json)
    })
  }
  chengePriceWood(){
    this.calendarService.createPrice(this.pW)
    .subscribe((json)=>{
      console.log(json)
    })
  }
  loadImg(){
   this.inputRef.nativeElement.click()
    
  }
  onFileUpload(event:any){
  const file=event.target.files[0]
  this.image=file

  const reader = new FileReader()
  reader.onload=()=>{
    this.imagePreview=reader.result
  }
  reader.readAsDataURL(file)
  }
  onSubmit(){
    
    this.calendarService.createGallery(this.image).subscribe(gallery=>{
      
    })
  }
  deleteGallery(){
    //this.calendarService.deleteGallery(this.gallery._id).subscribe( )

   
  }
}
