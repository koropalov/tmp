import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription} from 'rxjs'
import { CalendarService } from '../calendar/calendar.service';


@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  i:number;
  home=['Дом','Будинок','Home'];
  p1=["Усадьба возведена в живописной горной расщелене Карпат на околице села Тухля, принадлежащей национальному парку «Сколевские Бескиды».Место природной силы, гармонии и спокойствия образуется благодаря слиянию двух Карпатских речек: Лыбохори и Опира.«Дом Путешественников» находится сразу за гальковым пляжем.Вокруг вздымаются горные хребты живописных Карпат: Зэлэминський и Головецкий.",
  " Садибу зведено у мальовничій гірській ущелині Карпат на околиці села Тухля, що належить до національного парку «Сколівські Бескиди».Місце природної сили, гармонії та спокою утворюється завдяки злиттю двох Карпатських річок:Либохори та Опору.«Оселя Мандрівників» знаходиться одразу за гальковим пляжем.Довкола височіють  гірськи  хребти мальовничих Карпат : Зелемінський та Головецький. ",
  "The manor was erected in the picturesque mountain ridge of the Carpathians on the outskirts of the village of Tukhlya, belonging to the Skole Beskids national park. mountain ranges of the picturesque Carpathians: Zaleminsky and Golovetsky."];
  p2=["Двухэтажное строение усадьбы создано так, чтоб обьеденить геометрию силы с принципами спокойствия. Так на первом этаже находятся:кухня, большая открытая веранда, столовая,каминный зал, библиотека, комната отдыха, сан узел и одна из пяти спален. На втором этаже находятся две двух ярусные спальни по четыре места, одна четырех местная, одна двух мместная и сан узел.",
"Двоповерхову будівлю садиби створено так,щоб поєднати геометрію сили з принципом спокою. Так, на першому поверсі розташувалися:кухня, велика відкрита веранда, їдальня, камінний зал, бібліотека, кімната відпочинку, сан вузел та одна з п'яти спалень. На другому поверсі містяться дві двох ярусні спальні по чотири місця, одна чотирьох місна, одна двох місна спальні та сан вузел.",
"The two-story structure of the estate was created so as to integrate the geometry of power with the principles of tranquility. So on the first floor are: kitchen, large open veranda, dining room, fireplace room, library, lounge, bathroom and one of the five bedrooms. On the second floor there are two two-tier bedrooms with four beds, one four-bed, one double, and one bathroom."];
  p3=["Дом оборудован современными удобствами: гарячей водой, газом, камином, автономным отоплением.В бане - отдельном строении - есть: сауна, душевая, кадушка с холодной водой, комната отдыха.",
"Оселя обладнана сучасними зручностями: гарячою водою, газом, каміном, автономним опаленням.В лазні – окремій будівлі – є: сауна, душова, діжка з джерельною водою, кімната для   релаксації.",
"The house is equipped with modern amenities: hot water, gas, fireplace, independent heating. In the bath - a separate structure - there is a sauna, shower, cold water tub, a relaxation room."]

  constructor(public appService:AppService, public calendarService:CalendarService) { }
  
 ngOnInit() {
  
 
  }
  ngDoCheck(){
    this.i=this.appService.i;
  }
}
