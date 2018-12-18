import { Component, Output } from '@angular/core';
import { trigger,state, style, transition, animate } from '@angular/animations';
import { formControlBinding } from '@angular/forms/src/directives/reactive_directives/form_control_directive';
import {AppService} from './app.service'
import { from } from 'rxjs';
import {appAnimation} from './app.animation'
import { CalendarService } from './calendar/calendar.service';

interface Language{
  id:number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[appAnimation]
 
})
export class AppComponent {
  ff='end';
  i:number;
  language:Language;
  languageRu(){
   this.i=0;
   this.appService.i=this.i;
  }
  languageUa(){
     // this.calendarService.changId(1).subscribe((data)=>{console.log(data)});
      this.i=1;
      this.appService.i=this.i;
    }
    languageEn(){
    //this.calendarService.changId(2).subscribe((data)=>{console.log(data)});
    this.i=2;
    this.appService.i=this.i;
    }
  

   constructor(public appService:AppService,public calendarService:CalendarService) {}
  ngOnInit(){  
    //this.calendarService.getI().subscribe((language:Language)=>{this.i=language.id;});
   this.i=this.appService.i;
}


 
 home=['Дом','Будинок','Home'];
 yard=['Двор',"Подвір'я",'Yard'];
 rentPrice=['Стоимость аренды','Вартість оренди','Rent price'];
 photoGallery=['Фото галерея','Фото галерея','Photo gallery'];
 calendar=['Календарь','Календар','The calendar'];
 contacts=['Контакты','Контакти','The contacts'];
 TravelersHouse=['"Дом Путешественников"','"Оселя мандрівників"','"Travelers House"'];
 adress=['Украина, Львовская область, Сколевский р-н,село Тухля,ул.Захара Беркута 109б',
 'Україна, Львівська область, Сколівський р-н,село Тухля,вул.Захара Беркута 109б;',
 'Ukraine, Lviv region, Skole district, village Tukhlya, Zakhara Berkuta street 109b'];
 olya=['Оля','Оля','Olya'];
 denys=['Денис','Денис','Denys'];
  


    
f(){
this.ff='start';
setTimeout(()=>{this.ff='end'},50)

}
}

 