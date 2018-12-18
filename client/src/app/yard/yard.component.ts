import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { CalendarService} from '../calendar/calendar.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-yard',
  templateUrl: './yard.component.html',
  styleUrls: ['./yard.component.css']
})
export class YardComponent implements OnInit {
  i:number;
  yard=['Двор',"Подвір'я",'Yard'];
  p1=["В «Доме Путешественников» можно отдыхать компанией, семьёй с детьми, парами и даже одному.",
  "В «Оселі Мандрівників» можна відпочивати компанією,родиною з дітьми, парами й навіть наодинці.",
  "In the «House of Travelers» you can relax in company, family with children, couples and even one."];
  p2=["«Дом Путешественников» - удачное место для отдыха в Карпатах, празднований, проведения семинаров и тренингов.",
  "«Оселя Мандрівників» - вдале місце для відпочинку в Карпатах, святкувань, проведення семінарів та тренінгів.",
  "House of Travelers ”is a good place to rest in the Carpathians, celebrations, seminars and trainings."];
  p3=["На протяжении всего года этим уголком спокойствия и силы можна пользоваться для обновления, оздоровления, учёбы. Во дворе находятся, мангал, биседка, детская площадка, в теплое время года есть так же батут и бассейн.",
  "Впродовж цілого року цим куточком спокоюй сили можна користуватися для відновлення, оздоровлення та навчання. На подвір'ї розташованний, мангал, альтанка, дитячій майданчик, в теплий період року є також батут і басейн.",
  "Throughout the year, this corner of tranquility and strength can be used for renewal, recovery, study. In the courtyard there are barbecue facilities, a bedclothes, a playground, in the warm season there is also a trampoline and a swimming pool."];
  p4=["Летом в Карпатах приятно ходить в горы, купатся в речке, собирать ягоды, грибы и травы.",
   " Влітку в Карпатах приємно ходити в гори, купатися в річці, збирати ягоди, гриби та трави.",
  "In the summer in the Carpathians it is pleasant to go to the mountains, bathe in the river, pick berries, mushrooms and herbs."];


  constructor(public appService: AppService, public calendarService:CalendarService) { }
  ngOnInit() {
    
  }

  ngDoCheck(){
   this.i=this.appService.i;
  }
}
