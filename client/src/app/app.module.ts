import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';


import { HouseComponent } from './house/house.component';
import { YardComponent } from './yard/yard.component';
import { PriceComponent } from './price/price.component';
import { PhotoComponent } from './photo/photo.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ContactsComponent } from './contacts/contacts.component';
import {CarouselModule} from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AdminComponent } from './admin/admin.component';
import {CalendarService} from './calendar/calendar.service';
import { AdminService } from './admin/admin.service';
import { AppService } from './app.service';
import { DatachangeComponent } from './datachange/datachange.component';






@NgModule({
  declarations: [
    AppComponent,
    HouseComponent,
    YardComponent,
    PriceComponent,
    PhotoComponent,
    CalendarComponent,
    ContactsComponent,
    AdminComponent,
    DatachangeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    ReactiveFormsModule
  
  ],
  providers: [CalendarService, AdminService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
