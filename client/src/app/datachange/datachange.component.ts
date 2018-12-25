import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {CalendarService} from '../calendar/calendar.service'
import { NAMED_ENTITIES } from '@angular/compiler';
import { type } from 'os';


export class Foto{
  _id:string;
   imageSrc:string;
}
export class Price{
  _id:string;
  cost:string;
 
}

@Component({
  selector: 'app-datachange',
  templateUrl: './datachange.component.html',
  styleUrls: ['./datachange.component.css']
})
export class DatachangeComponent implements OnInit {
  @ViewChild('input') inputRef:ElementRef
  //@ViewChild('id') id:ElementRef
  nDate: string;
  dDate:string;
  price:Price
  priceNY:Price
  priceW:Price
  priceUgely:string;
  pNY:string;
  pW:string;
  image:File;
  imagePreview;
  gallery:Foto[];
  editP=false
  editPNY=false
  editPW=false
  constructor(private calendarService:CalendarService) { }
ngOnInit() {
  this.calendarService.getGallery().subscribe((gallery:Foto[])=>{this.gallery=gallery})
  }
  ngDoCheck(){
    
  }
  editPrice(){
    this.editP=true
    this.calendarService.getPrice().subscribe((price:Price)=>{this.price=price})
    this.calendarService.deletePrice(this.price).subscribe((json)=>{console.log(json)})
  }
  editPriceNY(){
    this.editPNY=true
    this.calendarService.getPriceNY().subscribe((priceNY:Price)=>{this.priceNY=priceNY})
    this.calendarService.deletePriceNY(this.priceNY).subscribe((json)=>{console.log(json)})
  }
  editPriceWood(){
  this.editPW=true
    this.calendarService.getPriceW().subscribe((priceW:Price)=>{this.priceW=priceW})
    this.calendarService.deletePriceW(this.priceW).subscribe((json)=>{console.log(json)})
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
    this.calendarService.createPrice(this.priceUgely)
    .subscribe((json)=>{ 
      console.log(json)
    })
    this.editP=false
  }
  chengePriceNY(){
    this.calendarService.createPriceNY(this.pNY)
    .subscribe((json)=>{
      console.log(json)
    })
    this.editPNY=false
  }
  chengePriceWood(){
    this.calendarService.createPriceW(this.pW)
    .subscribe((json)=>{
      console.log(json)
    })
    this.editPW=false
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
    this.calendarService.addFoto(this.image).subscribe((res)=>{this.gallery.push(res), console.log(res)})
  }

  deleteFoto(id:string){
   let p=confirm('Вы действительно хотите удалить фото ?')
   if(p)
   {this.calendarService.deleteFoto(id).subscribe(
     (res)=>{this.gallery=this.gallery.filter(foto=>foto._id!==id)
     console.log(id)
     },
     (err)=>{
    }
   )
  }
}
}
