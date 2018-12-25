import { Component, OnInit } from '@angular/core';
import { AppService} from '../app.service';
import {CalendarService} from '../calendar/calendar.service';
import {Price} from '../datachange/datachange.component'

// interface Price{
//   cost:{
//     type:string,
//     _id:string
//   }

// }



@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  price:Price
  priceNY:Price
  priceW:Price
  i:number;
  
  h1=["Стоимость аренды","Вартість оренди","Rent price"]
  p1=["Стоимость проживания в доме:","Вартість проживання в будинку:","The cost of living in the house:"];
  p2=["гривен в сутки.","гривень за добу.","hryvnia per day."];
  p3=["В Ново Годний период:","В Ново Річний період:","In the New Year period:"];
  p4=["За дополнительную плату можно приобрести дрова для мангала:",
  "За додаткову плату можна придбати дрова для мангалу:",
  "For an additional fee you can buy firewood for the barbecue:"];
  p5=["гривен корзина.","гривень за кошик.","hryvnia basket."];
  p6=["Время заезда и выезда обговаривается при бронировании.",
  "Час заїзду та виїзду обговорюеться при бронюванні.",
  "Check-in and check-out time is negotiated at time of booking."];

  constructor(public appService: AppService, public calendarService:CalendarService) { }
  ngOnInit() {
   this.calendarService.getPrice().subscribe((price:Price)=>{this.price=price,console.log(price)})
   this.calendarService.getPriceNY().subscribe((priceNY:Price)=>{this.priceNY=priceNY})
   this.calendarService.getPriceW().subscribe((priceW:Price)=>{this.priceW=priceW})
  }

  ngDoCheck(){
     this.i=this.appService.i;

  }
}
