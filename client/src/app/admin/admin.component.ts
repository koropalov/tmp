import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from './admin.service';
import { CalendarService } from '../calendar/calendar.service';
import { AppService } from '../app.service';
import { timingSafeEqual } from 'crypto';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

interface BookedDates{
  day:number;
  month:number;
  year:number;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
form:FormGroup
aSub:Subscription //Отвечает за отсутствие памяти
 bookedDates:BookedDates[] = [];
 nDate: string;
 dDate: string;
 formDate = {};
 adminName = 'Koropalov';
 adminPass = '30061110';
//private adminService:AdminService,
 constructor(private calendarService:CalendarService,
             private appService:AppService,
             private adminServis:AdminService,
             private router:Router,
             private route:ActivatedRoute) { }
 ngOnInit() {
  this.form = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(4)])
  })
  this.route.queryParams.subscribe((params:Params)=>{})
 }
 ngOnDestroy(){//Вызывается при уничтожении компонента
  if(this.aSub){
    this.aSub.unsubscribe()
  }

 }
 onSubmit(){
   this.form.disable()
this.aSub=this.adminServis.login(this.form.value).subscribe(
  ()=>this.router.navigate(['/datachange']),
  error=>{console.warn(error)
  this.form.enable()}
)
 }
  // submitForm(){
  //   this.formDate = this.form.value;
  //  if(this.form.value.name===this.adminName&&this.form.value.pass===this.adminPass){
  //   this.isSubmited = true;
  //  }
    
    
  // }
 
  // addDate(){
  //    this.calendarService.addDate(this.nDate)
  //    .subscribe((json)=>{
  //     console.log(json);
  //    });
     
  // }

  // deleteDate(){
  // this.calendarService.deleteDate(this.dDate)
  // .subscribe((json)=>{
  //   console.log(json);
  // });

  //}

  

 
}
