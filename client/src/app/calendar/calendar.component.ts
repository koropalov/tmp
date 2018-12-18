import { Component, OnInit, Input } from '@angular/core';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import { CalendarService } from './calendar.service';
import { AppService} from '../app.service'

interface BookedDates{

  day:number;
  month:number;
  year:number;
  _id:string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @Input() childArray:[];

  bookedDates:BookedDates[] = [];
  nDate: string;
  dDate: string;
  j:number;

  constructor(private calendarService:CalendarService, protected appService:AppService) {}
   ngOnInit() {
     //запрос массива забронированных дат с сервера
    this.calendarService.getDate().subscribe((bookedDates:BookedDates[])=>{this.bookedDates=bookedDates,
       this.calendarService.bookedDates=this.bookedDates; console.log(this.calendarService.bookedDates)})
    
    
   }
   ngDoCheck(){
     this.j=this.appService.i;
    
   }
   
  bd = ["В календаре забронированные даты выделенны таким цветом",
  "В календарі заброньовані дати виділені таким кольором",
  "In the calendar, booked dates are highlighted"];
 
  


  getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    var day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }
  comparison(bookedDates,d){//проверяет совпадение даты с значением массива забранированных дат
    var resolt = false;
    for(var i=0; i<bookedDates.length; i++){
      if(d.getDate()==bookedDates[i].day&&
      d.getMonth()==bookedDates[i].month&&
      d.getFullYear()==bookedDates[i].year){
        resolt = true;
      } 
    }
  return resolt;
  }

  createCalendar(id, year, month) {
    var elem = document.getElementById(id);

    var mon = month; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    var d = new Date(year, mon);
    var m0 = ["январь","февраль","март","апрель","май","июнь","июль","август","сентябрь","октябрь","ноябрь","декабрь"];
    var m1 = ["січень","лютий","березень","травень","квітень","червень","липень","серпень","вересень","жовтень","листопад","грудень"];
    var m2 = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var  m=d.getMonth();
    var table;
     if(this.j==0){table='<tbody><thead><tr><td colspan="4" style="color:rgb(85, 85, 85)">'+m0[m]+'<td colspan="3" style="color:rgb(85, 85, 85)">'+year+'<tr style="color:rgb(85, 85, 85)"><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'}else{
       if(this.j==1){table='<tbody><thead><tr><td colspan="4" style="color:rgb(85, 85, 85)">'+m1[m]+'<td colspan="3" style="color:rgb(85, 85, 85)">'+year+'<tr style="color:rgb(85, 85, 85)"><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>нд</th></tr><tr>'}else{
         if(this.j==2){table='<tbody><thead><tr><td colspan="4" style="color:rgb(85, 85, 85)">'+m2[m]+'<td colspan="3" style="color:rgb(85, 85, 85)">'+year+'<tr style="color:rgb(85, 85, 85)"><th>mo</th><th>tu</th><th>we</th><th>th</th><th>fr</th><th>sa</th><th>su</th></tr><tr>'}
       }
     };

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (var i = 0; i < this.getDay(d); i++) {
      table += '<td></td>';
    }
    // ячейки календаря с датами

   
    while (d.getMonth() == mon) {
     if(this.comparison(this.bookedDates,d)==true){
       if((this.getDay(d)%7==6)||(this.getDay(d)%7==5)){
         if(this.d.getDate()==d.getDate()&&
         this.d.getMonth()==d.getMonth()&&
         this.d.getFullYear()==d.getFullYear()){
          table+='<td style="background-color:#53dd2e; border:2px solid #e35050; color:#e35050; border-radius: 5px">'+d.getDate()+'</td>';
         }else{
       table+='<td style="background-color:#53dd2e; color:#e35050; border-radius: 5px">'+d.getDate()+'</td>';}
      }else{
        if(this.d.getDate()==d.getDate()&&
        this.d.getMonth()==d.getMonth()&&
        this.d.getFullYear()==d.getFullYear()){
          table+='<td style="background-color:#53dd2e; border:2px solid #007bff; color:#007bff; border-radius: 5px">'+d.getDate()+'</td>';
        }else{
        table+='<td style="background-color:#53dd2e; color:#007bff; border-radius: 5px">'+d.getDate()+'</td>';}
      }
     }else{
       // проверка на текущую дату
      if(this.d.getDate()==d.getDate()&&
      this.d.getMonth()==d.getMonth()&&
      this.d.getFullYear()==d.getFullYear()){
        if((this.getDay(d)%7==6)||(this.getDay(d)%7==5)){
          table += '<td style="color:white; background-color: #e35050; border-radius: 5px">' + d.getDate() + '</td>';       
        }else{      
        table += '<td style="color:white; background-color: #007bff; border-radius: 5px">' + d.getDate() + '</td>';     
        }
      }else{
      if((this.getDay(d)%7==6)||(this.getDay(d)%7==5)){
        table += '<td style="color:#e35050">' + d.getDate() + '</td>';
      }else{    
      table += '<td style="color:#007bff">' + d.getDate() + '</td>';
    
      }
    }}
      if (this.getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>';
      }
      d.setDate(d.getDate() + 1);
    }
    // добить таблицу пустыми ячейками, если нужно
    if (this.getDay(d) != 0) {
      for (var i = this.getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }
    // закрыть таблицу
    table += '</tr></tbody>';
    // только одно присваивание innerHTML
    elem.innerHTML = table;
   
 
 
}
   d=new Date();
   m=this.d.getMonth();
   y=this.d.getFullYear();
   
   next(){
     
     return this.m==11 ? (this.m=0, this.y++) :(this.m++);
   }
   previous(){
     return this.m==0 ? (this.m=11,this.y--) : (this.m--);
   }


   
   



 

}


