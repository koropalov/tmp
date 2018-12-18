import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { AppService } from '../app.service';
import { CalendarService } from '../calendar/calendar.service';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})

export class ContactsComponent implements OnInit {
 
 i:number;
  constructor(public appService: AppService, public calendarService:CalendarService) { }
    ngOnInit() {
     
    }
    ngDoCheck(){
       this.i=this.appService.i;
    }
    contacts=['Контакты','Контакти','The contacts'];
 TravelersHouse=['"Дом Путешественников"','"Оселя мандрівників"','"Travelers House"'];
 adress=['Украина, Львовская область, Сколевский р-н,село Тухля,ул.Захара Беркута 109б',
 'Україна, Львівська область, Сколівський р-н,село Тухля,вул.Захара Беркута 109б;',
 'Ukraine, Lviv region, Skole district, village Tukhlya, Zakhara Berkuta street 109b'];
 olya=['Оля','Оля','Olya'];
 denys=['Денис','Денис','Denys'];
 way=['Добраться к усадьбе очень просто:автомобилем или маршрутным такси, поездом или электричкой. Усадьба находится в 10 километрах от известного горно-лыжного курорта Славское',
 'Дістатися до садиби дуже просто: автомашиною чи маршрутним таксі, потягом або електричкою. Садиба знаходиться в 10 кілометрах від відомого  гірсько-лижного курорту Славське.',
 'Getting to the estate is very simple: by car or taxi or train. The estate is located 10 kilometers from the famous mountain ski resort Slavske'];
 }
